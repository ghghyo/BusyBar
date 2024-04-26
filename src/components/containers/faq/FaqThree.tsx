import React, { useState } from "react";

const FaqThree = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section faq pb-0 faq-three">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">FAQs About Removing Picture Background</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="accordion" id="accordion">
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                <h5 className="accordion-header" id="headingOne">
                  <button
                    className={
                      (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is ChatGPT?
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse${
                    imgTab === 0 ? " show " : ""
                  }`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      analyses the speaker&apos;s face and gaze during a video
                      conversation to maintain eye contact before changing the
                      camera position. io at a later time. Clear, consistent,
                      and professional voices for marketing, explainer, product,
                      and YouTube videos.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h5 className="accordion-header" id="headingTwo">
                  <button
                    className={
                      (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How is Chatsonic different from ChatGPT by Open AI?
                  </button>
                </h5>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse${
                    imgTab === 1 ? " show " : ""
                  }`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      analyses the speaker&apos;s face and gaze during a video
                      conversation to maintain eye contact before changing the
                      camera position. io at a later time. Clear, consistent,
                      and professional voices for marketing, explainer, product,
                      and YouTube videos.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item content__space"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h5 className="accordion-header" id="headingThree">
                  <button
                    className={
                      (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What format are the files in?
                  </button>
                </h5>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse${
                    imgTab === 2 ? " show " : ""
                  }`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      analyses the speaker&apos;s face and gaze during a video
                      conversation to maintain eye contact before changing the
                      camera position. io at a later time. Clear, consistent,
                      and professional voices for marketing, explainer, product,
                      and YouTube videos.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item content__space"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className={
                      (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What is ChatGPT used for?
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse${
                    imgTab === 3 ? " show " : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      analyses the speaker&apos;s face and gaze during a video
                      conversation to maintain eye contact before changing the
                      camera position. io at a later time. Clear, consistent,
                      and professional voices for marketing, explainer, product,
                      and YouTube videos.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item content__space"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h5 className="accordion-header" id="headingFive">
                  <button
                    className={
                      (imgTab == 4 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How can I support this site?
                  </button>
                </h5>
                <div
                  id="collapseFive"
                  className={`accordion-collapse collapse${
                    imgTab === 4 ? " show " : ""
                  }`}
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      analyses the speaker&apos;s face and gaze during a video
                      conversation to maintain eye contact before changing the
                      camera position. io at a later time. Clear, consistent,
                      and professional voices for marketing, explainer, product,
                      and YouTube videos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqThree;
