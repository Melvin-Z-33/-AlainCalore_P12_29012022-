import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts';
import propTypes from 'prop-types';
import './score.scss';

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

Score.propTypes = {
	todayscore: propTypes.number,
};
