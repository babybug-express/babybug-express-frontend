import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/Navbar.module.scss";
import LogoImage from "../assets/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavbarProps { }

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {

  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Image src={LogoImage} alt="babyBug logo" />
      </div>
      <ul className={styles.navbar__right}>
        <Link href='/'>
          <li className={router.pathname == '/' ? styles.active : ''}>Home</li>
        </Link>
        <Link href='/track-item'>
          <li className={router.pathname == '/track-item' ? styles.active : ''}>Track item</li>
        </Link>
        <Link href='/about'>
          <li className={router.pathname == '/about' ? styles.active : ''}>About Us</li>
        </Link>
        <Link href='/contact'>
          <li className={router.pathname == '/contact' ? styles.active : ''}>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
