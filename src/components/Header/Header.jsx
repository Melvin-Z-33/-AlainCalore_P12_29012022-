import React from 'react';
import './Header.scss';

export default function Header(name) {
	console.log(name.name.userInfos.firstName);
	return (
		<header className="header">
			<p>
				Bonjour <span className="user-firstname">{name.name.userInfos.firstName}</span>
			</p>
			<p>Félicitation! Vous avez explosé vos objectifs hier </p>
		</header>
	);
}
