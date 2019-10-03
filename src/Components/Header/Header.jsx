import React, { Component, Fragment } from 'react';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import LocationSearch from './LocationSearch';

class Header extends Component {
	render() {
		return (
			<Fragment>
				<section className='header-wrapper clearfix'>
					<section className='row site__header'>
						<Col sm={12} lg={2}>
							<div className='mt-5'>
								<Logo src='../../../../assests/logo.png' alt='Logo' />
							</div>
						</Col>
						<Col sm={12} lg={8}>
							<div className='mt-5'>
								<LocationSearch />
							</div>
						</Col>
					</section>
				</section>
			</Fragment>
		);
	}
}

export default Header;
