import React, { FunctionComponent } from "react";
import styles from "../../styles/Team.module.scss";
import Image from "next/image";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
interface TeamProps {}

const Team: FunctionComponent<TeamProps> = () => {
  return (
    <div className={styles.team}>
      <div>
        <div>
          <Image src={team1} alt="" />
          <p>Dustin</p>
        </div>
        <div>
          <Image src={team2} alt="" />
          <p>Ayeni John</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
