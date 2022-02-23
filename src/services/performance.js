import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 *
 * @param { Number } userId
 * @return { Object } object of performance user (userID, data, kind)
 */

const usePerformance = (userId) => {
	const [performance, setPerformance] = useState({});

	useEffect(() => {
		const url = `http://localhost:3000/user/${userId}/performance`;

		axios
			.get(url)
			.then((response) => {
				setPerformance(response.data.data);
			})
			.catch((error) => {
				console.log(error.response.data.error);
			});
	}, [userId]);

	return performance;
};

export default usePerformance;
