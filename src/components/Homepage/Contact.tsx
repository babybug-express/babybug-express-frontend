import React, { FunctionComponent } from "react";
import styles from "../../styles/Contact.module.scss";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <div className={styles.contact}>
      <form></form>
    </div>
  );
};

export default Contact;
