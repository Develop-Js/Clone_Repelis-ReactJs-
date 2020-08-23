import React, { useState, useEffect} from 'react';

const Filters = ({ setFilters }) => {
	//!!import of API_KEY
	const Api_key = process.env.REACT_APP_API_KEY;

	//!!Categories exists
	const CATEGORIES = [
		{ category: 'Last year', id: 'primary_release_date.asc' }, // sort_by :popularity_desc
		{ category: 'Title', id: 'original_title.asc' }, // sort_by :popularity_desc
		{ category: 'Best rated', id: 'vote_average.asc' } // short_by
	];
	//!!State of component
	const [ genres, setGenres ] = useState([]);
	const [ categories, setCategories ] = useState({
		sort_by: 'popularity.desc',
		with_genres: ''
	});

	//!!get data of API to genres
	useEffect(() => {
		let endPointGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}&language=en-US`;
		fetch(endPointGenres).then((response) => response.json()).then((results) => {
			let randomId = Math.floor(Math.random() * (results.genres.length - 1) + 1);
			setGenres(results.genres);
			setCategories({
				...categories,
				with_genres: results.genres[randomId].id
			});
			setFilters({
				...categories,
				with_genres: results.genres[randomId].id
			});
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//!!GET choose of user
	const handleChange = ({ target }) => {
		setCategories({
			...categories,
			[target.name]: isNaN(+target.value) ? target.value : +target.value
		});
		setFilters(categories);
		
	};

	//!!JSX
	if (genres.length === 0) return null;
	return (
		<div className="filters">
			{/* <div className="filter-order"> */}
			<select name="sort_by" id="" onChange={handleChange} className="select-sort-by">
				<option value="popularity_desc">Order by</option>
				{CATEGORIES.map((category) => (
					<option key={category.id} value={category.id}>
						{category.category}
					</option>
				))}
			</select>
			{/* </div> */}
			{/* <div className="filter-genres"> */}
			<select name="with_genres" onChange={handleChange} className="select-with-geners">
				<option value={categories.with_genres}>Genres</option>
				{genres.map((genre) => (
					<option key={genre.id} value={genre.id}>
						{genre.name}
					</option>
				))}
			</select>
			{/* </div> */}
		</div>
	);
};

export default Filters;
