import myRestaurantlist from "../myRestaurantData/restList.json";

export function getMyRestaraunts() {
  return myRestaurantlist.results.map(res => res);
}
