import React from 'react';

import noImage from '../assets/img/noimage.png';
const Chapter = ({ episode }) => {
	console.log(episode);
	const { episode_number, still_path, name, overview, air_date } = episode;

	const image = still_path ? `https://image.tmdb.org/t/p/original${still_path}` : noImage;
	return (
		<div className="chapter-content">
			<img src={image} alt="" />
			<div className="info-chapter">
				<h3 className="name-chapter">
					{episode_number} - {name}
				</h3>
				<p className="chapter-air-date">{air_date}</p>
				<p className="chapter-overview">{overview}</p>
                <button className="btn">Watch Chapter</button>
			</div>
		</div>
	);
};

export default Chapter;
