import React from 'react';
import logo from './../../assets/logo.svg';
import './Navbar.scss';

/**
 * Represents navigations of application.
 * @param {string} logo - image url.
 * @return Nav
 */
function Navbar() {
	return (
		<nav className="navbar">
			<img src={logo} alt="bohnome qui court" className="navbar-logo" />
			<ul className="navbar-links">
				<li className="navbar-link">Accueil</li>
				<li className="navbar-link">Profil</li>
				<li className="navbar-link">Réglage</li>
				<li className="navbar-link">Communauté</li>
			</ul>
		</nav>
	);
}

export default Navbar;
