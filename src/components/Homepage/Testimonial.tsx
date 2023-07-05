import React, { FunctionComponent } from "react";
import styles from "../../styles/AboutUs.module.scss";
import TestimonialImage from "../../assets/images/testimonial.png";
import Image from "next/image";
interface TestimonialProps {}

const Testimonial: FunctionComponent<TestimonialProps> = () => {
  return (
    <div className={styles.testimonials__container}>
      <p className={styles.section__title}>TESTIMONIALS</p>
      <h2>WHAT PEOPLE SAY ABOUT US</h2>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <p>
            “Babybug is great! From moving household goods to providing accurate
            quotes, we aim to make your experience hassle-free and efficient.”
          </p>
          <span>Caroline Jones</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={TestimonialImage}
              alt="testimonialImage"
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            “Babybug is great! From moving household goods to providing accurate
            quotes, we aim to make your experience hassle-free and efficient.”
          </p>
          <span>Caroline Jones</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={TestimonialImage}
              alt="testimonialImage"
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            “Babybug is great! From moving household goods to providing accurate
            quotes, we aim to make your experience hassle-free and efficient.”
          </p>
          <span>Caroline Jones</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={TestimonialImage}
              alt="testimonialImage"
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            “Babybug is great! From moving household goods to providing accurate
            quotes, we aim to make your experience hassle-free and efficient.”
          </p>
          <span>Caroline Jones</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={TestimonialImage}
              alt="testimonialImage"
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            “Babybug is great! From moving household goods to providing accurate
            quotes, we aim to make your experience hassle-free and efficient.”
          </p>
          <span>Caroline Jones</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={TestimonialImage}
              alt="testimonialImage"
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            “Babybug is great! From moving household goods to providing accurate
            quotes, we aim to make your experience hassle-free and efficient.”
          </p>
          <span>Caroline Jones</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={TestimonialImage}
              alt="testimonialImage"
              className="testimonial__image"
            />
          </div>
        </div>
      </div>
      <div className={styles.moveTestimonial}>
        <span className={styles.move}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon-park-outline:left">
              <path
                id="Vector"
                d="M10.9791 12.75L6.72913 8.5L10.9791 4.25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </span>
        <span className={styles.move}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.02087 12.75L10.2709 8.5L6.02087 4.25"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
