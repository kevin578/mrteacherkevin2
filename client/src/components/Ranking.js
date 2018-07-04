import React from "react";
import oneStar from "../img/badges/oneStar.svg";
import twoStar from "../img/badges/twoStar.svg";
import threeStar from "../img/badges/threeStar.svg";
import spaceCowboy from "../img/badges/spaceCowboy.svg";
import PropTypes from "prop-types";

export default props => {
  function checkArray(item) {
    if (!(props.rank == null)) {
      return props.rank.includes(item) ? true : false;
    }
  }

  const getImage = () => {
    if (checkArray("space_cowboy")) return spaceCowboy;

    if (checkArray("three_star")) return threeStar;
    if (checkArray("two_star")) return twoStar;
    if (checkArray("one_star")) return oneStar;
    return;
  };
  return <img src={getImage()} />;
};
