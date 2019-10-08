import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import RestList from '../../../restList.json';

class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: null,
			lng: null
		};
	}
	UNSAFE_componentWillMount() {
		this.setState({
			lat: this.props.lat,
			lng: this.props.lng
		});
	}
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={15}
				style={{ width: '100%', height: '100%', position: 'relative' }}
				initialCenter={{
					lat: this.state.lat,
					lng: this.state.lng
				}}
			>
				{RestList.results.map(rest => (
					<Marker
						key={rest.id}
						name={rest.name}
						position={{
							lat: rest.geometry.location.lat,
							lng: rest.geometry.location.lng
						}}
					/>
				))}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA8Byy23oFligL0X1_WQYca0ABneIhxOow'
})(MapContainer);
