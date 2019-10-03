import React from 'react';
// import PropTypes from 'prop-types';
import FilterListIcon from '@material-ui/icons/FilterList';

class MoreFilter extends React.Component {
	render() {
		console.log(this.props);
		return (
			<button className='btn__style btn__style-round' type='button'>
				<span>
					<FilterListIcon aria-label='arrow down'>
						FilterListIcon
					</FilterListIcon>
				</span>
				More Filter
			</button>
		);
	}
}

MoreFilter.propTypes = {};

export default MoreFilter;
