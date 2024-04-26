import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ReviewIconOne from "public/images/review/icon-one.png";
import ReviewIconTwo from "public/images/review/icon-two.png";
import ReviewIconThree from "public/images/review/icon-three.png";
import ReviewThumb from "public/images/review/thumb.png";
import ReviewImageOne from "public/images/review/one.png";
import ReviewImageTwo from "public/images/review/two.png";
import ReviewImageThree from "public/images/review/three.png";

const TestimonialThree = () => {
  const sliderRef = useRef<any>();

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          vertical: false,
        },
      },
    ],
  };

  return (
    <section className="section testimonial-three review">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <h2 className="h2">our Customer Reviews</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div className="testimonial-three__slider">
              <Slider ref={sliderRef} {...settings}>
                <div className="review__single">
                  <div className="review-head">
                    <div className="review__icons">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <Image src={ReviewIconOne} alt="Image" />
                  </div>
                  <div className="review-content">
                    <p className="fw-7">
                      tech ai saves us thousands of dollars a week. We create
                      content briefs and write 50-100 unique SEO-driven pieces
                      per month. With tech.ai, we now craft briefs, outlines,
                      and full first.
                    </p>
                  </div>
                  <div className="review-meta">
                    <div className="thumb">
                      <Image src={ReviewImageOne} alt="Image" />
                    </div>
                    <div className="content">
                      <p className="h6">Rex A. Munoz</p>
                      <p>CEO, uSERP</p>
                    </div>
                  </div>
                </div>
                <div className="review__single">
                  <div className="review-head">
                    <div className="review__icons">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <Image src={ReviewIconTwo} alt="Image" />
                  </div>
                  <div className="review-content">
                    <p className="fw-7">
                      tech ai saves us thousands of dollars a week. We create
                      content briefs and write 50-100 unique SEO-driven pieces
                      per month. With tech.ai, we now craft briefs, outlines,
                      and full first.
                    </p>
                  </div>
                  <div className="review-meta">
                    <div className="thumb">
                      <Image src={ReviewImageTwo} alt="Image" />
                    </div>
                    <div className="content">
                      <p className="h6">Nicholas Natteau</p>
                      <p>CEO, uSERP</p>
                    </div>
                  </div>
                </div>
                <div className="review__single">
                  <div className="review-head">
                    <div className="review__icons">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <Image src={ReviewIconThree} alt="Image" />
                  </div>
                  <div className="review-content">
                    <p className="fw-7">
                      tech ai saves us thousands of dollars a week. We create
                      content briefs and write 50-100 unique SEO-driven pieces
                      per month. With tech.ai, we now craft briefs, outlines,
                      and full first.
                    </p>
                  </div>
                  <div className="review-meta">
                    <div className="thumb">
                      <Image src={ReviewImageThree} alt="Image" />
                    </div>
                    <div className="content">
                      <p className="h6">Jeremy Moser</p>
                      <p>CEO, uSERP</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="testimonial-three-thumb">
              <Image src={ReviewThumb} alt="Image" />
              <div className="testimonial-switch">
                <button
                  className="prev-testimonial-three"
                  aria-label="previous slider"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <i className="fa-solid fa-angle-up"></i>
                </button>
                <button
                  className="next-testimonial-three"
                  aria-label="next slider"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialThree;
