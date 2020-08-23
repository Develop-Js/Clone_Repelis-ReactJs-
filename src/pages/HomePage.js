import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import Posters from '../components/Posters';

const HomePage = () => {
	const sections = [
		{
			icon: 'fas fa-film',
			titleSection: 'Últimas peliculas Online',
			colorIcon: '#ff0000',
			term: 'movie'
		},
		{
			icon: 'far fa-play-circle',
			titleSection: 'Últimas Series',
			colorIcon: '#aa1449',
			term: 'tv'
		},
		{
			icon: 'fas fa-video',
			titleSection: 'Series más populares',
			colorIcon: '#aa1449',
			term: 'tv'
		}
	];

	return (
		<Fragment>


			<Hero />



			<div className="media-content container">
				{sections.map((section, index) => (
					<Posters
						key={index}
						icon={section.icon}
						titleSection={section.titleSection}
						colorIcon={section.colorIcon}
						term={section.term}
					/>
				))}
			</div>
		</Fragment>
	);
};


export default HomePage;
