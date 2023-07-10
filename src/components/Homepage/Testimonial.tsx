import React, { FunctionComponent, useEffect } from "react";
import styles from "../../styles/AboutUs.module.scss";
import TestimonialImage from "../../assets/images/testimonial.png";
import Image from "next/image";
interface TestimonialProps {}

const Testimonial: FunctionComponent<TestimonialProps> = () => {
  const [seed, setSeed] = React.useState<number | string>("");
  const seedFunc = () => {
    let randomNumber = Math.floor(Math.random() * 5000);
    // console.log(randomNumber);
    return randomNumber;
  };
  console.log(seedFunc);

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
              src={`https://avatars.dicebear.com/api/human/%20%20${seedFunc()}.svg`}
              alt="testimonialImage"
              width={45}
              height={45}
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            “Highly recommends BabyBug Express LLC for a smooth and efficient
            move, praising their careful handling of household goods.”
          </p>
          <span>Sarah Johnson:</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={`https://avatars.dicebear.com/api/human/%20%20${seedFunc()}.svg`}
              alt="testimonialImage"
              width={45}
              height={45}
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            “Expresses gratitude for BabyBug Express LLC's exceptional service,
            including accurate quotes and helpful driver assistance at loading
            and offloading dock.”
          </p>
          <span>Michael Thompson </span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={`https://avatars.dicebear.com/api/human/%20%20${seedFunc()}.svg`}
              alt="testimonialImage"
              width={45}
              height={45}
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            "Appreciates BabyBug Express LLC for making her move stress-free,
            highlighting their attention to detail and friendly staff.”
          </p>
          <span>Emily Davis</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={`https://avatars.dicebear.com/api/human/%20%20${seedFunc()}.svg`}
              alt="testimonialImage"
              width={45}
              height={45}
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            “Highly recommends BabyBug Express LLC for their reliable moving
            services and praises their prompt and careful handling of
            belongings”
          </p>
          <span>David Anderson</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={`https://avatars.dicebear.com/api/human/%20%20${seedFunc()}.svg`}
              alt="testimonialImage"
              width={45}
              height={45}
              className="testimonial__image"
            />
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>
            “Highly satisfied with BabyBug Express LLC's reliable and efficient
            handling of household goods, praising their friendly and
            professional team. ”
          </p>
          <span>Jessica Lewis</span>
          <div className={styles.testimonial__image__container}>
            <Image
              src={`https://avatars.dicebear.com/api/human/%20%20${seedFunc()}.svg`}
              alt="testimonialImage"
              width={45}
              height={45}
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
