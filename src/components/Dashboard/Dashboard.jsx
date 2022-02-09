import React, { useState, useContext, createContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import NutrientsBar from '../NutrientsBar/NutrientsBar.jsx';
import GraphicBar from '../GraphicBar/GraphicBar.jsx';
import Objective from '../Objective/Objective.jsx';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './data.js';
import './Dashboard.scss';

export default function Dashboard() {
	const id = useParams();
	const [data, setData] = useState([]);

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
	console.log(userNew[1]);
	persona.id = userNew[0].id;
	persona.firstName = userNew[0].userInfos.firstName;
	persona.keyData = userNew[0].keyData;
	persona.activity_sessions = userNew[1].sessions;
	console.log(persona);

	let user;
	const UserContext = createContext(user);

	//* 1. Trouver le nom dynamiquement */

	return (
		<UserContext.Provider value={user}>
			<div className="dashboard">
				<Header name={persona.firstName} />
				<NutrientsBar nutrients={persona.keyData} />
				<GraphicBar activity={persona.activity_sessions} />
				<Objective />
			</div>
		</UserContext.Provider>
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
