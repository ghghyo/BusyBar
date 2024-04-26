import React from "react";
import Link from "next/link";

const PricingOne = () => {
  return (
    <section className="section pricing-two bg-img">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <h2 className="h2">Ready to Get Started?</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          <div className="col-12 col-md-6 col-lg-6 col-xxl-3">
            <div
              className="pricing-two__single"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <h5 className="h5">Starter</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">$19</h2>
                  <p>paid per month</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>5 User seats
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  50,000 words per month
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  70+ AI writing tools
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  100+ Copywriting tool
                </li>
              </ul>
              <hr />
              <Link href="/register" className="btn btn--septenary">
                Start for free
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xxl-3">
            <div
              className="pricing-two__single"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="200"
            >
              <h5 className="h5 yel">Basic</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">$39</h2>
                  <p>paid per month</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>5 User seats
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  50,000 words per month
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  70+ AI writing tools
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  100+ Copywriting tool
                </li>
              </ul>
              <hr />
              <Link href="/register" className="btn btn--septenary">
                choose a plan
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xxl-3">
            <div
              className="pricing-two__single pricing-two__single--alt"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="400"
            >
              <h5 className="h5 pri">Pro</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">$59</h2>
                  <p>paid per month</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>5 User seats
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  50,000 words per month
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  70+ AI writing tools
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  100+ Copywriting tool
                </li>
              </ul>
              <hr />
              <Link href="/register" className="btn btn--septenary">
                choose a plan
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xxl-3">
            <div
              className="pricing-two__single"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="600"
            >
              <h5 className="h5 tri">Elite</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">$79</h2>
                  <p>paid per month</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>5 User seats
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  50,000 words per month
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  70+ AI writing tools
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  100+ Copywriting tool
                </li>
              </ul>
              <hr />
              <Link href="/register" className="btn btn--septenary">
                choose a plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingOne;
