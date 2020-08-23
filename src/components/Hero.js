import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';

const Hero = memo(() => {
	//state del componente
	const [ state, setState ] = useState('');
	//llamado a la API
	useEffect(() => {
		let endPoint = `https://api.themoviedb.org/3/trending/all/day?api_key=99b3707ab8a09b11417e0968f93c375f&language=es`;
		const randomMovie = (Math.random() * 18 + 1).toFixed(0);
		fetch(endPoint).then((res) => res.json()).then((results) => {
			setState(results.results[randomMovie]);
			// console.log(results.results[randomMovie]);
			document.querySelector('.home-hero').style.backgroundImage =
				"linear-gradient(90deg, rgb(5, 7, 19) 15%, rgba(13, 10, 37, 0.5) 100%),url('https://image.tmdb.org/t/p/original" +
				results.results[randomMovie].backdrop_path +
				"')";
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (state === '') return null;
	return (
		<section className="home-hero ">
			<header className="hero-container over-container">
				<img src={'https://image.tmdb.org/t/p/original' + state.poster_path} alt="" className="logo-movie" />
				<div className="mini-info-movie">
					<h2>{state.title || state.name}</h2>
					<p className="red-badge">{state.media_type}</p>
					<p className="review">{state.overview.substring(0, 250) + '...'}</p>
					<Link to={{ pathname: `/details/${state.media_type}/${state.id}` }}>
						<button className="btn">
							<i className="far fa-play-circle" />
							Show more
						</button>
					</Link>
				</div>
			</header>
		</section>
	);
});

export default Hero;
