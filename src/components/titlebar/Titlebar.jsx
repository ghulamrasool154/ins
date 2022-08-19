import React, { Component } from "react";
import classes from "./Titlebar.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const Titlebar = (props) => {
  const { icon, title, link } = props;
  return (
    <>
      <div className={classes.main_titlebar}>
        <Link to={link}>
          <div className={classes.icon_div}>
            <BsArrowLeft className={classes.left_arrow} />
          </div>
        </Link>
        <div className={classes.youtube_icon}>
          <p className={classes.para}>
            <span>{icon}</span>
            {title}
          </p>
        </div>
      </div>
    </>
  );
};
export default Titlebar;
