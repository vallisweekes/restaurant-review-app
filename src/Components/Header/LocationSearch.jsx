import React from 'react';
// import { InputAdornment } from '@material-ui/core/InputAdornment';

import '../../../src/style.css';
const LocationSearch = () => {
	return (
		<section className=''>
			<span className='fa-search'></span>
			<input
				className='mt-2 search  justify-content-center'
				type='text'
				placeholder='Location....'
			/>
		</section>
	);
};

export default LocationSearch;
