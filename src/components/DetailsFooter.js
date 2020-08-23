import React from 'react';
import RelatedSeasons from './RelatedSeasons';

const DetailsFooter = ({ tvShow }) => {
    // console.log('hola',tvShow);
	return (
		<div className="container">
			{/* <h2>Details footer</h2> */}
			{tvShow.seasons.length > 0 ? <RelatedSeasons tvShow={tvShow} /> : null}
		</div>
	);
};

export default DetailsFooter;
