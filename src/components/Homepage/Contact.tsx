import React, { FunctionComponent } from "react";
import styles from "../../styles/Contact.module.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  // form: React.MutableRefObject<undefined>;
  // ref: "MutableRefObject<undefined>";
}

const Contact: FunctionComponent<ContactProps> = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xc89sl7",
        "template_djcq4pd",
        form.current,
        "ARqm1KX6CttwM12be"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={styles.contact}>
      <div className={styles.form__container}>
        <p className={styles.section__title}>CONTACT US</p>
        <h3>SEND US A MESSAGE</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.inputStyle}>
            <input type="text" placeholder="NAME" name="name" required />
            <input type="email" placeholder="EMAIL" name="email" required />
          </div>
          <textarea name="message" required>
            MESSAGE
          </textarea>
          <button>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
