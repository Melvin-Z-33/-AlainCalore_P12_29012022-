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

// 	 * transforms the numbers of the day by the initials of the corresponding days
// 	 * @returns an array of object were the day value is a capital letter and the sessionLength value is the same as in data
// 	 */

// 	/**
// 	 * Customize the tooltip to display the average time when active
// 	 * @param {boolean} active calculate internally
// 	 * @param {array} payload data array were each object correspond to a Bar, calculated internally
// 	 * @returns a tooltip displaying the data of the line (here minutes)
// 	 */
