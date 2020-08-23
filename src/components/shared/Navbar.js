import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/repelis.png';
import Form from '../Form';
const Navbar = () => {
	return (
		<section className=" navbar-container">
			<div className="navbar-content">
				<Link to="/">
				<img src={logo} alt="Logo" className="navbar-logo" /></Link>
				<nav className="nav">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/movies">Movies</Link></li>
						<li><Link to="/series/1">Series</Link></li>
						<li><Link to="/seasons">Seasons</Link></li>
						<li><Link to="/chapters">Chapters</Link></li>
						<li>
							<Form />
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};

export default Navbar;
