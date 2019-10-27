import Reslist from "../../restList.json";

export function getRestaraunts() {
  return Reslist.results.map(res => res);
}
