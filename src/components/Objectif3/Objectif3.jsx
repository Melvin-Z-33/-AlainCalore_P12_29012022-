import React from 'react';
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

const data = [
	{
		name: '18-24',
		uv: 31.47,
		pv: 2400,
		fill: '#8884d8',
	},
	{
		name: '25-29',
		uv: 26.69,
		pv: 4567,
		fill: '#83a6ed',
	},
	{
		name: '30-34',
		uv: 15.69,
		pv: 1398,
		fill: '#8dd1e1',
	},
	{
		name: '35-39',
		uv: 8.22,
		pv: 9800,
		fill: '#82ca9d',
	},
	{
		name: '40-49',
		uv: 8.63,
		pv: 3908,
		fill: '#a4de6c',
	},
	{
		name: '50+',
		uv: 2.63,
		pv: 4800,
		fill: '#d0ed57',
	},
	{
		name: 'unknow',
		uv: 6.67,
		pv: 4800,
		fill: '#ffc658',
	},
];

const style = {
	top: '50%',
	right: 0,
	transform: 'translate(0, -50%)',
	lineHeight: '24px',
};

function Objectif3(props) {
	const datax = [
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

	// console.log(datax);
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
					data={datax}
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

export default Objectif3;

// ** OKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
// export default function Objectif3(props) {
// 	const { todayscore } = props;

// 	const dataOnBase1 = [
// 		{ todayScore: 1, fill: '#FBFBFB' },
// 		{ todayScore: todayscore, fill: '#FF0000' }, //data.todayScore
// 	];

// 	return (
// 		<div className="today_score_graph">
// 			<h2 className="today_score_title">Score</h2>
// 			<div className="today_score">
// 				<p style={{ margin: 0 }} className="today_score_txt">
// 					{todayscore}%
// 				</p>
// 				<p style={{ color: '#74798C', margin: 0, textAlign: 'center' }}>
// 					de votre <br /> objectif
// 				</p>
// 			</div>
// 			<ResponsiveContainer width="100%" height="100%">
// 				<RadialBarChart
// 					cx="50%"
// 					cy="50%"
// 					innerRadius="50%"
// 					outerRadius="80%"
// 					data={dataOnBase1}
// 				>
// 					<RadialBar dataKey="todayScore" cornerRadius={50} barSize={10} />
// 				</RadialBarChart>
// 			</ResponsiveContainer>
// 		</div>
// 	);
// }
