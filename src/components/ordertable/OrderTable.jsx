import React, { Component, useState } from "react";
import classes from "./Ordertable.module.css";
import rectangle127 from "../../assets/images/Rectangle 127.png";
import Popupbarcode from "../../components/popupbarcode/Popupbarcode";
const OrderTable = (props) => {
  const [popupHidShow, setpopupHideShow] = useState(false);
  const hanldePopup = () => {
    setpopupHideShow(!popupHidShow);
  };
  const { item, reference } = props;

  return (
    <>
      {popupHidShow && <Popupbarcode hanldePopup={hanldePopup} />}
      <tr className={classes.table_row}>
        <td className={classes.itemss}>{item}</td>
        <td className={classes.reference}>{reference}</td>
        <td className={classes.clicktoOpen}>
          <a href="#">
            <img src={rectangle127} alt="image" onClick={hanldePopup} />
            <h5 className={classes.title__of__image__ordet}>image</h5>
          </a>
        </td>
      </tr>
    </>
  );
};
export default OrderTable;
