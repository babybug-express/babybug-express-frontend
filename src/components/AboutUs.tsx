import React, { FunctionComponent } from "react";
import styles from "../styles/AboutUs.module.scss";
import AboutUsImage from "../assets/images/aboutUs.png";
import Image from "next/image";

interface AboutProps {}

const AboutUs: FunctionComponent<AboutProps> = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs__top}>
        <div className={styles.aboutUs__left}>
          <Image src={AboutUsImage} alt="aboutUsImage" />
        </div>
        <div className={styles.starImage}>
          <svg
            width="78"
            height="80"
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="62" cy="62" r="62" fill="white" />
            <path
              d="M58.2291 80V74L59.96 65.9574L53.9018 71.4468L48.7091 74.383L45 67.7447L50.0691 64.8085L57.6109 62L50.0691 59.3191L45 56.383L48.7091 49.7447L53.9018 52.6809L59.96 58.0426L58.2291 50V44H65.7709V50L64.04 58.0426L70.2218 52.6809L75.4145 49.7447L79 56.383L73.9309 59.3191L66.3891 62L73.9309 64.8085L79 67.7447L75.4145 74.383L70.2218 71.4468L64.04 65.9574L65.7709 74V80H58.2291Z"
              fill="#D0222C"
            />
          </svg>
        </div>
        <div className={styles.aboutUs__right}>
          <p className={styles.section__title}>ABOUT US</p>
          <h3>RELIABLE AND TRUSTED LOGISTIC COMPANY</h3>
          <p>
            Here at BABYBUG EXPRESS LLC, we take pride in our exceptional
            logistics services. From moving household goods to providing
            accurate quotes, we aim to make your experience hassle-free and
            efficient. With our dedicated team of professionals and commitment
            to excellence, we are the logistics company you can trust.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
      <div className={styles.aboutUs__buttom}>
        <p>NEED LOGISTIC SERVICE</p>
        <button>CONTACT US</button>
      </div>
    </div>
  );
};

export default AboutUs;
