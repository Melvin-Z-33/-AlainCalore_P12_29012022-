import React, { useState, useEffect, useContext } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import axios from 'axios';

const API = 'http://swapi.dev/api/planets/1/';
const headers = { accept: 'application/json' };

export default function User() {
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
