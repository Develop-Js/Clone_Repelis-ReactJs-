import { useState, useEffect } from 'react';

const useFetchHome = (term, numberPage) => {
	const [ state, setState ] = useState([]);
	const Api_key = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		let endPoint = '';
		let randomPage = Math.floor(Math.random() * 10 + 1);
		switch (term) {
			case 'movie':
				endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&year=2020&vote_average.gte=10`;
				break;
			case 'tv':
				endPoint = `https://api.themoviedb.org/3/discover/tv?api_key=${Api_key}&language=es-ES&sort_by=popularity.desc&page=${randomPage}&include_null_first_air_dates=false`;
				break;
			case 'serie':
				endPoint = `https://api.themoviedb.org/3/discover/tv?api_key=${Api_key}&language=es-ES&sort_by=popularity.desc&page=${numberPage}&include_null_first_air_dates=false`;
				break;

			case 'home-trending':
				endPoint = `https://api.themoviedb.org/3/trending/tv/day?api_key=${Api_key}`;
				break;
			default:
				endPoint = '';
				break;
		}
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
	}, [numberPage]);

	return [ state ];
};

export default useFetchHome;
