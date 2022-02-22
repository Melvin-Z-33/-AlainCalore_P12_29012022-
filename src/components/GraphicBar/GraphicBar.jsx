import './GrapicBar.scss';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
/**
 *  @param {object} props.activity  {day, kilogram,calories}
 * @func pushDataForArrayActivity - return array of object {day, kilogram,calories}
 * @func  CustomTooltip - return display tooltip
 * @return GraphicBar s, a component JSX
 */

export default function GraphicBar(props) {
	let dataForArrayActivity = [];

	/**
	 * Create a daily activity object array
	 * @param {array} param0  array from props
	 * @returns {array}
	 */

	function pushDataForArrayActivity(array) {
		for (let i = 1; i < array.activity.length; i++) {
			let dailyActivity = {
				day: i,
				kg: array.activity[i].kilogram,
				Kcal: array.activity[i].calories,
			};
			dataForArrayActivity.push(dailyActivity);
		}
	}
	pushDataForArrayActivity(props);

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

GraphicBar.propTypes = {
	activity: PropTypes.array,
};
