import { useState, useEffect } from 'react';

const useFetchSingle = (termSearch) => {
	const [ state, setState ] = useState([]);
	const Api_key= process.env.REACT_APP_API_KEY;
	useEffect(
		() => {
			let endPoint = `https://api.themoviedb.org/3/search/multi?api_key=${Api_key}&language=es-Es&query=${termSearch}&page=1&include_adult=true`;
			fetch(endPoint).then((res) => res.json()).then((result) => setState(result.results));
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},[ termSearch ]
	);

	return [ state ];
};

export default useFetchSingle;
