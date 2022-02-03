import React from 'react';
import calories from '../../assets/nutrients/calories-icon.svg';
import protein from '../../assets/nutrients/protein-icon.svg';
import carbs from '../../assets/nutrients/carbs-icon.svg';
import fat from '../../assets/nutrients/fat-icon.svg';
import './nutrientsBar.scss';

export default function NutrientsBar() {
	return (
		<div className="nutrients-bar">
			<img src={calories} alt="" />
			<img src={protein} alt="" />
			<img src={carbs} alt="" />
			<img src={fat} alt="" />
		</div>
	);
}
