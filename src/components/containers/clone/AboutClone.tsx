import React from "react";
import Link from "next/link";
import Image from "next/image";
import Thumb from "public/images/about-thumb.png";

const AboutClone = () => {
  return (
    <section className="section clone about-main">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div
              className="about__thumb"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Image src={Thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="clone__content section__content"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h2 className="h2">Enabling Visual AI for Everyone</h2>
              <div className="paragraph">
                <p className="fw-5 text-lg">
                  Resemble&apos;s AI voice generator lets you create realistic
                  human-like voiceovers in seconds.
                </p>
                <p>
                  By making complicated tech simple, we strive to enable
                  individuals and businesses of all sizes to benefit from the
                  recent advances in Visual AI. Our tools simplify and
                  accelerate workflows, foster creativity, and enable others to
                  create new products.
                </p>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Emotions
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Speech-To-Speech
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Localize
                </li>
              </ul>
              <div className="tour__content-cta">
                <div className="trust">
                  <div className="review">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="fw-7">Rated Excellent on Trustpilot</p>
                </div>
                <div className="action">
                  <Link href="/contact-us" className="btn btn--primary">
                    request A Demo - its free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClone;
