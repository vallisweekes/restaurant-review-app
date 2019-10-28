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
          lat: this.props.lat,
          lng: this.props.lng
        }}
        onReady={this.props.fetchPlaces}
      >
        {this.props.loaded && (
          <Marker
            onClick={this.onIconClick}
            name={"You are Here"}
            position={{
              lat: this.props.lat,
              lng: this.props.lng
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
  apiKey: "AIzaSyA8Byy23oFligL0X1_WQYca0ABneIhxOow"
})(MapContainer);
