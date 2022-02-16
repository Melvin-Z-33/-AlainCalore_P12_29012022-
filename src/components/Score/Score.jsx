import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import { PieChart, Pie, Cell, Legend } from 'recharts';

/**
 * GRAPHIC COMPONENT : This component function display the Goal's Pie chart
 * @param {(property|array)} goals This array contains 2 items <br>
 * - (number) "objectif" : item 0 - value of the actual goal
 * - (number) "objectif" : item 1 - difference between the actual goal and the max goal (default 100)
 * @param {(property|number)} actualGoal This value is for the legend and equal to the item 0 of the goals array
 * @param {(property|boolean)} isLoading It indicate if the data is loading or not
 * @returns the componant recharts PieChart. <br>
 * - GRAPHLIST_WIDTH : the graph's width
 * - GRAPHLIST_HEIGHT : the graph's height
 * - GRAPH_GOAL_COLORS : the graph's colors
 */

function Score(props) {
	const data = [
		{
			name: (
				<p className="radialchart-text">
					<span>{props.todayscore}%</span> de votre objectif
				</p>
			),

			todayScore: '0.12',
			fill: '#FF0000',
		},
	];

	const style = {
		top: '50%',
		right: 0,
		transform: 'translate(0, -50%)',
		lineHeight: '24px',
	};

	return (
		<>
			<h2 className="today_score_title">Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					width={730}
					height={250}
					innerRadius="60%"
					outerRadius="80%"
					data={data}
					cx="50%"
					cy="50%"
					startAngle={90}
					endAngle={90 + 360}
					strokeWidth={15}
				>
					<RadialBar dataKey="todayScore" cornerRadius={50} barSize={10} background />
					<Legend
						iconSize={0}
						iconType={false}
						layout="vertical"
						verticalAlign="middle"
						wrapperStyle={style}
						align="center"
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</>
	);
}

export default Score;
