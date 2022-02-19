import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
import styled from 'styled-components';

const RespCtr = styled(ResponsiveContainer)`
	background-color: red;
	border-radius: 5px;
`;

/**
 * Create a custom cursor on mouse over the charts
 * @param {number} param0
 * @returns HTML element
 */

const CustomTooltip = ({ active, payload }) => {
	if (active) {
		return (
			<div
				style={{
					backgroundColor: 'white',
					color: 'black',
					padding: '0px',
				}}
			>
				<p>{`${payload[0].value} min`}</p>
			</div>
		);
	}

	return null;
};

/**
 * Change labels of the Xaxis
 * @param {number} value
 * @returns string
 */

const formatsTheDays = (sessions) => {
	const days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
	let formattedDay = days[sessions];

	return formattedDay;
};

export default function AverageSessions(sessions) {
	console.log(sessions);
	return (
		<RespCtr width="100%" height={263}>
			<LineChart data={sessions.average} margin={{ left: 0, bottom: -20 }}>
				<text
					x={33}
					y={30}
					fill="#fff"
					fontSize={15}
					opacity={0.5}
					dominantBaseline="middle"
				>
					Durée moyenne des
				</text>
				<text
					x={30}
					y={50}
					fill="#fff"
					fontSize={15}
					opacity={0.5}
					dominantBaseline="middle"
				>
					sessions
				</text>
				<Tooltip cursor={false} content={<CustomTooltip />} />
				<Line
					dataKey="sessionLength"
					type="monotone"
					dot={false}
					stroke="#fff"
					strokeWidth={2}
				/>
				<XAxis
					dy={-40}
					stroke="#bdc3c7"
					opacity={0.6}
					axisLine={false}
					tickLine={false}
					dataKey="day"
					interval="preserveStartEnd"
					tick={{
						fill: '#FFFFFF75',
						fontFamily: 'Roboto',
						fontSize: '12px',
					}}
					tickFormatter={formatsTheDays}
				/>
				<YAxis domain={[0, 70]} hide={true} />
			</LineChart>
		</RespCtr>
	);
}
