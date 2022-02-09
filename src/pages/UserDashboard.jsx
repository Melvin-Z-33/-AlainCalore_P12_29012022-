import React, { useState, useEffect, useContext } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import axios from 'axios';
import {
	USER_MAIN_DATA,
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_PERFORMANCE,
} from '../components/Dashboard/data.js';
import { useParams } from 'react-router-dom';
const API = 'http://swapi.dev/api/planets/1/';
const local = '../../public/data.js';
const headers = { accept: 'application/json' };

export default function User() {
	// fetch(local).then((res) => console.log(res));
	/**fetch */
	// fetch(USER_ACTIVITY).then((response) => {
	// 	const contentType = response.headers.get('content-type');
	// 	if (contentType && contentType.indexOf('application/json') !== -1) {
	// 		return response.json().then((data) => {
	// 			// process your JSON data further
	// 			console.log(data.json());
	// 		});
	// 	} else {
	// 		return response.text().then((text) => {
	// 			// this is text, do something with it
	// 			console.log(JSON.stringify(text));
	// 		});
	// 	}
	// });

	// USER_MAIN_DATA.filter(checkUser);
	// USER_ACTIVITY.filter(checkActivityUser);
	// USER_AVERAGE_SESSIONS, USER_PERFORMANCE;
	// ** METHOD FETCH
	// fetch('https://jsonplaceholder.typicode.com/todos/1')
	// 	.then((response) => response.json())
	// 	.then((json) => console.log(json));

	// **  FETCH FOR API
	// useEffect(() => {
	// 	axios.get(API, { headers }).then((res) => setData(res.data));
	// }, []);

	// console.log(data);

	//**.1 trouver nom et id

	return (
		<>
			<Dashboard />
		</>
	);
}
