import React, { FunctionComponent } from "react";
import styles from "../../styles/oking.module.scss";

interface BookingPops {
  productList: Array<{ tabName: string }>;
}

const Booking: FunctionComponent<BookingPops> = ({ productList }) => {
  return <div>booking</div>;
};

export default Booking;
