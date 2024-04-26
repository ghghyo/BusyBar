import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import VoiceSliderData from "./voice-slider-data";
import VoiceSliderItem from "./VoiceSliderItem";

const VoiceSlider = () => {
  return (
    <section className="section voice">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center items-gap">
                <div className="col-12 col-lg-8">
                  <h2 className="h2" data-aos="fade-up" data-aos-duration="600">
                    There&apos;s a voice for every need
                  </h2>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="cmn-pagination voice-pagination"></div>
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
                el: ".voice-pagination",
                clickable: true,
              }}
              className="voice__slider"
              breakpoints={{
                425: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },

                992: {
                  slidesPerView: 4,
                  slidesPerGroup: 2,
                },
                1400: {
                  slidesPerView: 6,
                  slidesPerGroup: 3,
                },
              }}
            >
              {VoiceSliderData.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <VoiceSliderItem
                      Vbg={item.bg}
                      Vimg={item.img}
                      Vtitle={item.title}
                      Vaudio={item.audio}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSlider;
