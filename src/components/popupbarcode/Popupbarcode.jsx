import React from "react";
import classes from "./popupbarcode.module.css";
import barcodeimg from "../../assets/images/pdf-bar-code.PNG";
const Popupbarcode = ({ hanldePopup }) => {
  return (
    <div className={classes.popup__bar__code}>
      <div className={classes.popup__bar__code__setting}>
        <div className={classes.popup__bar__code__overlay}>
          <div className={classes.popup__details}>
            <h2 className={classes.popup__title}>System assembly video</h2>
            <h3>Scan to view</h3>

            <div className={classes.bar__code__image}>
              <img src={barcodeimg} alt="bar-code-img" className="img-fluid" />
            </div>
            <div className={classes.popup__bar__code__button}>
              <button className={classes.popup__btn} onClick={hanldePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popupbarcode;
