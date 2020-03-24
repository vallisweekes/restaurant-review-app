import myRestaurantlist from '../myRestaurantData/restList.json';

export function getMyRestaraunts() {
  return myRestaurantlist.results.map(res => {
    return {
      id: res.id,
      location: {
        lng: res.location.lng,
        lat: res.location.lat
      },
      name: res.name,
      photos: res.photos,
      placeId: res.placeId,
      rating: res.rating,
      totalRatings: res.totalRatings,
      address: res.address,
      favourite: res.favourite,
      reviews: res.reviews,
      website: res.website,
      customersPhoto: ['https://www.vallisweekes.com/img/nocustomerimage.jpg'],
      openingHours: {
        open_now: (function() {
          const day = new Date().getDay();
          let time = new Date().getHours();
          const newTime = time + '00';
          const closeDays = res.opening_hours.periods
            .map(period => period)
            .map(open => open.close.day);
          // const closeTime = res.opening_hours.periods.map(
          //   ctime => ctime.close.time
          // );
          // console.log(closeTime.map(times => parseInt(times)));
          // console.log(parseInt(newTime));

          // const closeTime = res.opening_hours.periods
          //   .map(time => time)
          //   .map(open => open.close.time);

          const closed = closeDays.filter(c => c === day).reduce(acc => acc);

          // const closedTime = closeTime
          //   .filter(t => t === time)
          //   .reduce(acc => acc);
          // console.log(closedTime);
          if (day === closed) {
            if (parseInt(newTime) > 2200) {
              return false;
            } else {
              return true;
            }
          }
        })()
      }
    };
  });
}
