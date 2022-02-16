import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 *
 * @param { Number } userId
 * @return { Array } userMainData
 */

const useActivity = (userId) => {
	const [activity, setActivity] = useState([]);

	useEffect(() => {
		const url = `http://localhost:3000/user/${userId}/activity`;

		axios.get(url).then((response) => {
			setActivity(response.data.data.sessions);
		});
	}, [userId]);

	return activity;
};

export default useActivity;
