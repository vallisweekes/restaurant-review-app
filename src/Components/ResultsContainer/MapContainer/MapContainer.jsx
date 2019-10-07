import React, { Component } from 'react';
import Map from './Map';
import { withScriptjs, withGoogleMap } from 'react-google-maps';

class MapContainer extends Component {
	render() {
		const WrappedMap = withScriptjs(withGoogleMap(Map));

		return (
			<div className='app__map-item app'>
				<WrappedMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA8Byy23oFligL0X1_WQYca0ABneIhxOow`}
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '100%' }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}

export default MapContainer;
