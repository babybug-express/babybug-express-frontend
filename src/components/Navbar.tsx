import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/Navbar.module.scss";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = ():ReactElement => {
    return ( 
        <div className={styles.navbar}>
            <p>Navbar here...</p>
        </div>
     );
}
 
export default Navbar;