import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 *
 * @param { Number } userId
 * @return { Array } data array for average sessions
 */

const useAverageSessions = (userId) => {
	const [averageSession, setAverageSession] = useState([]);

	useEffect(() => {
		const url = `http://localhost:3000/user/${userId}/average-sessions`;

		axios.get(url).then((response) => {
			setAverageSession(response.data.data.sessions);
		});
	}, [userId]);

	return averageSession;
};

export default useAverageSessions;
