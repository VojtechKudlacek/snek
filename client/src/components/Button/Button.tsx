import React, { FunctionComponent } from 'react';

interface Properties {
	children: string;
	onClick: VoidFunction;
}

const Button: FunctionComponent<Properties> = ({ children, onClick }) => {
	return (
		<button onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
