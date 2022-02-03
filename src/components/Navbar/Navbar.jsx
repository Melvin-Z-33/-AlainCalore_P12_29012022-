import React from 'react';
import logo from './../../assets/logo.svg';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
/**
 * Represents navigations of application.
 * @param {string} logo - image url.
 * @return Nav
 */
function Navbar() {
	return (
		<nav className="navbar">
			<img src={logo} alt="bohnome qui court" className="navbar-logo" />
			<NavLink to="/" className="navbar-link">
				Accueil
			</NavLink>
			<NavLink to="user/:id" className="navbar-link">
				Profil
			</NavLink>
			<NavLink to="/" className="navbar-link">
				Réglage
			</NavLink>
			<NavLink to="/" className="navbar-link">
				Communauté
			</NavLink>
		</nav>
	);
}

export default Navbar;
