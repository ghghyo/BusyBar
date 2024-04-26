import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/use-case/one.png";
import two from "public/images/use-case/two.png";
import three from "public/images/use-case/three.png";
import four from "public/images/use-case/four.png";
import five from "public/images/use-case/five.png";
import six from "public/images/use-case/six.png";
import seven from "public/images/use-case/seven.png";
import eight from "public/images/use-case/eight.png";

const UseCaseMain = () => {
  return (
    <section className="section use-case">
      <div className="container">
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
                  <Link href="/use-case-single"> Website Copy & SEO</Link>
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
              data-aos-delay="500"
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
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="thumb">
                <Image src={five} alt="Image" />
              </div>
              <div className="content">
                <h5 className="h5">
                  <Link href="/use-case-single">Digital Ad Copy</Link>
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
              data-aos-delay="500"
            >
              <div className="thumb">
                <Image src={six} alt="Image" />
              </div>
              <div className="content">
                <h5 className="h5">
                  <Link href="/use-case-single">Job Description</Link>
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
                <Image src={seven} alt="Image" />
              </div>
              <div className="content">
                <h5 className="h5">
                  <Link href="/use-case-single">Testimonial & Review</Link>
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
                <Image src={eight} alt="Image" />
              </div>
              <div className="content">
                <h5 className="h5">
                  <Link href="/use-case-single">Keywords Generator</Link>
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

export default UseCaseMain;
