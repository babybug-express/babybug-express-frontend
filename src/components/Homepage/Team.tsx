import React, { FunctionComponent } from "react";
import styles from "../../styles/AboutUs.module.scss";
import Image from "next/image";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.jpg";
interface TeamProps {}

const Team: FunctionComponent<TeamProps> = () => {
  return (
    <div className={styles.team}>
      <h3>OUR TEAM</h3>
      <div className={styles.team__people}>
        <div className={styles.team__person}>
          <Image src={team1} alt="" className={styles.team__image} />
          <p>Dustin Hnilica</p>
        </div>
        <div className={styles.team__person}>
          <Image src={team2} alt="" className={styles.team__image} />
          <p>Ayeni Victor</p>
        </div>
        <div className={styles.team__person}>
          <Image src={team3} alt="" className={styles.team__image} />
          <p>Jennifer BugBee</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
