import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './radarchart.scss';

export default function RadarChartActivity(props) {
	const { data, kind } = props.performance;

	if (props !== undefined) {
		const capitalLetterKind = (activity) => {
			return kind[activity.kind].charAt(0).toUpperCase() + kind[activity.kind].slice(1);
		};
		return (
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					cx="50%"
					cy="50%"
					outerRadius="80%"
					data={data}
					margin={{ left: 25, right: 25 }}
				>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey={capitalLetterKind}
						fontSize={10}
						stroke="#FFF"
						tickLine={false}
					/>
					<Radar
						dataKey="value"
						stroke="#FF0101"
						strokeWidth={0}
						fill="#FF0101"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		);
	} else {
		return null;
	}
}
