import { useParams } from 'react-router-dom';
import useKeyData from '../../services/key_data';

export default function MockedData() {
	const id = useParams();

	let userMainData = useKeyData(id.id);
	console.log(userMainData);
	return (
		<>
			<div>{userMainData.keys}</div>
		</>
	);
}
