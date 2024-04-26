import React from "react";
import Image from "next/image";
import IconOne from "public/images/review/icon-one.png";
import IconTwo from "public/images/review/icon-two.png";
import IconThree from "public/images/review/icon-three.png";
import ThumbOne from "public/images/review/one.png";
import ThumbTwo from "public/images/review/two.png";
import ThumbThree from "public/images/review/three.png";

const TestimonialOneLight = () => {
  return (
    <section className="section review review-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">our Customer Reviews</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          <div className="col-12 col-lg-6">
            <div
              className="review__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconOne} alt="Image" priority />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbOne} alt="Image" priority />
                </div>
                <div className="content">
                  <p className="h6">Rex A. Munoz</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="review__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconTwo} alt="Image" priority />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbTwo} alt="Image" priority />
                </div>
                <div className="content">
                  <p className="h6">Nicholas Natteau</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="review__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconThree} alt="Image" priority />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbTwo} alt="Image" priority />
                </div>
                <div className="content">
                  <p className="h6">Jeremy Moser</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="review__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconOne} alt="Image" priority />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbThree} alt="Image" priority />
                </div>
                <div className="content">
                  <p className="h6">Angela R. Nolan</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOneLight;
