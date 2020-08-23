import React, { useState } from 'react';
import Filters from '../components/Filters';
import PostersFilter from '../components/PostersFilter';
// import { useParams } from 'react-router-dom';
// import useFetchById from '../hooks/useFetchById';

// const Container = styled.div`
//display: flex;
//column-gap:1rem;
//`;

const MoviesPage = (props) => {
	const [ filters, setFilters ] = useState({});
	// const { id } = useParams();
	// const [ state ] = useFetchById(id);
	// console.log(filters);
	// const { Title, Language, Released, Writer, Year, imdbRating, Actors, Poster } = state;
	return (
		<section className="movies-page">
			<div className="movies-pages-container">
				<Filters setFilters={setFilters} />
				<PostersFilter filters={filters} />
			</div>
			{/* <h2>Movies page</h2> */}
			{/* <div className="poster">
				<h2>{Title}</h2>
				<img src={Poster} alt="" />
			</div>
			<div className="info-movie">
				<p>{Language}</p>
				<p>{Released}</p>
				<p>{Writer}</p>
				<p>{Year}</p>
				<p>{imdbRating}</p>
				<p>{Actors}</p>
			</div> */}
		</section>
	);
};

export default MoviesPage;
