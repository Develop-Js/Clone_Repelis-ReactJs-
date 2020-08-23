import React from 'react';
import Poster from './Poster';
import useFetchMovies from '../hooks/useFetchMovies';
import PosterSerie from './PosterSerie';
import useFetchHome from '../hooks/useFetchHome';

const PostersFilter = ({ filters }) => {
	const [ postersFiltered ] = useFetchMovies(filters);
	const [ lastAdded ] = useFetchHome('movie');

	// console.log(filters);
	// console.log(postersFiltered);
	if (postersFiltered.length === 0) return null;

	lastAdded.splice(5);
	console.log(lastAdded);

	// console.log(postersFiltered);
	return (
		<div className="movies-page-content">
			<section className="posters-content posters">
				{postersFiltered.map((poster) => <Poster key={poster.id} poster={poster} type="movie" />)}
			</section>
			<aside className="aside-movies ">
				<h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Ultimas agregadas</h2>
				<div className="posters-container-series">
					{lastAdded.map((poster) => <PosterSerie key={poster.id} serie={poster} type="movie" />)}
					{/* <PosterSerie serie={}> HOla otra vez</PosterSerie> */}
				</div>
			</aside>
		</div>
	);
};

export default PostersFilter;
