import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Verticalbar from '../components/Verticalbar/Verticalbar';
import Dashboard from '../components/Dashboard/Dashboard';

export default function User() {
	const params = useParams();
	console.log(params);
	return (
		<>
			{/* <Navbar />
			<Verticalbar /> */}
			<Dashboard />
		</>
	);
}
