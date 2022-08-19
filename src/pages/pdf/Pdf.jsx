import React, { useState } from "react";
import classes from "./Pdf.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import { Link } from "react-router-dom";
const Pdf = () => {
  const [pdfData, setPdfData] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <div className={`container ${classes.pdf__page}`}>
      <div className="row">
        <div className="col">
          <div className={classes.pdf__page__title}>
            <Link to="/">
              <div className={classes.backarrow}>
                <BsArrowLeft />{" "}
              </div>
            </Link>
            <h2 className={classes.title___of__pdf}>
              <>
                {" "}
                <BsFileEarmarkText />
              </>{" "}
              <span style={{ marginLeft: "10px" }}>PDF instructions</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        {pdfData.map((element, index) => {
          return (
            <div
              className={`col-lg-6 col-md-6 col-12 ${classes.pdf__wrappr}`}
              key={index}
            >
              <div className={classes.pdf__file__box}>
                <div className={classes.left__box}>
                  <div className={classes.pdf__box__title}>
                    <h3>Self Adjusting file</h3>
                  </div>
                  <div className={classes.pdf__box__discription}>
                    <p>
                      A short explanaition of what does it means this block and
                      what the user can get of it
                    </p>
                  </div>
                </div>
                <div className={classes.right__box}>
                  <div className={classes.pdf__box__button}>
                    <Link to="/order">
                      <button className="btn">open</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pdf;
