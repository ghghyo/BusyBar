import React from "react";
import Image from "next/image";
import One from "public/images/icons/overview-one.png";
import Two from "public/images/icons/overview-two.png";
import Three from "public/images/icons/overview-three.png";
import Four from "public/images/icons/overview-four.png";

const OverviewOne = () => {
  return (
    <div className="overview">
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="overview__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Image src={One} priority alt="Image" />
              <p className="h6">Text-to-Speech</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="overview__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <Image src={Two} priority alt="Image" />
              <p className="h6">Speech-to-Speech</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="overview__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <Image src={Three} priority alt="Image" />
              <p className="h6">Neural Editing</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="overview__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="800"
            >
              <Image src={Four} priority alt="Image" />
              <p className="h6">Language Dubbing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewOne;
