import React, { Component } from 'react';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter as Router, Route, Switch } from 'react-router';

class AppContainer extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<div className='container-fluid app__containter'>
				<header className='app__container-header'>
					{this.props.children[0]}
				</header>
				<main className='app__container-results'>
					{' '}
					{this.props.children[1]}{' '}
				</main>{' '}
			</div>
		);
	}
}

export default AppContainer;
