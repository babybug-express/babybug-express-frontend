import React, { FunctionComponent } from "react";
import styles from "../../styles/AboutUs.module.scss";
import AboutUsImage from "../../assets/images/aboutUs.png";
import Image from "next/image";

interface AboutProps {}

const AboutUs: FunctionComponent<AboutProps> = () => {
  return (
    <div className={styles.aboutUs}>
      {/* <div>
        <div className={}>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 9.99999C20.25 9.83584 20.2177 9.67329 20.1549 9.52163C20.0921 9.36998 20 9.23218 19.8839 9.11611C19.7679 9.00003 19.6301 8.90796 19.4784 8.84514C19.3267 8.78232 19.1642 8.74999 19 8.74999C18.8359 8.74999 18.6733 8.78232 18.5217 8.84514C18.37 8.90796 18.2322 9.00003 18.1162 9.11611C18.0001 9.23218 17.908 9.36998 17.8452 9.52163C17.7824 9.67329 17.75 9.83584 17.75 9.99999H20.25ZM6.25004 9.99999C6.25004 9.66847 6.11835 9.35053 5.88393 9.11611C5.64951 8.88169 5.33156 8.74999 5.00004 8.74999C4.66852 8.74999 4.35058 8.88169 4.11616 9.11611C3.88174 9.35053 3.75004 9.66847 3.75004 9.99999H6.25004ZM20.116 12.884C20.3505 13.1184 20.6685 13.2502 21 13.2502C21.3316 13.2502 21.6496 13.1184 21.884 12.884C22.1185 12.6495 22.2502 12.3316 22.2502 12C22.2502 11.6684 22.1185 11.3504 21.884 11.116L20.116 12.884ZM12 2.99999L12.884 2.11599C12.768 1.99988 12.6302 1.90778 12.4785 1.84494C12.3268 1.7821 12.1642 1.74976 12 1.74976C11.8359 1.74976 11.6733 1.7821 11.5216 1.84494C11.3699 1.90778 11.2321 1.99988 11.116 2.11599L12 2.99999ZM2.11604 11.116C1.88159 11.3504 1.74988 11.6684 1.74988 12C1.74988 12.3316 1.88159 12.6495 2.11604 12.884C2.35049 13.1184 2.66848 13.2502 3.00004 13.2502C3.33161 13.2502 3.64959 13.1184 3.88404 12.884L2.11604 11.116ZM7.00004 22.25H17V19.75H7.00004V22.25ZM20.25 19V9.99999H17.75V19H20.25ZM6.25004 19V9.99999H3.75004V19H6.25004ZM21.884 11.116L12.884 2.11599L11.116 3.88399L20.116 12.884L21.884 11.116ZM11.116 2.11599L2.11604 11.116L3.88404 12.884L12.884 3.88399L11.116 2.11599ZM17 22.25C17.862 22.25 18.6886 21.9076 19.2981 21.2981C19.9076 20.6886 20.25 19.8619 20.25 19H17.75C17.75 19.1989 17.671 19.3897 17.5304 19.5303C17.3897 19.671 17.199 19.75 17 19.75V22.25ZM7.00004 19.75C6.80113 19.75 6.61036 19.671 6.46971 19.5303C6.32906 19.3897 6.25004 19.1989 6.25004 19H3.75004C3.75004 19.8619 4.09245 20.6886 4.70195 21.2981C5.31144 21.9076 6.13809 22.25 7.00004 22.25V19.75Z"
                fill="white"
              />
            </svg>
          </span>
          <p>Home</p>
        </div>
      </div> */}
      <div className={styles.aboutUs__top}>
        <div className={styles.aboutUs__left}>
          <Image src={AboutUsImage} alt="aboutUsImage" />
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
