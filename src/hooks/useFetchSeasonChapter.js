import { useState, useEffect } from 'react';

const useFetchSeasonChapter = (idTv, seasonNumer) => {
	const [ state, setState ] = useState({});
	const Api_key = process.env.REACT_APP_API_KEY;
	useEffect(
		() => {
			let endPoint = `https://api.themoviedb.org/3/tv/${idTv}/season/${seasonNumer}?api_key=${Api_key}&language=en-US`;
			fetch(endPoint).then((res) => res.json()).then((result) =>setState(result));

			// eslint-disable-next-line react-hooks/exhaustive-deps
		},[ idTv,seasonNumer ]
	);

	return [ state ];
};

export default useFetchSeasonChapter;
