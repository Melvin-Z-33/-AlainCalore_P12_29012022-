import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

const UserContextGiven = (props) => {
	const [user, setUser] = useState({ name: 'Didiex' });
	const toggletheme = () => {
		alert('you');
	};

	return <UserContext.Provider name={user}>{props.children}</UserContext.Provider>;
};

export default UserContextGiven;
