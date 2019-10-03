import React, { Component } from 'react';

import Button from './RestaurantContainer/Button';
import MoreFilter from './RestaurantContainer/MoreFilter';

class FilterBar extends Component {
	state = {
		buttons: [
			{ id: 1, name: 'Open Now' },
			{ id: 2, name: 'Cuisine' },
			{ id: 3, name: 'Rating' }
		]
	};
	render() {
		return (
			<section className='filterBar__wrapper'>
				{this.state.buttons.map(button => (
					<Button key={button.id}>{button.name}</Button>
				))}

				<MoreFilter />
			</section>
		);
	}
}

export default FilterBar;
