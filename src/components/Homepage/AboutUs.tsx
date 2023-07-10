import React, { FunctionComponent } from "react";
import styles from "../../styles/AboutUs.module.scss";
import AboutUsImage from "../../assets/images/aboutUs.png";
import Image from "next/image";

interface AboutProps {}

const AboutUs: FunctionComponent<AboutProps> = () => {
  return (
    <div className={styles.aboutUs}>
      {/* <div className={styles.float__nav__container}>
        <div className={styles.flot__nav}>
          <div className={styles.float__navDiv}>
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
          <div className={styles.float__navDiv}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_53_43)">
                  <path
                    d="M12.0002 16.0002C13.0611 16.0002 14.0785 15.5788 14.8287 14.8287C15.5788 14.0785 16.0002 13.0611 16.0002 12.0002C16.0002 10.9394 15.5788 9.92196 14.8287 9.17182C14.0785 8.42167 13.0611 8.00024 12.0002 8.00024C10.9394 8.00024 9.92196 8.42167 9.17182 9.17182C8.42167 9.92196 8.00024 10.9394 8.00024 12.0002C8.00024 13.0611 8.42167 14.0785 9.17182 14.8287C9.92196 15.5788 10.9394 16.0002 12.0002 16.0002Z"
                    fill="#D0222C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C12.3536 0 12.6928 0.140476 12.9428 0.390524C13.1929 0.640573 13.3333 0.979711 13.3333 1.33333V2.76C15.3279 3.04831 17.1758 3.97412 18.6008 5.39918C20.0259 6.82424 20.9517 8.67206 21.24 10.6667H22.6667C23.0203 10.6667 23.3594 10.8071 23.6095 11.0572C23.8595 11.3072 24 11.6464 24 12C24 12.3536 23.8595 12.6928 23.6095 12.9428C23.3594 13.1929 23.0203 13.3333 22.6667 13.3333H21.24C20.9517 15.3279 20.0259 17.1758 18.6008 18.6008C17.1758 20.0259 15.3279 20.9517 13.3333 21.24V22.6667C13.3333 23.0203 13.1929 23.3594 12.9428 23.6095C12.6928 23.8595 12.3536 24 12 24C11.6464 24 11.3072 23.8595 11.0572 23.6095C10.8071 23.3594 10.6667 23.0203 10.6667 22.6667V21.24C8.67206 20.9517 6.82424 20.0259 5.39918 18.6008C3.97412 17.1758 3.04831 15.3279 2.76 13.3333H1.33333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667H2.76C3.04851 8.67214 3.9744 6.82443 5.39941 5.39941C6.82443 3.9744 8.67214 3.04851 10.6667 2.76V1.33333C10.6667 0.979711 10.8071 0.640573 11.0572 0.390524C11.3072 0.140476 11.6464 0 12 0ZM5.33333 12C5.33333 10.2319 6.03571 8.5362 7.28596 7.28596C8.5362 6.03571 10.2319 5.33333 12 5.33333C13.7681 5.33333 15.4638 6.03571 16.714 7.28596C17.9643 8.5362 18.6667 10.2319 18.6667 12C18.6667 13.7681 17.9643 15.4638 16.714 16.714C15.4638 17.9643 13.7681 18.6667 12 18.6667C10.2319 18.6667 8.5362 17.9643 7.28596 16.714C6.03571 15.4638 5.33333 13.7681 5.33333 12Z"
                    fill="#D0222C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_53_43">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>Track item</p>
          </div>
          <div className={styles.float__navDiv}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9H11V7H13V9ZM13 11H11V17H13V11ZM12 4C7.589 4 4 7.589 4 12C4 16.411 7.589 20 12 20C16.411 20 20 16.411 20 12C20 7.589 16.411 4 12 4ZM12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z"
                  fill="#D0222C"
                />
              </svg>
            </span>
            <p>About Us</p>
          </div>
          <div className={styles.float__navDiv}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.404 22.0022 8.83083 21.6208 7.41301 20.888L3.58701 21.955C3.37355 22.0146 3.14809 22.0163 2.93373 21.9601C2.71937 21.9038 2.52382 21.7916 2.36712 21.6349C2.21041 21.4782 2.09818 21.2826 2.04194 21.0683C1.98569 20.8539 1.98744 20.6285 2.04701 20.415L3.11501 16.592C2.38036 15.1729 1.99793 13.5979 2.00001 12C2.00001 6.477 6.47701 2 12 2ZM12 3.5C9.74567 3.5 7.58366 4.39553 5.9896 5.98959C4.39554 7.58365 3.50001 9.74566 3.50001 12C3.50001 13.47 3.87301 14.883 4.57301 16.137L4.72301 16.407L3.61101 20.391L7.59801 19.279L7.86801 19.429C9.00239 20.0597 10.2661 20.4222 11.5624 20.4888C12.8586 20.5554 14.1528 20.3242 15.3458 19.8131C16.5389 19.3019 17.599 18.5244 18.445 17.54C19.2909 16.5556 19.9002 15.3906 20.2261 14.1343C20.552 12.8779 20.5858 11.5636 20.325 10.2922C20.0643 9.02073 19.5158 7.82589 18.7216 6.79927C17.9275 5.77264 16.9088 4.94152 15.7437 4.36962C14.5786 3.79773 13.2979 3.50025 12 3.5ZM8.75001 13H13.248C13.438 13.0001 13.6209 13.0722 13.7598 13.202C13.8987 13.3317 13.9831 13.5093 13.996 13.6989C14.009 13.8885 13.9495 14.0759 13.8296 14.2233C13.7097 14.3707 13.5383 14.4671 13.35 14.493L13.248 14.5H8.75001C8.55999 14.4999 8.37707 14.4278 8.23822 14.298C8.09937 14.1683 8.01493 13.9907 8.00198 13.8011C7.98903 13.6115 8.04852 13.4241 8.16844 13.2767C8.28836 13.1293 8.45976 13.0329 8.64801 13.007L8.75001 13ZM8.75001 9.5H15.255C15.4449 9.50031 15.6277 9.57267 15.7664 9.70248C15.905 9.83229 15.9893 10.0099 16.0021 10.1994C16.0149 10.3889 15.9553 10.5762 15.8354 10.7235C15.7155 10.8708 15.5442 10.9671 15.356 10.993L15.255 11H8.75001C8.55999 10.9999 8.37707 10.9278 8.23822 10.798C8.09937 10.6683 8.01493 10.4907 8.00198 10.3011C7.98903 10.1115 8.04852 9.92411 8.16844 9.7767C8.28836 9.62929 8.45976 9.5329 8.64801 9.507L8.75001 9.5Z"
                  fill="#D0222C"
                />
              </svg>
            </span>
            <p>Contact Us</p>
          </div>
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
