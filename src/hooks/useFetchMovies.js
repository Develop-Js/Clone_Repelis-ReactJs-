import { useState, useEffect } from 'react';

const useFetchMovies = (filters) => {
	const [ state, setState ] = useState([]);
	const Api_key = process.env.REACT_APP_API_KEY;
	const {sort_by,with_genres}=filters
	// console.log(filters);
	useEffect(() => {
		let endPoint =`https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&language=es-ES&sort_by=${filters.sort_by}&page=1&with_genres=${filters.with_genres}`;
		
		fetch(endPoint).then((res) => res.json()).then((results) => setState(results.results));
		// console.log(results);
		return () => {
			const controller = new AbortController();
			fetch(endPoint, {
				method: 'get',
				signal: controller.abort()
			});
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sort_by,with_genres]);

	return [ state ];
};

export default useFetchMovies;
