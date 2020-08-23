import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {
	let history = useHistory();
	const [ state, setState ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// setState('')
		// setTimeout(() => {
		history.push('/search/' + state.state);
		// }, 1);
		e.currentTarget.reset();
		console.log(state);
	};

	return (
		<form onSubmit={handleSubmit} name="my-form">
			<label >
				<input
					className="input-search"
					type="text"
					id="inputTerm"
					name="inputTerm"
					onChange={(e) => setState({ state: e.target.value })}
					required
				/>
			</label>
			<button type="submit" className="btn-search" name="btnsearch">
				<i className="fas fa-search" />
			</button>
		</form>
	);
};

export default Form;
