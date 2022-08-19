import React, { Component } from "react";
import classes from "./Videocard.module.css";
import { Link } from "react-router-dom";
const Videocard = (props) => {
  const { cardImage, heading, para } = props;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className={classes.main_video_card}>
          <div className={classes.card_image}>
            <img src={cardImage} alt="cardiamge" />
          </div>
          <div className={classes.card_detail}>
            <h5>{heading}</h5>
            <p>{para}</p>
          </div>
          <div className={classes.open}>
            <Link to="/order">
              <button>Open</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Videocard;
