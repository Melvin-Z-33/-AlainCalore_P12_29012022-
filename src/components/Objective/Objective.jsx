import React from 'react';
import Averagesession from '../AverageSession/Averagesession';
import Objectif2 from '../Objectif2/Objectif2';
import Objectif3 from '../Objectif3/Objectif3';
import './Objective.scss';

export default function Objective(props) {
	return (
		<div className="objective">
			<div className="rectangle">
				<Averagesession average={props.average.average_sessions} />
			</div>
			<div className="rectangle">
				<Objectif2 performance={props.average.perfomance_data} kind={props.average.kind} />
			</div>
			<div className="rectangle">
				<Objectif3 todayscore={props.average.todayScore} />
			</div>
		</div>
	);
}
