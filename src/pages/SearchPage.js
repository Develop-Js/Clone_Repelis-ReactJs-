import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import useFetchSearch from '../hooks/useFetchSearch';
import Poster from '../components/Poster';

const SearchPage = memo(() => {
	const { term } = useParams();
    const [ results ] = useFetchSearch(term);
    if(results.length===0 &&term!=='') return null;

    
    // console.log( 'hppil' ,results);

	return (
		<div className="over-container">
			<div className="search-content">
				<h2 className="search-term">Search: <span> "{term}"</span></h2>
				<div className="search-results posters">
					{results.map((result) => <Poster key={result.id} poster={result} type={result.media_type} />)}
				</div>
			</div>
		</div>
	);
});

export default SearchPage;
