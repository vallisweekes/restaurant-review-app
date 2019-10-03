import React from 'react';
// import PropTypes from 'prop-types';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class Button extends React.Component {
	render() {
		console.log(this.props);
		return (
			<button className=' btn btn__style' type='button'>
				{this.props.children}
				<span>
					<ArrowDropDownIcon>ArrowDropDownIcon</ArrowDropDownIcon>
				</span>
			</button>
		);
	}
}

export default Button;
