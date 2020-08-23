import React from 'react';
import useFetchHome from '../hooks/useFetchHome';
import PosterSerie from '../components/PosterSerie';
import { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

const SeriesPage = () => {
	const { pageNum } = useParams();

	const [ pagination, setPagination ] = useState(Number(pageNum));
	const [ series ] = useFetchHome('serie', pagination);
	
	
	let history=useHistory()
	if (series.length === 0) return null;

	//Effect Smooth
	setTimeout(() => {
		let buttons = document.querySelectorAll('.btn-series');

		buttons.forEach((button) => {
			button.addEventListener('click', (e) => {
				e.preventDefault();
				document.querySelector('.over-container').scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
	}, 1);

	const handlePages = (value) => {
		if(value==='sum'){

			setPagination(pagination +1);
		}else{
			setPagination(pagination +1);

		}
		history.push(`/series/${pagination+1}`)

		// console.log(pagination);
		// setPagination(pagination + value);
	};

	return (
		<div className="over-container">
			<h2 className="name-page-series">New series </h2>

			<div className="series-page-content posters-container-series">
				{series.map((serie) => <PosterSerie key={serie.id} serie={serie} />)}
			</div>

			<div className="buttons-series">
				{pagination > 1 ? (
					<Link to={{ pathname: `/series/${pagination}` }}>
						<button className="btn-series" onClick={() => handlePages('res')}>
							Anterior
						</button>
					</Link>
				) : null}
				<Link to={{ pathname: `/home/${pagination}` }}>
					<button className="btn-series" onClick={() => handlePages('sum')}>
						Siguiente
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SeriesPage;
