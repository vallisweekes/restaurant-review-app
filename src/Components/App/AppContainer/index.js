import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import AppContainer from './AppContainer';
import { getMyRestaraunts } from '../../../util/getRMyRestaurants';
// import { manipulateIndividualResData } from '../../../util/manipulateIndividualResData';

const home = { lat: 51.593416217497875, lng: -0.10362844184942505 };
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: { lat: this.props.lat, lng: this.props.lng },
      saveUserHomeLocation: false,
      showPopUp: false,
      userHomeLocation: { lat: 0, lng: 0 },
      myRestaurants: getMyRestaraunts(),
      isMyRestaurantAdded: false,
      restaurants: [],
      reviews: [],
      reviewLength: '',
      cacheReviews: [],
      selectedRestaurant: [],
      isCached: false,
      selectedCacheRestaurant: [],
      favourites: [],
      showModal: false,
      showForm: false,
      loading: false,
      mapProps: {},
      map: {},
      showAddRestaurantForm: false,
    };
  }

  //FETCHING DATA FROM GOOGLE API///

  fetchPlaces = (mapProps, map) => {
    const restaurantsLoaded = this.allRestaurantsLoaded;
    const addingRestaunrants = this.addRestaurants;
    const isCached = JSON.parse(localStorage.getItem('isCached'));
    localStorage.setItem('cachedRestaurantsWithInhouse', JSON.stringify([]));

    this.setState({
      saveUserHomeLocation: true,
      map,
      mapProps,
    });

    //Check 1 compare both locations
    //JSON.stringify(this.state.coordinates) === JSON.stringify(home)
    if (JSON.stringify(this.state.coordinates) === JSON.stringify(home)) {
      console.log('caching main...');
      //Check  2 if cached
      if (isCached) {
        const cacheSlectedRestaurant = JSON.parse(
          localStorage.getItem('selectedRestaurantCache')
        );

        console.log('Checking Cache Selected', cacheSlectedRestaurant);

        // localStorage.setItem('selectedRestaurantCache', JSON.stringify([]));

        const cachedRestaurants = Array.from(
          JSON.parse(localStorage.getItem('cacheRestaurants'))
        );
        const cachedRestaurantWithHome = Array.from(
          JSON.parse(localStorage.getItem('cachedRestaurantsWithInhouse'))
        );
        console.log(
          'Checking if my local restaurants added',
          cachedRestaurantWithHome
        );
        if (cachedRestaurantWithHome.length > 0) {
          console.log('cachining WITH HOME 1.... if block');
          const myRestData = Array.from(getMyRestaraunts());

          localStorage.setItem(
            'selectedRestaurantCache',
            JSON.stringify(myRestData)
          );
          this.setState({
            restaurants: cachedRestaurantWithHome,
          });
        } else {
          console.log('caching 2.... else block');
          this.setState({
            restaurants: cachedRestaurants,
          });
        }
      } else {
        console.log('feacting......1');
        this.setState({
          map,
          mapProps,
        });

        const { google } = mapProps;
        const geoLocation = new google.maps.LatLng(
          this.state.coordinates.lat,
          this.state.coordinates.lng
        );
        const request = {
          location: geoLocation,
          radius: '800',
          type: ['restaurant'],
        };

        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, getPlaces);

        async function getPlaces(restaurantData, status, pagination) {
          if (status === 'OK') {
            if (pagination.hasNextPage) {
              pagination.nextPage();
            } else {
              restaurantsLoaded(google, map);
            }
          }

          // Storing passsing results here = addRestaurants
          addingRestaunrants(restaurantData);
        }
      }
    } else {
      this.setState({
        map,
        mapProps,
      });
      if (isCached) {
        console.log('inside caching 2.....');
        localStorage.setItem('selectedRestaurantCache', JSON.stringify([]));
        const cachedRestaurants = Array.from(
          JSON.parse(localStorage.getItem('cacheRestaurants'))
        );

        this.setState({
          restaurants: cachedRestaurants,
        });
      } else {
        console.log('else inside fectching 2.....');
        const { google } = mapProps;
        const geoLocation = new google.maps.LatLng(
          this.state.coordinates.lat,
          this.state.coordinates.lng
        );
        const request = {
          location: geoLocation,
          radius: '800',
          type: ['restaurant'],
        };

        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, getPlaces);

        function getPlaces(restaurantData, status, pagination) {
          if (status === 'OK') {
            if (pagination.hasNextPage) {
              pagination.nextPage();
            } else {
              restaurantsLoaded(google, map);
            }
          }
          // Storing passsing results here = addRestaurants
          addingRestaunrants(restaurantData);
        }
      }
    }
  };

  allRestaurantsLoaded = (google, map) => {
    return { google, map };
  };
  addRestaurants = (restaurantData) => {
    const ImageUrl = 'https://www.vallisweekes.com/img/noimage.jpg';
    const newRestaurantData = restaurantData.map((place) => {
      return {
        id: place.id,
        location: {
          lng: place.geometry.location.lng(),
          lat: place.geometry.location.lat(),
        },
        name: place.name,
        photos: place.photos ? place.photos[0].getUrl() : ImageUrl,
        placeId: place.place_id,
        rating: place.rating ? Math.ceil(place.rating) : 0,
        totalRatings: place.user_ratings_total ? place.user_ratings_total : 0,
        address: place.vicinity,
        favourite: false,
      };
    });
    const { restaurants } = this.state;
    this.setState(
      {
        restaurants: [...restaurants, ...newRestaurantData],
        isCached: true,
      },
      () => {
        if (restaurants.length) {
          localStorage.setItem(
            'cacheRestaurants',
            JSON.stringify(this.state.restaurants)
          );
          localStorage.setItem('isCached', JSON.stringify(true));
          localStorage.setItem('selectedRestaurantCache', JSON.stringify([]));
        } else {
          localStorage.setItem('isCached', JSON.stringify(false));
        }
      }
    );
  };

  selectedPlaceDetails = (placeid, id) => {
    const { mapProps, map } = this.state;
    const { google } = mapProps;
    const storeDetails = this.detailsStorage;
    const restaurants = this.state.restaurants;
    const cached = JSON.parse(localStorage.getItem('selectedRestaurantCache'));

    const checkCombineRestaurants = JSON.parse(
      localStorage.getItem('cachedRestaurantsWithInhouse')
    );
    console.log('Checking combined', checkCombineRestaurants);
    const filterRestaurants = restaurants.filter((place) => {
      return place.placeId === placeid;
    });

    console.log('Filtering Out .. Call 1', filterRestaurants);
    console.log('What is Cached data', cached);
    // if (checkCombineRestaurants.length === parseInt(0)) {
    //   console.log('first fetch......');
    //   return initFetching();
    // }

    if (cached.length > 0 && cached.length !== null) {
      const filteredCacheResults = cached.filter((result, i) => {
        return cached.map((val) => val.id).indexOf(result.id) === i;
      });
      console.log('Filtered csche results', filteredCacheResults);
      const storingSeletedFilteredData = filteredCacheResults.filter(
        (f) => f.id === id
      );

      console.log('Storng Selected Filter data', storingSeletedFilteredData);
      if (storingSeletedFilteredData.length === 1) {
        console.log('using cache selected....1');
        const cacheDetails = filteredCacheResults.filter((f) => f.id === id);

        this.setState({
          selectedRestaurant: cacheDetails,
          showModal: true,
        });
      } else {
        console.log('second fetch....');
        initFetching();
      }
    } else {
      console.log('third fetch...');
      initFetching();
    }

    function initFetching() {
      const service = new google.maps.places.PlacesService(map);
      const request = {
        placeId: `${placeid}`,
        fields: [
          'opening_hours',
          'reviews',
          'formatted_phone_number',
          'website',
          'photos',
        ],
      };
      service.getDetails(request, getInfo);
      function getInfo(results, status) {
        if (status === 'OK') {
          const mapRest = filterRestaurants.map((resKeys) => {
            return {
              ...resKeys,
              reviews: Object.assign({}, results).reviews,
              website: Object.assign({}, results).website,
              phoneNumber: Object.assign({}, results).formatted_phone_number,
              customersPhoto: Object.assign({}, results).photos.map((p) =>
                p.getUrl()
              ),
              openingHours: Object.assign({}, results).opening_hours,
            };
          });
          // FUNCTION this.detailstorage
          storeDetails(mapRest);
        }
      }
    }
  };
  //Using to cache selected restaurant
  detailsStorage = (details) => {
    // const reviews = details.map(rev => rev.reviews);
    console.log(details);
    const cacheData = this.state.selectedCacheRestaurant;
    cacheData.push(details.reduce((acc) => acc));
    console.log('selected Cache data Call 2', cacheData);

    localStorage.setItem('selectedRestaurantCache', JSON.stringify(cacheData));

    const getStoredRestaurant = localStorage.getItem('selectedRestaurantCache');

    const storedData = Array.from(JSON.parse(getStoredRestaurant));

    this.setState({
      selectedCacheRestaurant: storedData,
      selectedRestaurant: details,
      showModal: true,
    });
    this.showModal();
  };

  homeDefault = (value) => {
    if (JSON.stringify(this.state.coordinates) === JSON.stringify(home)) {
      if (value === 'yes') {
        const userHomeLocation = this.state.coordinates;

        //condition for showin home i can
        this.setState(
          {
            saveUserHomeLocation: true,
            userHomeLocation,
          },
          () => {
            localStorage.setItem(
              'saveUserHomeLocation',
              JSON.stringify(this.state.saveUserHomeLocation)
            );
            localStorage.setItem(
              'userHomeLocation',
              JSON.stringify(userHomeLocation)
            );

            localStorage.setItem(
              'cachedRestaurantsWithInhouse',
              JSON.stringify([])
            );
          }
        );
      } else {
        this.setState(
          {
            saveUserHomeLocation: false,
            showPopUp: false,
          },
          () => {
            localStorage.setItem(
              'saveUserHomeLocation',
              JSON.stringify(this.state.saveUserHomeLocation)
            );
            localStorage.setItem(
              'cachedRestaurantsWithInhouse',
              JSON.stringify([])
            );
            localStorage.setItem('selectedRestaurantCache', JSON.stringify([]));
          }
        );
      }
    } else {
      this.setState({
        showPopUp: false,
      });
    }
  };

  //ADD REVIEW HERE
  addReview = (restaurant, review) => {
   
    restaurant.reviews.unshift(review);
    this.setState({
      selectedCacheRestaurant: [
        restaurant,
        ...this.state.selectedCacheRestaurant,
      ],
    });

    localStorage.setItem(
      'selectedRestaurantCache',
      JSON.stringify(this.state.selectedCacheRestaurant)
    );
  };

  // ADDING MARKER
  addMarker = (mapProps, map, e) => {
    const { google } = mapProps;
    const marker = new google.maps.Marker({
      placeId: '',
      name: '',
      restaurantQuality: '',
      rating: 'rating',
      position: e.latLng,
      map: map,
    });
    console.log('Checking events', google);
    setTimeout(() => {
      this.showAddRestaurantForm();
    }, 500);
    this.getMakerProps(marker, mapProps, map);

    const infowindow = new google.maps.InfoWindow({
      content: {},
    });

    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
    return marker;
  };

  // ADD RESTAURANT FORM
  showAddRestaurantForm = () => {
    this.setState({
      showAddRestaurantForm: true,
    });
  };

  closeAddRestauantForm = () => {
    this.setState({
      showAddRestaurantForm: false,
    });
  };

  getMakerProps = (makerProps) => {
    //PASSING ADDED RESTAURANT OBJECT

    this.addRestaurantOnMap = (restObj) => {
      restObj.location.lat = makerProps.position.lat();
      restObj.location.lng = makerProps.position.lng();
      makerProps.name = restObj.name;
      makerProps.rating = restObj.rating;
      makerProps.placeId = restObj.placeId;

      this.setState({
        restaurants: [restObj, ...this.state.restaurants],
        showAddRestaurantForm: false,
      });
      const selectedRestaurantCache = JSON.parse(
        localStorage.getItem('selectedRestaurantCache')
      );
      const addNewRestaurant = [
        restObj,
        ...Array.from(selectedRestaurantCache),
      ];

      localStorage.setItem(
        'selectedRestaurantCache',
        JSON.stringify(addNewRestaurant)
      );
    };
  };

  getHomeRestaurants = () => {
    const myRestData = Array.from(getMyRestaraunts());
    const { restaurants } = this.state;
    const cachedRestaurantWithHome = JSON.parse(
      localStorage.getItem('cachedRestaurantsWithInhouse')
    );

    // JSON.stringify(this.state.coordinates) === JSON.stringify(home)

    if (cachedRestaurantWithHome <= 0) {
      // console.log('wen adding local 1...');
      const inHouseRestaurants = restaurants.concat(myRestData);
      localStorage.setItem(
        'cachedRestaurantsWithInhouse',
        JSON.stringify(inHouseRestaurants)
      );
      const getinHouseRestaurants = localStorage.getItem(
        'cachedRestaurantsWithInhouse'
      );

      const cacheData = JSON.parse(
        localStorage.getItem('selectedRestaurantCache')
      );

      const addingToselectedCacheData = [...cacheData, ...myRestData];

      localStorage.setItem(
        'selectedRestaurantCache',
        JSON.stringify(addingToselectedCacheData)
      );

      this.setState({
        restaurants: JSON.parse(getinHouseRestaurants),
      });
    } else {
      this.setState({
        restaurants,
      });
    }
  };
  componentDidMount() {
    const isLocationSet = JSON.parse(
      localStorage.getItem('saveUserHomeLocation')
    );
    const userHomeLocation = JSON.parse(
      localStorage.getItem('userHomeLocation')
    );
    if (
      JSON.stringify(this.state.coordinates) === JSON.stringify(home) &&
      !isLocationSet
    ) {
      setTimeout(() => {
        this.setState({
          showPopUp: true,
        });
      }, 4000);
    } else {
      this.setState({
        saveUserHomeLocation: isLocationSet,
        userHomeLocation,
      });
    }

    this.handleCLosePopUp = () => {
      this.setState({
        showPopUp: false,
      });
    };
  }

  componentDidUpdate() {
    const ImageUrl = 'https://www.vallisweekes.com/img/noimage.jpg';
    const searchResults = this.searchResults;
    const { mapProps, map } = this.state;
    const { google } = mapProps;
    this.handleSearchLatLng = (obj) => {
      this.setState({
        restaurants: [],
        coordinates: { lat: obj.lat, lng: obj.lng },
      });
      const newLocation = new google.maps.LatLng(obj.lat, obj.lng);

      const request = {
        location: newLocation,
        radius: '800',
        type: ['restaurant'],
      };
      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, getPlaces);
      function getPlaces(myResults, status, pagination) {
        if (status === 'OK') {
          if (pagination.hasNextPage) {
            pagination.nextPage();
          }
        }

        searchResults(myResults);
      }
    };
    this.searchResults = (searchResults) => {
      const searchRestaurantData = searchResults.map((place, i) => {
        return {
          id: place.id,
          location: {
            lng: place.geometry.location.lng(),
            lat: place.geometry.location.lat(),
          },
          name: place.name,
          photos: place.photos ? place.photos[0].getUrl() : ImageUrl,
          placeId: place.place_id,
          rating: place.rating ? Math.ceil(place.rating) : 0,
          totalRatings: place.user_ratings_total ? place.user_ratings_total : 0,
          address: place.vicinity,
        };
      });
      localStorage.setItem('selectedRestaurantCache', JSON.stringify([]));
      const { restaurants } = this.state;

      this.setState({
        restaurants: [...restaurants, ...searchRestaurantData],
      });
    };
  }

  // Handle Favourite
  handleFavourite = (restaurant) => {
    const restaurants = [...this.state.restaurants];
    const index = restaurants.indexOf(restaurant);
    restaurants[index] = { ...restaurants[index] };
    restaurants[index].favourite = !restaurants[index].favourite;

    this.setState({
      restaurants,
      favourites: restaurants.filter((result) => result.favourite === true),
    });

    restaurants.filter((result) => result.favourite === true);
  };
  // Handle showing modal
  showModal = () => {
    this.setState({
      showModal: true,
    });
  };
  //handle Hiding Modal
  hideModal = () => {
    this.setState({
      showModal: false,
      placeDetails: [],
    });
  };

  render() {
    const {
      restaurants,
      coordinates,
      selectedRestaurant,
      showAddRestaurantForm,
      showPopUp,
      saveUserHomeLocation,
      favourites,
      mapProps,
    } = this.state;

    return (
      <div>
        <Map
          google={this.props.google}
          visible={false}
          onReady={this.fetchPlaces}
          initialCenter={{
            lat: coordinates.lat,
            lng: coordinates.lng,
          }}
        />

        <AppContainer
          selectedRestaurant={selectedRestaurant}
          lat={this.state.coordinates.lat}
          lng={this.state.coordinates.lng}
          googleMap={this.props.google}
          mapProps={mapProps}
          restaurantResults={restaurants}
          addMarker={this.addMarker}
          showDetails={this.selectedPlaceDetails}
          showModal={this.state.showModal}
          hideModal={this.hideModal}
          searchLatLng={this.handleSearchLatLng}
          showAddRestaurantForm={showAddRestaurantForm}
          handleCloseRestaurant={this.closeAddRestauantForm}
          onReviewSubmit={this.addReview}
          addRestaurantOnMap={this.addRestaurantOnMap}
          setHomeDefault={this.homeDefault}
          showPopUp={showPopUp}
          handleCLosePopUp={this.handleCLosePopUp}
          saveUserHomeLocation={saveUserHomeLocation}
          handleHomeRestaurants={this.getHomeRestaurants}
          handleFavourite={this.handleFavourite}
          favourites={favourites}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCcMtA-_NBxt6cD8uefrk6EFlv-2YfXtS0',
})(Container);
