import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router';
import AppContainer from './AppContainer';
import Header from './Components/Header/Header';
import ResultsContainer from './Components/ResultsContainer/ResultsContainer';

const App = () => {
	return (
		<Fragment>
			<AppContainer>
				<Header />
				<ResultsContainer />
			</AppContainer>{' '}
		</Fragment>
	);
};

export default App;
