import calories from '../../assets/nutrients/calories-icon.svg';
import protein from '../../assets/nutrients/protein-icon.svg';
import carbs from '../../assets/nutrients/carbs-icon.svg';
import fat from '../../assets/nutrients/fat-icon.svg';
import './nutrientsBar.scss';
import propTypes from 'prop-types';

/**
 *  @param {array} props.nutrients  {calorieCount,carbohydrateCount,lipidCount,proteinCount}
 *  @return NutrientsBar, a component JSX
 */
export default function NutrientsBar(props) {
	const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = props.nutrients;

	return (
		<div className="nutrients-bar">
			<div className="nutrients-group">
				<img src={calories} alt="" />
				<div className="nutrients-text">
					<span className="nutrients">{calorieCount}kCAL</span>
					<span className="unite">calories</span>
				</div>
			</div>

			<div className="nutrients-group">
				<img src={protein} alt="" />
				<div className="nutrients-text">
					<span className="nutrients">{proteinCount}g</span>
					<span className="unite">Proteines</span>
				</div>
			</div>

			<div className="nutrients-group">
				<img src={carbs} alt="" />
				<div className="nutrients-text">
					<span className="nutrients">{carbohydrateCount}g</span>
					<span className="unite">Glucides</span>
				</div>
			</div>

			<div className="nutrients-group">
				<img src={fat} alt="" />
				<div className="nutrients-text">
					<span className="nutrients">{lipidCount}g</span>
					<span className="unite">Lipides</span>
				</div>
			</div>
		</div>
	);
}

NutrientsBar.propTypes = {
	nutrients: propTypes.shape({
		calorieCount: propTypes.number,
		carbohydrateCount: propTypes.number,
		lipidCount: propTypes.number,
		proteinCount: propTypes.number,
	}),
};
