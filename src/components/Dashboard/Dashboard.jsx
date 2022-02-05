import React, { useState, useContext, createContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import NutrientsBar from '../NutrientsBar/NutrientsBar.jsx';
import GraphicBar from '../GraphicBar/GraphicBar.jsx';
import Objective from '../Objective/Objective.jsx';
import { USER_MAIN_DATA } from './data.js';
import './Dashboard.scss';
let userMain;

export default function Dashboard() {
	let user = 'Thomas';
	const UserContext = createContext(user);

	//* 1. Trouver le nom dynamiquement */
	const id = useParams();
	const [data, setData] = useState([]);

	const checkUser = (el) => {
		if (el.id == id.id) {
			user = el;
		}
	};
	USER_MAIN_DATA.filter(checkUser);

	//****** */
	return (
		<UserContext.Provider value={user}>
			<div className="dashboard">
				<Header name={user} />
				<NutrientsBar />
				<GraphicBar />
				<Objective />
			</div>
		</UserContext.Provider>
	);
}
