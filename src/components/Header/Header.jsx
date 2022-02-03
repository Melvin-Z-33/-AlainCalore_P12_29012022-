import React from 'react';
import './Header.scss';

export default function Header() {
	return (
		<header className="header">
			<p>
				Bonjour <span className="user-firstname">Thomas</span>
			</p>
			<p>Félicitation! Vous avez explosé vos objectifs hier </p>
		</header>
	);
}
