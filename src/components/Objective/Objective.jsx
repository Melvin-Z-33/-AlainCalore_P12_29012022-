import React from 'react';
import Objectif1 from '../Objectif1/Objectif1';
import Objectif2 from '../Objectif2/Objectif2';
import Objectif3 from '../Objectif3/Objectif3';
import './Objective.scss';

export default function Objective() {
	return (
		<div className="objective">
			<div className="rectangle">
				<Objectif1 />
			</div>
			<div className="rectangle">
				<Objectif2 />
			</div>
			<div className="rectangle">
				<Objectif3 />
			</div>
		</div>
	);
}
