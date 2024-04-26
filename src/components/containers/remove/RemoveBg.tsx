import React from "react";
import Image from "next/image";
import One from "public/images/remove/one.png";
import Two from "public/images/remove/two.png";
import Three from "public/images/remove/three.png";

const RemoveBg = () => {
  return (
    <section className="section remove-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">How to Remove Background from tech AI</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap-two">
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="remove-bg-single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Image src={One} alt="Image" />
              </div>
              <h5 className="h5">Upload Your Image</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="remove-bg-single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Image src={Two} alt="Image" />
              </div>
              <h5 className="h5">Auto Remove Background</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="remove-bg-single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="thumb">
                <Image src={Three} alt="Image" />
              </div>
              <h5 className="h5">Download PNG Image</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoveBg;
