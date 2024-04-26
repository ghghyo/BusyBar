import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

const UseCaseSlider = () => {
  return (
    <section className="section case-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center items-gap">
                <div className="col-12 col-lg-5">
                  <h2 className="h2" data-aos="fade-up" data-aos-duration="600">
                    tech AI Use Cases
                  </h2>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="case-pagination cmn-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="case__slider">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                slidesPerGroup={1}
                freeMode={true}
                speed={1200}
                loop={true}
                roundLengths={true}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  el: ".case-pagination",
                  clickable: true,
                }}
                className="case__slider"
                breakpoints={{
                  1400: {
                    slidesPerGroup: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="case__slider-single case-one-in">
                    <div className="thumb">
                      <i className="tech-camera"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">Videos</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-two-in">
                    <div className="thumb">
                      <i className="tech-cap"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">E-learning</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-three-in">
                    <div className="thumb">
                      <i className="tech-plug"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">tech AI API</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-four-in">
                    <div className="thumb">
                      <i className="tech-speaker"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">IVR Systems</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-five-in">
                    <div className="thumb">
                      <i className="tech-headphone"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">Audio Articles</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-one-in">
                    <div className="thumb">
                      <i className="tech-camera"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">Videos</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-two-in">
                    <div className="thumb">
                      <i className="tech-cap"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">E-learning</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-three-in">
                    <div className="thumb">
                      <i className="tech-plug"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">tech AI API</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-four-in">
                    <div className="thumb">
                      <i className="tech-speaker"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">IVR Systems</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-five-in">
                    <div className="thumb">
                      <i className="tech-headphone"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">Audio Articles</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-two-in">
                    <div className="thumb">
                      <i className="tech-cap"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">E-learning</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-two-in">
                    <div className="thumb">
                      <i className="tech-cap"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">E-learning</h5>
                      <p>
                        Clear, consistent, and professional voices for
                        marketing, explainer, product, and YouTube videos.
                      </p>
                      <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSlider;
