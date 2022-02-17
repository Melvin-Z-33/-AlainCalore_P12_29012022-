import React from 'react';
import Averagesession from '../AverageSession/Averagesession';
import RadarChartActivity from '../RadarChartActivity/RadarChartActivity';
import Score from '../Score/Score';
import './Objective.scss';

export default function Objective(props) {
	return (
		<div className="objective">
			<div className="rectangle">
				<Averagesession average={props.average} />
			</div>
			<div className="rectangle">
				<RadarChartActivity performance={props.performance} />
			</div>
			<div className="rectangle">
				<Score todayscore={props.todayscore} />
			</div>
		</div>
	);
}
