import React, { FunctionComponent } from "react";
import styles from "../../styles/MainHeader.module.scss";

interface MainHeaderProps {
  
}

const MainHeader: FunctionComponent<MainHeaderProps> = () => {
  return (
    <div className={styles.main__header}>
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
