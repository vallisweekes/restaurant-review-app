import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
	constructor(props) {
		super(props);
		console.log(props.lat);
		console.log(props.lon);
	}

	render() {
		return (
			<Map
				google={this.props.google}
				zoom={15}
				initialCenter={{ lat: this.props.lat, lng: this.props.lon }}
			>
				<Marker position={{ lat: this.props.lat, lng: this.props.lon }} />
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCuURQLKaUsOXYZWDi0ZXyKxCe0Hou48bU&callback'
})(MapContainer);
