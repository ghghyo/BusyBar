import React from "react";
import Image from "next/image";
import Link from "next/link";
import Frame from "public/images/frame-two.png";

const Tour = () => {
  return (
    <section className="section tour">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">Take a quick tour of techAI</h2>
              <p className="max-5">
                Watch this video to learn all about our AI voice technology and
                how to use it in your products
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="tour__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <video muted loop autoPlay controls>
                <source src="/images/video/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="tour__content-cta"
              data-aos="fade-up"
              data-aos-duration="600"
            >
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
                <Link href="/register" className="btn btn--primary">
                  start free now
                </Link>
              </div>
              <Image src={Frame} alt="Image" priority className="frame" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
