import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Star } from "@material-ui/icons";
import "./restaurant.css";
const Restauraunt = ({ restarauntResults, reviewText }) => {
  const date = new Date();
  const time = date.getHours() + date.getMinutes().toString();

  const restaruants =
    restarauntResults &&
    restarauntResults.map((result, i) => (
      <section key={i} className="rest__card">
        <div className="rest__card-img">
          <img src={result.photo} alt="my img" />
        </div>{" "}
        <a href="/#">
          <div className="rest__card-info">
            <div className="flex__items-column">
              <div className="rest__card-quality text-bold">
                {" "}
                {result.status}{" "}
              </div>{" "}
              <div className="rest__card-name text-bold text-size-lg">
                {" "}
                {result.name}{" "}
              </div>{" "}
              <div className="rest__card-address text-bold">
                {" "}
                {result.vicinity}{" "}
              </div>{" "}
              <div className="ratings__reviews flex__items-row">
                <div className="rest__card-starrating">
                  <span className="mr-1"> {result.ratings} </span>{" "}
                  {Array(result.ratings).fill(
                    <Star fontSize={"small"} color={"secondary"} />
                  )}{" "}
                </div>{" "}
                <div className="rest__card-reviewstotal">
                  {" "}
                  {result.reviews.length === 1
                    ? `(${result.reviews.length}) ${reviewText}`
                    : `(${result.reviews.length}) ${reviewText}s`}{" "}
                </div>{" "}
              </div>{" "}
              <div className="b_times rest__card-footer ">
                <div className="rest__card-footer-inner flex__items-row">
                  <div className="businessHours-left">
                    {" "}
                    {time < result.opening_hours.periods[0].close.time ? (
                      <div className="rest__card-opentimes">
                        <span className="open">
                          <FiberManualRecordIcon fontSize={"small"}>
                            FiberManualRecordIcon{" "}
                          </FiberManualRecordIcon>{" "}
                        </span>
                        Open Now{" "}
                      </div>
                    ) : (
                      <div className="rest__card-close">
                        <span className="close">
                          <FiberManualRecordIcon fontSize={"small"}>
                            FiberManualRecordIcon{" "}
                          </FiberManualRecordIcon>{" "}
                        </span>
                        Closed{" "}
                      </div>
                    )}{" "}
                  </div>{" "}
                  <div className="businessHours-right">
                    {" "}
                    {time !== result.opening_hours.periods[0].close.time ? (
                      <div className="rest__card-opentimes">
                        Opens At {result.opening_hours.periods[0].open.time}{" "}
                      </div>
                    ) : (
                      <div className="rest__card-close">
                        Closes At {result.opening_hours.periods[0].close.time}{" "}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
    ));

  return (
    <div>
      {restarauntResults !== null ? (
        restaruants
      ) : (
        <p> No restaruants in this area </p>
      )}
    </div>
  );
};

export default Restauraunt;
