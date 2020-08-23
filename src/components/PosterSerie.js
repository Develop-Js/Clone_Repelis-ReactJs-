import React from 'react';

// import { circliful } from 'js-plugin-circliful';
// import 'js-plugin-circliful/dist/main.css';
import { Link } from 'react-router-dom';
import noImageAvailable from '../assets/img/No_image.png';

const PosterSerie = ({ serie, type='tv' }) => {
	// console.log(serie);
	const { vote_average, name, overview, poster_path, title } = serie;
	let image = `https://image.tmdb.org/t/p/original${poster_path}`;
	let color = '';
	let percent = (vote_average * 10).toFixed(0);
	if (percent > 1 && percent < 40) {
		color = 'red';
	} else if (percent > 39 && percent < 80) {
		color = '#ebd50e';
	} else {
		color = '#46d60d';
	}


	return (
		<article className="poster-serie">
			<div className="figure">
				<Link to={{ pathname: `/details/${type}/${serie.id}` }}>
					<img src={serie.poster_path ? image : noImageAvailable} alt="" />
					<i className="far fa-play-circle poster-play" />
				</Link>
			</div>

			<div className="info-serie">
				<div className="details">
					<h2>{name || title}</h2>
					<div className="percent" style={{ backgroundColor: color }}>
						{(vote_average * 10).toFixed(0)} %
					</div>
					<p>{overview.slice(0, 100)} ...</p>
				</div>

				<Link to={{ pathname: `/details/${type}/${serie.id}` }}>
					<button className="btn">Watch more</button>
				</Link>
			</div>
		</article>
	);
};

export default PosterSerie;
