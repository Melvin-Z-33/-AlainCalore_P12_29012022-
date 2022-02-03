import React from 'react';
import calories from '../../assets/nutrients/calories-icon.svg';
import protein from '../../assets/nutrients/protein-icon.svg';
import carbs from '../../assets/nutrients/carbs-icon.svg';
import fat from '../../assets/nutrients/fat-icon.svg';
import './nutrientsBar.scss';

export default function NutrientsBar() {
	return (
		<div className="nutrients-bar">
			<div className="nutrients-group">
				<img src={calories} alt="" />
				<div className="nutrients-text">
					<span className="nutrients">1950kCAL</span>
					<span className="unite">calories</span>
				</div>
			</div>

			<div className="nutrients-group">
				<img src={protein} alt="" />
				<div className="nutrients-text">
					<span className="nutrients">155g</span>
					<span className="unite">Proteines</span>
				</div>
			</div>

			<div className="nutrients-group">
				<img src={carbs} alt="" />
				<div className="nutrients-text">
					<span className="nutrients">290g</span>
					<span className="unite">Glucides</span>
				</div>
			</div>

			<div className="nutrients-group">
				<img src={fat} alt="" />
				<div className="nutrients-text">
					<span className="nutrients">50g</span>
					<span className="unite">Lipides</span>
				</div>
			</div>
		</div>
	);
}
