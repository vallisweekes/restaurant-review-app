import React from "react";
import { Star } from "@material-ui/icons";
const RatingsFilterItems = props => {
  const myRating = React.createRef();

  // const ratingNumber = [5, 4, 3, 2, 1];

  return (
    <ul>
      {props.ratings &&
        props.ratings.map((ratingNum, i) => (
          <li key={i} className="ratings__dropdonw-items p-2 ">
            <div>
              <input
                value={myRating}
                type="checkbox"
                className="mr-2"
                onChange={e => props.onStarSelect(e.target.value)}
              />
              {ratingNum}{" "}
            </div>{" "}
            <span className="ml-2">
              {Array(ratingNum).fill(
                <Star fontSize={"small"} color={"secondary"} />
              )}
            </span>
          </li>
        ))}
    </ul>
  );
};

export default RatingsFilterItems;
