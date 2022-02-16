import { useParams } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import NutrientsBar from '../NutrientsBar/NutrientsBar.jsx';
import GraphicBar from '../GraphicBar/GraphicBar.jsx';
import Objective from '../Objective/Objective.jsx';
import useUsermain from '../../services/usermain.js';
import useActivity from '../../services/activity.js';
import useAverageSessions from '../../services/average_sessions.js';
import usePerformance from '../../services/performance.js';

import './Dashboard.scss';

export default function Dashboard() {
	const id = useParams();

	let userMainData = useUsermain(id.id);
	const { firstName, keyData, todayScore } = userMainData.user;

	return (
		<div className="dashboard">
			<Header name={firstName} />
			<NutrientsBar nutrients={keyData} />
			<GraphicBar activity={useActivity(id.id)} />
			<Objective
				average={useAverageSessions(id.id)}
				performance={usePerformance(id.id)}
				todayscore={todayScore}
			/>
		</div>
	);
}
