import React, { useRef, useState, useEffect } from 'react';
import Averagesession from '../AverageSession/Averagesession';
import RadarChartActivity from '../RadarChartActivity/RadarChartActivity';
import Score from '../Score/Score';
import './Objective.scss';
import propTypes from 'prop-types';

export default function Objective(props) {
	const [classColor, setClassColor] = useState('');

	useEffect(() => {
		if (navigator.userAgent.includes('Chrome')) {
			setClassColor('objective');
		} else if (navigator.userAgent.includes('Firefox')) {
			setClassColor('objective-firefox');
		}
	}, []);

	return (
		<div className={classColor}>
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

Objective.propTypes = {
	average: propTypes.array,
	performance: propTypes.object,
	todayscore: propTypes.number,
};
