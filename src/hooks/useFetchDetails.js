import { useState, useEffect } from 'react';

const useFetchDetails = (type,idposter) => {
	const [ state, setState ] = useState({});
	const Api_key = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		let endPoint = '';
		switch (type) {
			case 'tv':
				endPoint = `https://api.themoviedb.org/3/tv/${idposter}?api_key=${Api_key}&language=en-US`;
				break;
			case 'movie':
				endPoint = `https://api.themoviedb.org/3/movie/${idposter}?api_key=${Api_key}&language=en-US`;
				break;
			
			default:
				endPoint = '';
				break;
		}
		fetch(endPoint).then((res) => res.json()).then((result) => setState(result));
		// console.log(results);
		return () => {
			const controller = new AbortController();
			fetch(endPoint, {
				method: 'get',
				signal: controller.abort()
			});
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [ state ];
};

export default useFetchDetails;
