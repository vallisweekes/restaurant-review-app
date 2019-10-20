import Reslist from "../../src/restList.json";

export function getRestRatings() {
    return Reslist.results.map(res => res.ratings);
}