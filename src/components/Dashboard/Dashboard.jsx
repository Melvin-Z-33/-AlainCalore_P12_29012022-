import React from 'react';
import './Dashboard.scss';
import Header from '../Header/Header.jsx';
import NutrientsBar from '../NutrientsBar/NutrientsBar.jsx';
import GraphicBar from '../GraphicBar/GraphicBar.jsx';
import Objective from '../Objective/Objective.jsx';

export default function Dashboard() {
	return (
		<div className="dashboard">
			<Header />
			<NutrientsBar />
			<GraphicBar />
			<Objective />
		</div>
	);
}
