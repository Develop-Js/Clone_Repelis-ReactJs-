import React from 'react';
// import Poster from './Poster'
import PosterSeason from './PosterSeason';

const RelatedSeasons = ({ tvShow }) => {
	// console.log('hola',tvShow);
	return (
		<section className="serie-seasons">
			<h2>Seasons</h2>

			<div className="content posters">
				{tvShow.seasons.map((season) => (
					<PosterSeason key={season.id} season={season} tvShow={tvShow}>
						{season.name}
					</PosterSeason>
				))}
			</div>
		</section>
	);
};

export default RelatedSeasons;
