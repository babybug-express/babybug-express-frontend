import React, { FunctionComponent } from "react";
import styles from "../styles/MainHeader.module.scss";
import Navbar from "./Navbar";

interface MainHeaderProps {
  Navbar: FunctionComponent;
}

const MainHeader: FunctionComponent<MainHeaderProps> = () => {
  return (
    <div className={styles.main__header}>
      <Navbar />
      <div className={styles.main__header_buttom}>
        <p>LOGISTIC BUSINESS SOLUTION</p>
        <h1>
          TRANSPORT IS WHAT <br />
          WE DO BEST
        </h1>
        <div className={styles.main__header_CTA}>
          <button>WHO WE ARE</button>
          <button>CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
