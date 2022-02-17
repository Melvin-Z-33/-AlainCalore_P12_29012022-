import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import { PieChart, Pie, Cell, Legend } from 'recharts';

import './score.scss';
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
					<span className="score-percentage">{props.todayscore}%</span>{' '}
					<span>de votre</span>
					<span>objectif</span>
				</p>
			),

			todayScore: props.todayscore,
			fill: '#FF0000',
		},
	];

	const style = {
		top: '50%',
		right: '50%',
		transform: 'translate(50%, -50%)',
		lineHeight: '24px',
		position: 'absolute',
	};

	return (
		<>
			<h2 className="today_score_title">Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					width={137}
					height={137}
					innerRadius="60%"
					outerRadius="80%"
					data={data}
					cx="50%"
					cy="50%"
					startAngle={90}
					endAngle={90 + props.todayscore}
					strokeWidth={15}
					align="center"
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
