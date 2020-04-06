import React from 'react';
import Pagination from '../Pagination/Pagination';
import Sort from './Sort/Sort';
import Restauraunt from './Restaurants/Restaurant';
// import HomeIcon from '@material-ui/icons/Home';

const RestaurauntsList = (props) => {
  const {
    restarauntResults,
    itemCount,
    pageSize,
    currentPage,
    onPageChange,
    googleMap,
    onSort,
    // saveUserHomeLocation,
    // handleHomeRestaurants,
    handleFavourite,
    showDetails,
    lat,
    lng,
  } = props;

  const restaurantlist = restarauntResults.map((result) => (
    <section
      key={result.id}
      className="rest__card"
      // onRestaurantClick={onRestaurantClick}
    >
      <Restauraunt
        id={result.id}
        placeId={result.placeId}
        restaurantQuality={
          result.rating === 5 ? 'Fabulous' : result.rating > 3 ? 'Good' : 'Ok'
        }
        restaurantImage={result.photos}
        restaurantName={result.name}
        restaurantAddress={result.address}
        rating={result.rating ? result.rating : 0}
        totalRatings={result.totalRatings}
        restaurauntLocation={result.location}
        google={googleMap}
        ratingText="Customer Rating"
        favourite={result.favourite}
        showDetails={showDetails}
        restaurauntObject={result}
        handleFavourite={handleFavourite}
        lat={lat}
        lng={lng}
      />
    </section>
  ));

  return (
    <main className="rest__container">
      <header className="rest__container-header">
        {/*{saveUserHomeLocation ? (
          <section>
            <HomeIcon
              style={{
                position: 'relative ',
                fontSize: 30,
                color: '#042ed8',
                cursor: 'pointer'
              }}
              onClick={handleHomeRestaurants}
            />
          </section>
            ) : null}*/}
        <div className="rest__results-info">
          Showing {restarauntResults.length} of {itemCount} results
        </div>
        <Pagination
          itemsCount={itemCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
        <Sort label={'Sort'} onSort={onSort} />
      </header>
      <div>{restaurantlist}</div>
    </main>
  );
};

export default RestaurauntsList;
