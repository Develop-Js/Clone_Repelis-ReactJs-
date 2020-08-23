import React, { Fragment } from 'react';
import Movie from './Movie';
import useFetchTerm from '../hooks/useFetchTerm';
import styled from '@emotion/styled';

const ContainerMovies = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, minmax(20%, 80%));
	grid-gap: 1rem;
`;

const Movies = ({ termSearch }) => {
	const [ state ] = useFetchTerm(termSearch.state);
	return (
		<Fragment>
			<h1>
				Search: <small>{termSearch.state} </small>
			</h1>
			<ContainerMovies>{state.map((movie) => <Movie key={movie.imdbID} movie={movie} />)}</ContainerMovies>
		</Fragment>
	);
};

export default Movies;
