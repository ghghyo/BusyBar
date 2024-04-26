import React, { useState } from "react";
import Image from "next/image";
import Thumb from "public/images/generate/one.png";
import Anime from "public/images/generate/anime.png";

const GenerateOne = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="section generate pb-0">
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-lg-6 col-xl-5">
            <div
              className="generate__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="section__header text-start">
                <h2 className="h2">
                  Generate content in seconds using
                  <span className="grd">Tech AI</span>
                </h2>
              </div>
              <div>
                <div
                  className={`generate__content-btn ${
                    activeTabIndex === 0 ? "generate__content-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(0)}
                >
                  <div className="thumb">
                    <i className="tech-pen"></i>
                  </div>
                  <div className="content">
                    <h5 className="h5">blog article</h5>
                    <p>
                      create unique and well organized full length articles from
                      start to finish
                    </p>
                  </div>
                </div>
                <div
                  className={`generate__content-btn ${
                    activeTabIndex === 1 ? "generate__content-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  <div className="thumb">
                    <i className="tech-cart"></i>
                  </div>
                  <div className="content">
                    <h5 className="h5">eCommerce content</h5>
                    <p>
                      create unique and well organized full length articles from
                      start to finish
                    </p>
                  </div>
                </div>
                <div
                  className={`generate__content-btn ${
                    activeTabIndex === 2 ? "generate__content-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  <div className="thumb">
                    <i className="tech-mike"></i>
                  </div>
                  <div className="content">
                    <h5 className="h5">paids add & social media</h5>
                    <p>
                      create unique and well organized full length articles from
                      start to finish
                    </p>
                  </div>
                </div>
                <div
                  className={`generate__content-btn ${
                    activeTabIndex === 3 ? "generate__content-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(3)}
                >
                  <div className="thumb">
                    <i className="tech-globe"></i>
                  </div>
                  <div className="content">
                    <h5 className="h5">Website Content</h5>
                    <p>
                      create unique and well organized full length articles from
                      start to finish
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div
              className="generate__thumb"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div
                className={`tab-content ${
                  activeTabIndex === 0 ? "active" : ""
                }`}
              >
                <Image src={Thumb} alt="image" />
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 1 ? "active" : ""
                }`}
              >
                <Image src={Thumb} alt="image" />
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 2 ? "active" : ""
                }`}
              >
                <Image src={Thumb} alt="image" />
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 3 ? "active" : ""
                }`}
              >
                <Image src={Thumb} alt="image" />
              </div>
              <div className="anime">
                <Image src={Anime} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateOne;
