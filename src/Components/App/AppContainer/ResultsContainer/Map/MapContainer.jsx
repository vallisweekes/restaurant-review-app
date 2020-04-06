import React, { Fragment } from 'react';
import { Map, Marker, InfoWindow } from 'google-maps-react';
import InfoWindowContainer from './InfoWindowContent';

// import { zoomFix } from '../../../../../util/zoomCondition';
import './map.css';

const MapContainer = (props) => {
  const {
    restaraunts,
    googleMap,
    lat,
    lng,
    onIconClick,
    activeMarker,
    selectedPlace,
    showInfoWindow,
    onClose,
  } = props;

  // const iConImage = 'https://www.vallisweekes.com/img/map_pin_red.png';
  // console.log(lat, lng);
  return (
    <Fragment>
      <Map
        google={googleMap}
        className={'map'}
        zoom={13}
        initialCenter={{
          lat: lat,
          lng: lng,
        }}
        // onDblclick={props.addMarker}
        scaleControl={true}
        mapTypeControlOptions={true}
      >
        {restaraunts.length &&
          restaraunts.map((result) => (
            <Marker
              key={result.id.toString()}
              placeId={result.placeid}
              name={result.name}
              address={result.address}
              image={result.photos}
              totalRatings={result.totalRatings}
              rating={result.rating}
              restaurantQuality={
                result.rating === 5
                  ? 'Fabulous'
                  : result.rating > 3
                  ? 'Good'
                  : 'Ok'
              }
              restarauntRating={result.rating ? result.rating : null}
              position={{
                lng: result.location.lng,
                lat: result.location.lat,
              }}
              onClick={onIconClick}
            />
          ))}
        <Marker
          onClick={onIconClick}
          name={'You are Here'}
          position={{
            lat: lat,
            lng: lng,
          }}
          clickable={true}
          icon={'https://www.vallisweekes.com/img/you_are_here.png'}
        />
        <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={onClose}
        >
          <InfoWindowContainer
            image={selectedPlace.image}
            name={selectedPlace.name}
            address={selectedPlace.addrress}
            quality={selectedPlace.restaurantQuality}
            rating={selectedPlace.rating}
            totalRatings={selectedPlace.totalRatings}
          />
        </InfoWindow>
      </Map>
    </Fragment>
  );
};

export default MapContainer;
