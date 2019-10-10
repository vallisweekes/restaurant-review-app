import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import RestList from "../../../restList.json";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
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
      lat: this.props.lat,
      lng: this.props.lng,
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
          lat: this.state.lat,
          lng: this.state.lng
        }}
      >
        <Marker
          onMouseover={this.state.onMarkerOver}
          name={"You are Here"}
          position={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.state.onClose}
        >
          <div>
            <h4>{this.state.name}</h4>
          </div>
        </InfoWindow>
        {RestList.results.map(rest => (
          <Marker
            key={rest.id}
            position={{
              lat: rest.geometry.location.lat,
              lng: rest.geometry.location.lng
            }}
            name={rest.name}
            onClick={this.state.onMarkerOver}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.state.onClose}
        >
          <div>
            <h4>{this.state.onMarkerOver.selectedPlace}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8Byy23oFligL0X1_WQYca0ABneIhxOow"
})(MapContainer);
