import React from 'react';
import './Header.scss';

export default function Header(props) {
	return (
		<header className="header">
			<p>
				Bonjour <span className="user-firstname">{props.name}</span>
			</p>
			<p>Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
		</header>
	);
}
