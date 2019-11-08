import myRestaurantlist from "../myRestaurantData/restList.json";

export function getRestRatings() {
  return myRestaurantlist.results.map(res => res.ratings);
}
