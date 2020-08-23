import React from 'react';

import noImageAvailable from '../assets/img/No_image.png';
import { Link } from 'react-router-dom';
const Poster = ({ poster,type} ) => {
	let image = `https://image.tmdb.org/t/p/original${poster.poster_path}`;
	return (
		<article className="poster">
			<Link to={{ pathname: `/details/${type}/${poster.id}` }}>
			<img src={poster.poster_path ? image : noImageAvailable} alt="" />
			<i className="far fa-play-circle poster-play" />
			</Link>
		</article>
	);
};

export default Poster;
