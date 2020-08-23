import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const H2 = styled.h2`
	margin: 0;
	font-size: 1.3rem;
`;
const Info = styled.div`
	position: absolute;
	bottom: 5px;
	display: none;
	padding: .5rem .5rem 0;
`;

const Container = styled.div`
	overflow-wrap: break-word;
	text-decoration: none;
	position: relative;
	&:hover .info {
		background-color: #000000c2;
		border-radius: 5px 5px 0 0;
		color: #ffffff;
		display: inherit;
		width: 100%;
	}
`;

const Imagen = styled.img`
	width: 100%;
	height: 468px;
`;

const Movie = ({ movie }) => {
	return (
		<Container className="card">
			<Link to={{ pathname: `/details/${movie.imdbID}` }}>
				<div className="card-body">
					<Imagen src={movie.Poster} alt={movie.Title} />
					<Info className="info">
						<H2 className="card-title">{movie.Title}</H2>
						<p>
							Year: <small>{movie.Year}</small>
						</p>
						<p>
							Type: <small>{movie.Type}</small>
						</p>
					</Info>
				</div>
			</Link>
		</Container>
	);
};

export default Movie;
