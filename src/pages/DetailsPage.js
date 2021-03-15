import React from 'react';
import { useParams } from 'react-router-dom';

import DetailsHeader from '../components/DetailsHeader';
import useFetchDetails from '../hooks/useFetchDetails';
import DetailsFooter from '../components/DetailsFooter';

const DetailsPage = () => {
	const { type, idPoster } = useParams();
	const [ details ] = useFetchDetails(type, idPoster);

	if (Object.keys(details).length === 0) return null;

	const { name, seasons } = details;

	const tvShow = { name, idTv: idPoster, seasons };
	// console.log(details);

	return (
		<section className="details-page">
			<DetailsHeader info={details} />
			{!!seasons ? <DetailsFooter tvShow={tvShow} /> : null}
		</section>
	);
};

export default DetailsPage;
