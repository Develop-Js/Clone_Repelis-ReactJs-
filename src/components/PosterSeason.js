import React from 'react';

import noImageAvailable from '../assets/img/No_image.png';
import { Link } from 'react-router-dom';
const PosterSeason = ({ season,tvShow }) => {
	let image = `https://image.tmdb.org/t/p/original${season.poster_path}`;
	// console.log(season);
	return (
		<article className="poster">
			<p className="season-number">{season.name}</p>
			<Link to={{ pathname: `/details/tv/${tvShow.idTv}/${tvShow.name}/${season.season_number}` }}>
				<img src={season.poster_path ? image : noImageAvailable} alt="" />
				<i className="far fa-play-circle poster-play" />
			</Link>
		</article>
	);
};

export default PosterSeason;
