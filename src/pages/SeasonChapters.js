import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchSeasonChapter from '../hooks/useFetchSeasonChapter';
import Chapter from '../components/Chapter';

const SeasonChapters = () => {
	const { idTv, seasonNum, nameTv } = useParams();
	// console.log(useParams());
	const [ infoChapter ] = useFetchSeasonChapter(idTv, seasonNum);

	if (Object.keys(infoChapter).length === 0) return null;

	// console.log(infoChapter);
	const { episodes } = infoChapter;
	// console.log(episodes);
	return (
		<section className="over-container">
			<h2 className="name-season">
				"{nameTv}" <span> season {seasonNum}</span>
			</h2>
			<div className="chapter-container">
				{episodes.map((episode) => <Chapter key={episode.episode_number} episode={episode} />)}
			</div>
		</section>
	);
};

export default SeasonChapters;
