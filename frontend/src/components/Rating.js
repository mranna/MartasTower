import React from "react";

export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>{" "}
      </span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 1.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>{" "}
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? "fa fa-star"
              : rating >= 2.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>{" "}
      </span>
      <span>{numReviews + " reviews"}</span>
    </div>
  );
}
