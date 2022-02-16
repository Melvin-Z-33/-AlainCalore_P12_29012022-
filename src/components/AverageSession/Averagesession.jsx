import React, { PureComponent } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Text,
} from 'recharts';

const AverageSession = (sessions) => {
	const { day, sessionLength } = sessions;
	const days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };

	const formatedDays = () => {
		return sessions.average.map((session) => ({
			day: days[session.day],
			sessionLength: session.sessionLength,
		}));
	};

	const CustomTooltip = ({ active, payload }) => {
		if (active) {
			return (
				<div style={{ backgroundColor: 'white', color: 'black', padding: '1px' }}>
					<p>{`${payload[0].value} min`}</p>
				</div>
			);
		}

		return null;
	};

	return (
		<>
			<h2>Durée moyenne des sessions</h2>
			<ResponsiveContainer width="100%" height="100%" style={{ padding: 10 }}>
				<LineChart
					width={300}
					height={300}
					data={formatedDays()}
					margin={{
						top: 5,
						right: 0,
						left: 0,
						bottom: 5,
					}}
				>
					<XAxis
						dataKey="day"
						axisLine={false}
						tickSize="0"
						tick={{ color: 'white' }}
						style={{ padding: 10, color: 'white' }}
					/>

					<Legend />

					<Line
						type="monotone"
						dataKey="sessionLength"
						dot={false}
						stroke="white"
						strokeWidth={2}
						style={{ padding: 10, color: 'white' }}
					/>
					<Text textAnchor={null}></Text>
					<Tooltip cursor={false} content={<CustomTooltip />} />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};
export default AverageSession;
// import './Averagesession.scss';
// import React, { PureComponent } from 'react';
// import styled from 'styled-components';
// import {
// 	LineChart,
// 	Line,
// 	XAxis,
// 	YAxis,
// 	CartesianGrid,
// 	Tooltip,
// 	Legend,
// 	ResponsiveContainer,
// 	Text,
// } from 'recharts';
// import PropTypes from 'prop-types';

// // ** TESTING ********************************

// const AverageSession = (sessions) => {
// 	const { day, sessionLength } = sessions.average.average_sessions;
// 	console.log(sessions.average.average_sessions.day);
// 	const days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };

// 	console.log(days);

// 	/**
// 	 * transforms the numbers of the day by the initials of the corresponding days
// 	 * @returns an array of object were the day value is a capital letter and the sessionLength value is the same as in data
// 	 */

// 	sessions.average.average_sessions.map((session) => console.log(days[session.day]));

// 	const formatedDays = () => {
// 		return sessions.average.average_sessions.map((session) => ({
// 			day: days[session.day],
// 			sessionLength: session.sessionLength,
// 		}));
// 	};

// 	/**
// 	 * Customize the tooltip to display the average time when active
// 	 * @param {boolean} active calculate internally
// 	 * @param {array} payload data array were each object correspond to a Bar, calculated internally
// 	 * @returns a tooltip displaying the data of the line (here minutes)
// 	 */

// 	const CustomTooltip = ({ active, payload }) => {
// 		console.log(active);
// 		if (active) {
// 			return (
// 				<div style={{ backgroundColor: 'white', color: 'black', padding: '1px' }}>
// 					<p>{`${payload[0].payload.sessionLength} min`}</p>
// 				</div>
// 			);
// 		}

// 		return null;
// 	};

// 	// console.log(CustomTooltip);
// 	return (
// 		<div className="average_session_graph">
// 			<h2 style={{ padding: 10, color: 'rgba(255, 255, 255, .5)', fontWeight: 400 }}>
// 				Durée moyenne des sessions
// 			</h2>
// 			<ResponsiveContainer width="100%" height="80%" style={{ padding: 10 }}>
// 				<LineChart max-width={500} max-height={200} data={formatedDays()}>
// 					<XAxis
// 						dataKey="day"
// 						axisLine={true}
// 						tickSize="0"
// 						tick={{ color: 'white' }}
// 						style={{ padding: 10, color: 'white' }}
// 					/>
// 					<Line
// 						type="basis"
// 						dataKey="sessionLength"
// 						stroke="blue"
// 						strokeWidth={2}
// 						dot={false}
// 						style={{ padding: 10, color: 'white' }}
// 					/>
// 					<Text textAnchor={null}></Text>
// 					<Tooltip cursor={true} content={<CustomTooltip />} />
// 				</LineChart>
// 			</ResponsiveContainer>
// 			{/* color: "rgba(255, 255, 255, .5)" */}
// 		</div>
// 	);
// };

// AverageSession.propTypes = {
// 	data: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			day: PropTypes.number.isRequired,
// 			sessionLength: PropTypes.number.isRequired,
// 		}),
// 	),
// };

// export default AverageSession;

//********** */

// ? FUNCTION REGULAR
// const data = [
// 	{
// 		name: 'Page A',
// 		uv: 4000,
// 		pv: 2400,
// 		amt: 2400,
// 	},
// 	{
// 		name: 'Page B',
// 		uv: 3000,
// 		pv: 1398,
// 		amt: 2210,
// 	},
// 	{
// 		name: 'Page C',
// 		uv: 2000,
// 		pv: 9800,
// 		amt: 2290,
// 	},
// 	{
// 		name: 'Page D',
// 		uv: 2780,
// 		pv: 3908,
// 		amt: 2000,
// 	},
// 	{
// 		name: 'Page E',
// 		uv: 1890,
// 		pv: 4800,
// 		amt: 2181,
// 	},
// 	{
// 		name: 'Page F',
// 		uv: 2390,
// 		pv: 3800,
// 		amt: 2500,
// 	},
// 	{
// 		name: 'Page G',
// 		uv: 3490,
// 		pv: 4300,
// 		amt: 2100,
// 	},
// ];

// const StyledTooltip = styled.div`
// 	background-color: #fff;
// 	color: white;
// 	font-size: 0.5em;
// 	text-align: center;
// 	height: 25px;
// 	min-width: 39px;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// `;

// export function StyledDot({ cx, cy }) {
// 	return (
// 		<svg>
// 			<circle cx={cx} cy={cy} r={9} stroke="#FFFFFF0" fill="#FFF" fillOpacity={0.2} />
// 			<circle cx={cx} cy={cy} r={3} stroke="#FFFFFF" fill="#FFFFFF" />
// 			<rect x={cx} y={0} width="100%" height="100%" fill="#00000020" />
// 		</svg>
// 	);
// }

// function CustomTooltip({ active, payload }) {
// 	if (active) {
// 		return (
// 			<StyledTooltip>
// 				<p>{`${payload[0].value} min`}</p>
// 			</StyledTooltip>
// 		);
// 	}

// 	return null;
// }

// export default function Averagesession(props) {
// 	console.log(props);

// 	function formatXAxis(value) {
// 		if (value === 1) return 'L';
// 		if (value === 2) return 'M';
// 		if (value === 3) return 'M';
// 		if (value === 4) return 'J';
// 		if (value === 5) return 'V';
// 		if (value === 6) return 'S';
// 		if (value === 7) return 'D';
// 		return value;
// 	}

// 	return (
// 		<ResponsiveContainer width="33%" height={263}>
// 			<LineChart data={props.average.sessionLength} margin={{ left: -5, bottom: -30 }}>
// 				<text
// 					x={34}
// 					y={29}
// 					fill="#fff"
// 					fontSize={15}
// 					opacity={0.5}
// 					dominantBaseline="middle"
// 				>
// 					Durée moyenne des
// 				</text>
// 				<text
// 					x={34}
// 					y={50}
// 					fill="#fff"
// 					fontSize={15}
// 					opacity={0.5}
// 					dominantBaseline="middle"
// 				>
// 					sessions
// 				</text>
// 				<Tooltip cursor={false} content={<CustomTooltip />} />
// 				<Line
// 					activeDot={StyledDot}
// 					dataKey="sessionLength"
// 					type="monotone"
// 					dot={false}
// 					stroke="#fff"
// 					strokeWidth={2}
// 				/>
// 				<XAxis
// 					dy={-40}
// 					stroke="#bdc3c7"
// 					opacity={0.6}
// 					axisLine={false}
// 					tickLine={false}
// 					dataKey="day"
// 					interval="preserveStartEnd"
// 					tick={{
// 						fill: '#FFFFFF75',
// 						fontFamily: 'Roboto',
// 						fontSize: '12px',
// 					}}
// 					tickFormatter={formatXAxis}
// 				/>
// 				<YAxis domain={[0, 80]} hide={true} />
// 			</LineChart>
// 		</ResponsiveContainer>
// 	);
// }

//? --------------------------------------------------

// return (
// 	<ResponsiveContainer width="100%" height="100%">
// 		<LineChart
// 			width={500}
// 			height={300}
// 			data={data}
// 			margin={{
// 				top: 5,
// 				right: 30,
// 				left: 20,
// 				bottom: 5,
// 			}}
// 		>
// 			<CartesianGrid strokeDasharray="3 3" />
// 			<XAxis dataKey="name" />
// 			<YAxis />
// 			<Tooltip />
// 			<Legend />
// 			<Line type="monotone" dataKey="pv" stroke="#E60000" activeDot={{ r: 8 }} />
// 			<Line type="monotone" dataKey="uv" stroke="#282D30" />
// 		</LineChart>
// 	</ResponsiveContainer>
// );
