import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      onMarkerOver: function(props, marker) {
        console.log(props);
        return {
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        };
      }
    };
  }
  UNSAFE_componentWillMount() {
    this.setState({
      onClose: function(props) {
        if (this.state.showingInfoWindow) {
          return {
            showingInfoWindow: false,
            activeMarker: null
          };
        }
      }
    });
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{ width: "100%", height: "100%", position: "absolute" }}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
      >
        {this.props.data.results.map(rest => (
          <Marker
            key={rest.id}
            s
            position={{
              lat: rest.geometry.location.lat,
              lng: rest.geometry.location.lng
            }}
            name={rest.name}
            onClick={this.state.onMarkerOver}
          />
        ))}
        <Marker
          onMouseover={this.state.onMarkerOver}
          name={"You are Here"}
          position={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8Byy23oFligL0X1_WQYca0ABneIhxOow"
})(MapContainer);
