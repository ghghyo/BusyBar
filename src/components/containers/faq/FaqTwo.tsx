import React, { useState } from "react";

const FaqTwo = () => {
  const [activeTab, setActiveTab] = useState(false);

  const handleTab = () => {
    setActiveTab(!activeTab);
  };

  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section faq-two pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="section__header--secondary"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="row align-items-center items-gap">
                <div className="col-12 col-xl-7">
                  <h2 className="h2">frequently ask questions</h2>
                </div>
                <div className="col-12 col-xl-5">
                  <div className="faq-two__switch">
                    <p className={(activeTab ? " " : " cd") + " abc"}>
                      General Questions
                    </p>
                    <div className="switcher">
                      <input type="checkbox" id="switch" onChange={handleTab} />
                      <label htmlFor="switch">Toggle</label>
                    </div>
                    <p className={(activeTab ? " cd" : " ") + " atc"}>
                      Members & Contributors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className={(activeTab ? " " : " stactive") + " faq-tab-content"}
              id="faqOne"
            >
              <div className="accordion" id="accordion">
                <div className="row items-gap">
                  <div className="col-12 col-lg-6">
                    <div className="faq__two-left">
                      <div
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="600"
                      >
                        <h5 className="accordion-header" id="headingOne">
                          <button
                            className={
                              (imgTab == 0 ? "  " : " collapsed") +
                              " accordion-button"
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
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
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
                              (imgTab == 1 ? "  " : " collapsed") +
                              " accordion-button"
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
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
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
                              (imgTab == 2 ? "  " : " collapsed") +
                              " accordion-button"
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
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="faq__two-right">
                      <div
                        className="accordion-item content__space"
                        data-aos="fade-up"
                        data-aos-duration="600"
                      >
                        <h5 className="accordion-header" id="headingFour">
                          <button
                            className={
                              (imgTab == 3 ? "  " : " collapsed") +
                              " accordion-button"
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
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
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
                              (imgTab == 4 ? "  " : " collapsed") +
                              " accordion-button"
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
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item content__space"
                        data-aos="fade-up"
                        data-aos-duration="600"
                      >
                        <h5 className="accordion-header" id="headingSix">
                          <button
                            className={
                              (imgTab == 5 ? "  " : " collapsed") +
                              " accordion-button"
                            }
                            onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            How do I add/change my profile picture?
                          </button>
                        </h5>
                        <div
                          id="collapseSix"
                          className={`accordion-collapse collapse${
                            imgTab === 5 ? " show " : ""
                          }`}
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={(activeTab ? " stactive" : " ") + " faq-tab-content"}
              id="faqTwo"
            >
              <div className="accordion" id="memberaccordion">
                <div className="row items-gap">
                  <div className="col-12 col-lg-6">
                    <div className="faq__two-right">
                      <div
                        className="accordion-item content__space"
                        data-aos="fade-up"
                        data-aos-duration="600"
                      >
                        <h5 className="accordion-header" id="memberheadingFour">
                          <button
                            className={
                              (imgTab == 6 ? "  " : " collapsed") +
                              " accordion-button"
                            }
                            onClick={() => setImgTab(imgTab === 6 ? -1 : 6)}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#membercollapseFour"
                            aria-expanded="false"
                            aria-controls="membercollapseFour"
                          >
                            What is ChatGPT used for?
                          </button>
                        </h5>
                        <div
                          id="membercollapseFour"
                          className={`accordion-collapse collapse${
                            imgTab === 6 ? " show " : ""
                          }`}
                          aria-labelledby="memberheadingFour"
                          data-bs-parent="#memberaccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item content__space"
                        data-aos="fade-up"
                        data-aos-duration="600"
                      >
                        <h5 className="accordion-header" id="memberheadingFive">
                          <button
                            className={
                              (imgTab == 7 ? "  " : " collapsed") +
                              " accordion-button"
                            }
                            onClick={() => setImgTab(imgTab === 7 ? -1 : 7)}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#membercollapseFive"
                            aria-expanded="false"
                            aria-controls="membercollapseFive"
                          >
                            How can I support this site?
                          </button>
                        </h5>
                        <div
                          id="membercollapseFive"
                          className={`accordion-collapse collapse${
                            imgTab === 7 ? " show " : ""
                          }`}
                          aria-labelledby="memberheadingFive"
                          data-bs-parent="#memberaccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item content__space"
                        data-aos="fade-up"
                        data-aos-duration="600"
                      >
                        <h5 className="accordion-header" id="memberheadingSix">
                          <button
                            className={
                              (imgTab == 8 ? "  " : " collapsed") +
                              " accordion-button"
                            }
                            onClick={() => setImgTab(imgTab === 8 ? -1 : 8)}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#membercollapseSix"
                            aria-expanded="false"
                            aria-controls="membercollapseSix"
                          >
                            How do I add/change my profile picture?
                          </button>
                        </h5>
                        <div
                          id="membercollapseSix"
                          className={`accordion-collapse collapse${
                            imgTab === 8 ? " show " : ""
                          }`}
                          aria-labelledby="memberheadingSix"
                          data-bs-parent="#memberaccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="faq__two-left">
                      <div
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="600"
                      >
                        <h5 className="accordion-header" id="memberheadingOne">
                          <button
                            className={
                              (imgTab == 9 ? "  " : " collapsed") +
                              " accordion-button"
                            }
                            onClick={() => setImgTab(imgTab === 9 ? -1 : 9)}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#membercollapseOne"
                            aria-expanded="true"
                            aria-controls="membercollapseOne"
                          >
                            What is ChatGPT?
                          </button>
                        </h5>
                        <div
                          id="membercollapseOne"
                          className={`accordion-collapse collapse${
                            imgTab === 9 ? " show " : ""
                          }`}
                          aria-labelledby="memberheadingOne"
                          data-bs-parent="#memberaccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-duration="600"
                      >
                        <h5 className="accordion-header" id="memberheadingTwo">
                          <button
                            className={
                              (imgTab == 10 ? "  " : " collapsed") +
                              " accordion-button"
                            }
                            onClick={() => setImgTab(imgTab === 10 ? -1 : 10)}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#membercollapseTwo"
                            aria-expanded="false"
                            aria-controls="membercollapseTwo"
                          >
                            How is Chatsonic different from ChatGPT by Open AI?
                          </button>
                        </h5>
                        <div
                          id="membercollapseTwo"
                          className={`accordion-collapse collapse${
                            imgTab === 10 ? " show " : ""
                          }`}
                          aria-labelledby="memberheadingTwo"
                          data-bs-parent="#memberaccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item content__space"
                        data-aos="fade-up"
                        data-aos-duration="600"
                      >
                        <h5
                          className="accordion-header"
                          id="memberheadingThree"
                        >
                          <button
                            className={
                              (imgTab == 11 ? "  " : " collapsed") +
                              " accordion-button"
                            }
                            onClick={() => setImgTab(imgTab === 11 ? -1 : 11)}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#membercollapseThree"
                            aria-expanded="false"
                            aria-controls="membercollapseThree"
                          >
                            What format are the files in?
                          </button>
                        </h5>
                        <div
                          id="membercollapseThree"
                          className={`accordion-collapse collapse${
                            imgTab === 11 ? " show " : ""
                          }`}
                          aria-labelledby="memberheadingThree"
                          data-bs-parent="#memberaccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              analyses the speaker&apos;s face and gaze during a
                              video conversation to maintain eye contact before
                              changing the camera position.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default FaqTwo;
