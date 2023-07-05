import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/Navbar.module.scss";
import LogoImage from "../assets/images/logo.png";
import Image from "next/image";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__right}>
        <Image src={LogoImage} alt="babyBug logo" />
      </div>
      <ul className={styles.navbar__left}>
        <li>Home</li>
        <li>Track item</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
