import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 *
 * @param { Number } userId
 * @return { Array } data array for average sessions
 */

const useKeyData = (userId) => {
	const [keyData, setKeyData] = useState([]);

	useEffect(() => {
		const url = `http://localhost:3000/user/${userId}
        `;

		axios.get(url).then((response) => {
			setKeyData(response.data.data.keyData);
		});
	}, [userId]);

	return keyData;
};

export default useKeyData;
