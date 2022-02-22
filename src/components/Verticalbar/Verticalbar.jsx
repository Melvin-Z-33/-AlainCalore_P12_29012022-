import React from 'react';
import './Verticalbar.scss';
import { NavLink } from 'react-router-dom';
import meditation from '../../assets/verticalbar/meditation.svg';
import swing from '../../assets/verticalbar/swing.svg';
import biking from '../../assets/verticalbar/biking.svg';
import dump from '../../assets/verticalbar/dump.svg';
import Button from '../Button/Button';

export default function Verticalbar() {
	return (
		<div className="verticalbar">
			<div className="verticalbar-grouplink">
				<NavLink to="/" className="navbar-link">
					<Button image={meditation} />
				</NavLink>
				<NavLink to="user/12" className="navbar-link">
					<Button image={swing} />
				</NavLink>
				<NavLink to="/" className="navbar-link">
					<Button image={biking} />
				</NavLink>
				<NavLink to="/" className="navbar-link">
					<Button image={dump} />
				</NavLink>
			</div>
			<p className="verticalbar-text">Copyright, Sportsee 2020</p>
		</div>
	);
}
