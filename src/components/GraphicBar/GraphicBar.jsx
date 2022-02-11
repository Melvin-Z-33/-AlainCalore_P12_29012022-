import './GrapicBar.scss';
import React, { PureComponent } from 'react';
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{
		day: '1',
		calorie: 25000,
		kg: 1000,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

export default function GraphicBar(props) {
	let dataForArrayActivity = [];

	function test(array) {
		for (let i = 1; i < array.activity.length; i++) {
			let obj = {
				day: i,
				kg: array.activity[i].kilogram,
				Kcal: array.activity[i].calories,
			};
			dataForArrayActivity.push(obj);
		}
		// console.log(dataForArrayActivity);
	}
	test(props);

	const CustomTooltip = ({ active, payload }) => {
		if (active) {
			return (
				<div style={{ backgroundColor: '#E60000', color: 'white', padding: '5px' }}>
					<p>{`${payload[0].value}kg`}</p>
					<p>{`${payload[1].value}kCal`}</p>
				</div>
			);
		}

		return null;
	};

	return (
		<div className="graphic-bar">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={702}
					height={145}
					data={dataForArrayActivity}
					margin={{
						top: 90,
						right: 30,
						left: 20,
						bottom: 15,
					}}
					barSize={8}
					maxBarSize={500}
					barGap={10}
				>
					<text
						x={25}
						y={28}
						fill="#202535A"
						fontSize={15}
						fontWeight={500}
						textAnchor="top-left"
						dominantBaseline="middle"
					>
						Activité quotidienne
					</text>
					<CartesianGrid strokeDasharray="3 3 " opacity={0.7} vertical={false} />
					<XAxis dataKey="day" axisLine={false} />
					<YAxis orientation="right" tickLine={false} axisLine={false} />
					<Tooltip content={<CustomTooltip />} />
					<Legend
						wrapperStyle={{ right: 30, top: 15 }}
						align="right"
						verticalAlign="middle"
						iconType="circle"
						iconSize="8"
					/>
					<Bar dataKey="kg" name="Poids (kg)" fill="#28D30" radius={[3, 3, 0, 0]} />
					<Bar
						dataKey="Kcal"
						name="Calories brûlées (kCal)"
						fill="#E60000"
						radius={[3, 3, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
