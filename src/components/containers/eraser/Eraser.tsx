import React from "react";
import Image from "next/image";
import One from "public/images/eraser/one.png";
import Two from "public/images/eraser/two.png";
import Three from "public/images/eraser/three.png";
import Four from "public/images/eraser/four.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

const Eraser = () => {
  return (
    <section className="section eraser pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center items-gap">
                <div className="col-12 col-lg-8 col-xl-6">
                  <h2 className="h2" data-aos="fade-up" data-aos-duration="600">
                    Why tech AI Background Eraser Will Impress You?
                  </h2>
                </div>
                <div className="col-12 col-lg-4 col-xl-6">
                  <div className="cmn-pagination eraser-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              speed={1200}
              loop={true}
              roundLengths={true}
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                el: ".eraser-pagination",
                clickable: true,
              }}
              className="eraser__slider"
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },

                992: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                1400: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={One} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Simple to Use</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={Two} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Highly Accurate</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={Three} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Design Effectively</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={Four} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Share Easily</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={One} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Simple to Use</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={Two} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Highly Accurate</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={Three} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Design Effectively</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={Four} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Share Easily</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={One} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Simple to Use</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={Two} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Highly Accurate</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={Three} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Design Effectively</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eraser__slider-item">
                  <div className="thumb">
                    <Image src={Four} alt="Image" />
                  </div>
                  <div className="content">
                    <h5 className="h5">Share Easily</h5>
                    <p>
                      The advanced AI technology makes our background eraser
                      tool easy to use. The image.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="eraser-cta">
              <div className="er-inner">
                <button
                  aria-label="upload image"
                  className="btn btn--ocotonary"
                >
                  <i className="fa-solid fa-plus"></i>
                  upload your image
                </button>
                <input type="file" name="upload-image" id="uploadImage" />
              </div>
              <p>or drop an image file (.jpeg, .png) (Max size 1Mb)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eraser;
