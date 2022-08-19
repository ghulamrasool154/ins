import React, { Component, useState } from "react";
import classes from "./Order.module.css";
import Titlebar from "../../components/titlebar/Titlebar";
import { BsBasket2 } from "react-icons/bs";
import OrderTable from "../../components/ordertable/OrderTable";

const Order = () => {
  const [ordertable, setOrderTable] = useState([
    {
      id: "1",
      item: "Main device",
      reference: "B-FP-IMC-00-000-000-0012",
    },
    {
      id: "2",
      item: "Irrigation / Evacuation Container and Pump",
      reference: "B-SP-IMC-00-000-000-0014",
    },
    {
      id: "3",
      item: "SAF Infinitum™ Charger",
      reference: "B-FP-IMC-00-000-000-0012",
    },
    {
      id: "4",
      item: "SAF INFINITUM battery",
      reference: "B-FP-IMC-00-000-000-0012",
    },
  ]);
  return (
    <>
      <section>
        <div className={`container ${classes.order_main_page}`}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-10">
              <div className={classes.order_heading}>
                <Titlebar
                  icon={<BsBasket2 />}
                  title="Spare parts & Ordering"
                  link={"/pdf"}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={classes.table_section}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th className="">Ref. #</th>
                      <th className="text-end">Click to Open </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordertable.map((e, idx) => (
                      <OrderTable
                        key={idx}
                        item={e.item}
                        reference={e.reference}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Order;
