import React, { useRef, useState, useEffect } from 'react';
import Averagesession from '../AverageSession/Averagesession';
import RadarChartActivity from '../RadarChartActivity/RadarChartActivity';
import Score from '../Score/Score';
import './Objective.scss';

export default function Objective(props) {
	let objective = document.getElementById('objective-block');

	console.log(navigator.userAgent);
	const a = useRef('vide');

	const [classColor, setClassColor] = useState('');
	console.log(classColor);

	useEffect(() => {
		if (navigator.userAgent.includes('Chrome')) {
			console.log('GOogle!');
			setClassColor('objective');
		} else if (navigator.userAgent.includes('Firefox')) {
			console.log('firefox');

			//console.log((a.current.firstChild.style.color = 'blue'));
			setClassColor('objective-firefox');
		}
	}, []);

	// const styles = {
	// 	section: {

	// 		marginTop: "50px"
	// 	},

	// 	  marginTop: "50px"
	// 	}

	return (
		<div className={classColor} ref={a}>
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
