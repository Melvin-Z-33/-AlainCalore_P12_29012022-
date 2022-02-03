import React from 'react';
import './Verticalbar.scss';
import { NavLink } from 'react-router-dom';
import meditation from '../../assets/verticalbar/meditation.svg';
import swing from '../../assets/verticalbar/swing.svg';
import biking from '../../assets/verticalbar/biking.svg';
import dump from '../../assets/verticalbar/dump.svg';

export default function Verticalbar() {
	return (
		<div className="verticalbar">
			<div className="verticalbar-grouplink">
				<NavLink to="/" className="navbar-link">
					<button>
						<img src={meditation} alt=""></img>
					</button>
				</NavLink>
				<NavLink to="user/:id" className="navbar-link">
					<button>
						<img src={swing} alt=""></img>
					</button>
				</NavLink>
				<NavLink to="/" className="navbar-link">
					<button>
						<img src={biking} alt=""></img>
					</button>
				</NavLink>
				<NavLink to="/" className="navbar-link">
					<button>
						<img src={dump} alt=""></img>
					</button>
				</NavLink>
			</div>
			<p className="verticalbar-text">Copyright, Sportsee 2020</p>
		</div>
	);
}
