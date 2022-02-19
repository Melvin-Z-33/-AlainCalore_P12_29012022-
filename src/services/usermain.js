import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 *
 * @param { Number } userId
 * @return { Array } data array for general user information
 */

const useUserMain = (userId) => {
	const [userMainData, setMainData] = useState({
		user: {
			id: '',
			firstName: '',
			todayScore: ' ',
			keyData: {},
		},
	});

	useEffect(() => {
		const url = `http://localhost:3000/user/${userId}`;

		axios.get(url).then((response) => {
			setMainData({
				user: {
					id: response.data.data.id,
					firstName: response.data.data.userInfos.firstName,
					todayScore: response.data.data.todayScore * 100,
					keyData: response.data.data.keyData,
				},
			});
		});
	}, [userId]);

	return userMainData;
};

export default useUserMain;
