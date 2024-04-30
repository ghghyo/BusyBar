import React from "react";
import Image from "next/image";
import Bose from "public/images/sponsor/bose.png";
import Amazon from "public/images/sponsor/amazon.png";
import Microsoft from "public/images/sponsor/microsoft.png";
import Netflix from "public/images/sponsor/netflix.png";
import Samsung from "public/images/sponsor/samsung.png";
import Toyota from "public/images/sponsor/toyota.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const AboutSponsor = () => {
  return (
    <div className="sponsor section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="sponsor__inner"

            >
              <div className="section__header">
                <h4 className="h4">Past experiences our users have tried</h4>
              </div>
              <div className="row">
                <div className="col-12">
                  <Swiper
                    className="sponsor__slider"
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                      1400: {
                        slidesPerView: 7,
                      },
                      992: {
                        slidesPerView: 5,
                      },
                      576: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Bose} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Amazon} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Microsoft} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Netflix} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Samsung} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Toyota} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Bose} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Amazon} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Microsoft} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Netflix} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Samsung} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                        <Image src={Toyota} priority alt="Image" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSponsor;
