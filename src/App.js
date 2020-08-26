import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import Navbar from './components/shared/Navbar';
import HomePage from './pages/HomePage';
import SeriesPage from './pages/SeriesPage';
import SeasonsPage from './pages/SeasonsPage';
import ChaptersPage from './pages/ChaptersPage';
import SearchPage from './pages/SearchPage';
import Footer from './components/shared/Footer';
import DetailsPage from './pages/DetailsPage';
import SeasonChapters from './pages/SeasonChapters';

const App = () => {
	// const [ termSearch, setTermSearch ] = useState('');
	return (
		<Router>
			<Navbar />
			{/* <Form setTermSearch={setTermSearch} /> */}
			<Switch>
				<Route exacth path="/movies" component={MoviesPage} />
				{/* <Route exacth path="/seasons" component={SeasonsPage} />
				<Route exacth path="/chapters" component={ChaptersPage} /> */}
				<Route exacth path="/series/:pageNum" component={SeriesPage} />
				<Route exacth path="/details/tv/:idTv/:nameTv/:seasonNum" component={SeasonChapters} />
				<Route exacth path="/search/:term" component={SearchPage} />
				<Route exacth path="/details/:type/:idPoster" component={DetailsPage} />
				<Route exacth path="/" component={HomePage} />

				{/* {termSearch && (
					<Route exact path="/movies" render={(props) => <Movies {...props} termSearch={termSearch} />} />
				)} 
				 <Route exact path="/details/:id">
				 <MoviePage /> 
				</Route> */}
			</Switch>
			{/* <div>
				<p>Créditos</p>
			</div> */}
			<Footer />
		</Router>
	);
};

export default App;
