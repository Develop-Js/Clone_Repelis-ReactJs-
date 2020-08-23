import React from 'react';
import PropTypes from 'prop-types';
import useFetchHome from '../hooks/useFetchHome';
import Poster from './Poster';

const Posters = ({ icon, titleSection, colorIcon, term }) => {
	const [ posters ] = useFetchHome(term);
	if (posters.length === 0) return null;
	
	return (
		<section>
			<div className="posters-content">
				<div className="section-info">
					<i className={icon + ' section-icon'} style={{ backgroundColor: colorIcon }} />
					<h2>{titleSection}</h2>
				</div>
				<div className="posters">{posters.map((poster) => <Poster key={poster.id} poster={poster} type={term}/>)}</div>
			</div>
		</section>
	);
};

Posters.propTypes = {
	icon: PropTypes.string.isRequired,
	titleSection: PropTypes.string.isRequired,
	colorIcon: PropTypes.string.isRequired
};

export default Posters;
