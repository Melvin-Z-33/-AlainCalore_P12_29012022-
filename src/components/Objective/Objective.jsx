import React from 'react';
import Averagesession from '../AverageSession/Averagesession';
import RadarChartActivity from '../RadarChartActivity/RadarChartActivity';
import Score from '../Score/Score';
import './Objective.scss';

export default function Objective(props) {
	if (navigator.appName === 'Netscape') {
		console.log('again');
	}

	return (
		<div className="objective">
			<div className="rectangle average_session-block">
				<Averagesession average={props.average} />
			</div>
			<div className="rectangle">
				<RadarChartActivity performance={props.performance} />
			</div>
			<div className="rectangle score-block">
				<Score todayscore={props.todayscore} />
			</div>
		</div>
	);
}
