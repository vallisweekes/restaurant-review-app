import React from 'react';

const Logo = props => {
	const { src, logo } = props;
	return (
		<div>
			<img src={src} alt={logo} />
		</div>
	);
};

export default Logo;
