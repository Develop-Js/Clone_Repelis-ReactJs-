import React from 'react';
import { circliful } from 'js-plugin-circliful';
import 'js-plugin-circliful/dist/main.css';

const DetailsHeader = ({info}) => {

	const {
		vote_average,
		backdrop_path,
		name,
		title,
		original_title,
		original_name,
		first_air_date,
        overview,
        poster_path
        ,type
	} = info;

	setTimeout(() => {
		if (vote_average > 0) {
			circliful.newCircle({
				percent: (vote_average * 10).toFixed(0),
				id: 'circle',
				type: 'simple',
				strokeLinecap: 'round',
				point: true,
				pointSize: 90,
				textReplacesPercentage:true,
				text:`${(vote_average).toFixed(1)}/10`,
				noPercentageSign:true,
				backgroundCircleWidth: 10,
				foregroundCircleWidth: 9,
				progressColors: [
					{ percent: 1, color: 'red' },
					{ percent: 40, color: '#ebd50e' },
					{ percent: 80, color: '#46d60d' }
				]
			});
		}
		backdrop_path
			? (document.querySelector(
					'.details-container'
				).style.backgroundImage = `linear-gradient(90deg, rgb(5, 7, 19) 15%, rgba(13, 10, 37, 0.5) 100%),url(https://image.tmdb.org/t/p/original${backdrop_path})`)
			: console.warn('Background don´t exists');
	}, 1);

	return (
		<header className="details-container ">
			<div className="details-content">
				<img src={'https://image.tmdb.org/t/p/original' + poster_path} alt="" className="logo-movie" />

				<div className="mini-info-movie">
					<h2>{name || title || original_title || original_name}</h2>
					{type === 'tv' ? <p className="first-air-date"> First air date: {first_air_date}</p> : null}
					<div className="grid-info">
						<p className="review">{overview&&overview.slice(0,550)}...</p>

						<div className="extra-info">
							<button className="btn watch-movie">
								<i className="far fa-play-circle" />
								Watch {type==='tv'?'serie':'movie'}
							</button>
							<div id="circle" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default DetailsHeader;
