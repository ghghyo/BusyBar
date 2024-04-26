import React from "react";
import Link from "next/link";

const Tools = () => {
  return (
    <section className="section tools">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">Other AI Writing Tools</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="tools__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <i className="tech-tool-one"></i>
              </div>
              <h5 className="h5">
                <Link href="/use-case-single">
                  TechAI ChatGPT API
                  <i className="tech-arrow-top"> </i>
                </Link>
              </h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="tools__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <i className="tech-tool-two"></i>
              </div>
              <h5 className="h5">
                <Link href="/use-case-single">
                  AI text geerator tool
                  <i className="tech-arrow-top"> </i>
                </Link>
              </h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="tools__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <i className="tech-tool-three"></i>
              </div>
              <h5 className="h5">
                <Link href="/use-case-single">
                  Paraphrasing tool
                  <i className="tech-arrow-top"> </i>
                </Link>
              </h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="tools__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="thumb">
                <i className="tech-tool-four"></i>
              </div>
              <h5 className="h5">
                <Link href="/use-case-single">
                  text summarizer
                  <i className="tech-arrow-top"> </i>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
