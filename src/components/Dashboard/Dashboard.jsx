import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import NutrientsBar from '../NutrientsBar/NutrientsBar.jsx';
import GraphicBar from '../GraphicBar/GraphicBar.jsx';
import Objective from '../Objective/Objective.jsx';
import useUsermain from '../../services/usermain.js';
import useActivity from '../../services/activity.js';
import useAverageSessions from '../../services/average_sessions.js';
import usePerformance from '../../services/performance.js';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './data.js';
import './Dashboard.scss';

export default function Dashboard() {
	const id = useParams();

	let arrayUser = [USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE];
	let arrayFromUser;
	let dataOfUser;
	let userNew = [];
	let persona = {};

	for (arrayFromUser of arrayUser) {
		for (dataOfUser of arrayFromUser) {
			if (dataOfUser.hasOwnProperty('id') && dataOfUser.id === parseFloat(id.id)) {
				userNew.push(dataOfUser);
			}
		}

		for (dataOfUser of arrayFromUser) {
			if (dataOfUser.hasOwnProperty('userId') && dataOfUser.userId === parseFloat(id.id)) {
				userNew.push(dataOfUser);
			}
		}
	}

	persona.average_sessions = userNew[2].sessions;
	persona.perfomance_data = userNew[3].data;
	persona.kind = userNew[3].kind;
	// console.log(persona);

	//* 1. Trouver le nom dynamiquement */
	let userMainData = useUsermain(id.id);
	const { firstName, keyData, todayScore } = userMainData.user;
	// console.log(usePerformance(id.id));
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

// export default function Dashboard() {
// 	let user;
// 	const UserContext = createContext(user);

// 	//* 1. Trouver le nom dynamiquement */
// 	const id = useParams();

// 	const [data, setData] = useState([]);

// 	const checkUser = (el) => {
// 		if (el.id === parseFloat(id.id)) {
// 			user = el;
// 		}
// 	};

// 	const checkActivityUser = (el) => {
// 		if (el.userId === parseFloat(id.id)) {
// 			activity = el;
// 		}
// 	};
// 	USER_MAIN_DATA.filter(checkUser);
// 	USER_ACTIVITY.filter(checkActivityUser);

// 	return (
// 		<UserContext.Provider value={user}>
// 			<div className="dashboard">
// 				<Header name={user} />
// 				<NutrientsBar nutrients={user} />
// 				<GraphicBar activity={activity} />
// 				<Objective />
// 			</div>
// 		</UserContext.Provider>
// 	);
// }

// const checkUser = (el) => {
// 	if (el.id === parseFloat(id.id)) {
// 		user = el;
// 	}
// };

// const checkActivityUser = (el) => {
// 	if (el.userId === parseFloat(id.id)) {
// 		activity = el;
// 	}
// };
// USER_MAIN_DATA.filter(checkUser);
// USER_ACTIVITY.filter(checkActivityUser);

// const checkUser = (el) => {
// 	if (el.id === parseFloat(id.id)) {
// 		testuser.main_data = el.firstName;
// 	}
// };

// const checkActivityUser = (el) => {
// 	if (el.userId === parseFloat(id.id)) {
// 		testuser.activity = el;
// 		console.log(testuser);
// 	}
