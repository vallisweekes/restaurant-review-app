import Reslist from "../../src/restList.json";

export function getRestaraunts() {
    return Reslist.results.map(res => res);
}