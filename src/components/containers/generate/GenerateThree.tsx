import React, { useState } from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const GenerateThree = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="section generate generate-two generate-three pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">best tech AI Use Cases</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          <div className="col-12 col-lg-6 col-xl-5">
            <div
              className="generate__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div
                className={`generate__content-btn ${
                  activeTabIndex === 0 ? "generate__content-btn-active" : ""
                }`}
                onClick={() => handleTabClick(0)}
              >
                <div className="content">
                  <h5 className="h5">For Ecommerce</h5>
                  <p>
                    Drop the complex brushes and layers. Use techAI to remove
                    background from image in one click.
                  </p>
                  <p>
                    Drop the complex brushes and layers. Use techAI to remove
                    background from image in one click.
                  </p>
                </div>
              </div>
              <div
                className={`generate__content-btn ${
                  activeTabIndex === 1 ? "generate__content-btn-active" : ""
                }`}
                onClick={() => handleTabClick(1)}
              >
                <div className="content">
                  <h5 className="h5">For Car Dealerships</h5>
                  <p>
                    Drop the complex brushes and layers. Use techAI to remove
                    background from image in one click.
                  </p>
                  <p>
                    Drop the complex brushes and layers. Use techAI to remove
                    background from image in one click.
                  </p>
                </div>
              </div>
              <div
                className={`generate__content-btn ${
                  activeTabIndex === 2 ? "generate__content-btn-active" : ""
                }`}
                onClick={() => handleTabClick(2)}
              >
                <div className="content">
                  <h5 className="h5">For ID Photo Maker</h5>
                  <p>
                    Drop the complex brushes and layers. Use techAI to remove
                    background from image in one click.
                  </p>
                  <p>
                    Drop the complex brushes and layers. Use techAI to remove
                    background from image in one click.
                  </p>
                </div>
              </div>
              <div
                className={`generate__content-btn ${
                  activeTabIndex === 3 ? "generate__content-btn-active" : ""
                }`}
                onClick={() => handleTabClick(3)}
              >
                <div className="content">
                  <h5 className="h5">For Real-Estate</h5>
                  <p>
                    Drop the complex brushes and layers. Use techAI to remove
                    background from image in one click.
                  </p>
                  <p>
                    Drop the complex brushes and layers. Use techAI to remove
                    background from image in one click.
                  </p>
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
                <div className="rangu rangu-two">
                  <ReactCompareSlider
                    position={50}
                    itemOne={
                      <ReactCompareSliderImage
                        src="/images/after/two-after.png"
                        alt="Image 1"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/images/after/two-before.png"
                        alt="Image 2"
                      />
                    }
                  />
                </div>
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 1 ? "active" : ""
                }`}
              >
                <div className="rangu rangu-four">
                  <ReactCompareSlider
                    position={50}
                    itemOne={
                      <ReactCompareSliderImage
                        src="/images/after/three-after.png"
                        alt="Image 1"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/images/after/three-before.png"
                        alt="Image 2"
                      />
                    }
                  />
                </div>
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 2 ? "active" : ""
                }`}
              >
                <div className="rangu rangu-three">
                  <ReactCompareSlider
                    position={50}
                    itemOne={
                      <ReactCompareSliderImage
                        src="/images/after/one-after.png"
                        alt="Image 1"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/images/after/one-before.png"
                        alt="Image 2"
                      />
                    }
                  />
                </div>
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 3 ? "active" : ""
                }`}
              >
                <div className="rangu rangu-one">
                  <ReactCompareSlider
                    position={50}
                    itemOne={
                      <ReactCompareSliderImage
                        src="/images/after/four-after.png"
                        alt="Image 1"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/images/after/four-before.png"
                        alt="Image 2"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateThree;
