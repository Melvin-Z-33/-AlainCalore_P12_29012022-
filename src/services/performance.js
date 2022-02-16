import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 *
 * @param { Number } userId
 * @return { Array } userMainData
 */

const usePerformance = (userId) => {
	const [performance, setPerformance] = useState([]);

	useEffect(() => {
		const url = `http://localhost:3000/user/${userId}/performance`;

		axios.get(url).then((response) => {
			setPerformance(response.data.data);
		});
	}, [userId]);

	return performance;
};

export default usePerformance;
