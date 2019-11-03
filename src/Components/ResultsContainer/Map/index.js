import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./map.css";

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlace: {},
      activeMarker: {},
      showingInfoWindow: false
    };
  }

  render() {
    console.log("Mapcontainer Props", this.props);
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{ width: "100%", height: "100%", position: "absolute" }}
        initialCenter={{
          lat: 51.593311799999995,
          lng: -0.10373389999999999
        }}
        onReady={this.props.fetchPlaces}
        draggable={false}
      >
        {this.props.loaded && (
          <Marker
            onClick={this.onIconClick}
            name={"You are Here"}
            position={{
              lat: 51.593311799999995,
              lng: -0.10373389999999999
            }}
            clickable={true}
            animation={this.props.google.maps.Animation.DROP}
            icon={{
              url: "../../../assests/placeholder.svg"
              // This marker is 20 pixels wide by 32 pixels high.
            }}
          />
        )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <p>{this.state.selectedPlace.name}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCcMtA-_NBxt6cD8uefrk6EFlv-2YfXtS0"
})(MapContainer);
