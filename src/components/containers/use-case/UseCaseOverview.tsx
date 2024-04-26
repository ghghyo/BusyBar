import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/use-case/one.png";
import two from "public/images/use-case/two.png";
import three from "public/images/use-case/three.png";
import four from "public/images/use-case/four.png";

const UseCaseOverview = () => {
  return (
    <section className="section use-case use-case-alt">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">Top related use case</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Image src={one} alt="Image" />
              </div>
              <div className="content">
                <h5 className="h5">
                  <Link href="/use-case-single">Website Copy & SEO</Link>
                </h5>
                <p>
                  The advanced AI technology makes our background eraser tool
                  easy to use. The image.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="thumb">
                <Image src={two} alt="Image" />
              </div>
              <div className="content">
                <h5 className="h5">
                  <Link href="/use-case-single">Social Media & Ads</Link>
                </h5>
                <p>
                  The advanced AI technology makes our background eraser tool
                  easy to use. The image.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
              ddata-aos-delay="500"
            >
              <div className="thumb">
                <Image src={three} alt="Image" />
              </div>
              <div className="content">
                <h5 className="h5">
                  <Link href="/use-case-single">Blog Section Writing</Link>
                </h5>
                <p>
                  The advanced AI technology makes our background eraser tool
                  easy to use. The image.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="800"
            >
              <div className="thumb">
                <Image src={four} alt="Image" />
              </div>
              <div className="content">
                <h5 className="h5">
                  <Link href="/use-case-single">eCommerce Copy</Link>
                </h5>
                <p>
                  The advanced AI technology makes our background eraser tool
                  easy to use. The image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseOverview;
