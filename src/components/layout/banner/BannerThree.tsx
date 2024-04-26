import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThumbOne from "public/images/banner/one.png";
import ThumbTwo from "public/images/banner/two.png";
import ThumbThree from "public/images/banner/three.png";
import bannerThreeThumb from "public/images/banner/banner-three-thumb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

const BannerThree = () => {
  return (
    <section className="banner-three">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-three__inner bg-img">
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
                  el: ".banner-three-pagination",
                  clickable: true,
                }}
                className="banner-three-slider"
              >
                <SwiperSlide>
                  <div className="banner-three__single">
                    <div className="row items-gap align-items-center">
                      <div className="col-12 col-xl-6">
                        <div className="banner-three__content">
                          <p>Fully automatic, then go far beyond the AI.</p>
                          <h1 className="h2-light">
                            Remove Background From Image Using Artificial
                            Intelligence
                          </h1>
                          <div className="section__content-cta">
                            <Link
                              href="/sign-in"
                              className="btn btn--ocotonary"
                            >
                              start remove now
                            </Link>
                            <Link href="/use-case" className="try-this">
                              <span className="thumb">
                                <Image src={ThumbOne} alt="Image" />
                                <Image src={ThumbTwo} alt="Image" />
                                <Image src={ThumbThree} alt="Image" />
                              </span>
                              <span className="content">
                                <span> No image?</span>
                                <span> Try one of these</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6">
                        <div className="banner-three__thumb">
                          <Image src={bannerThreeThumb} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="banner-three__single">
                    <div className="row items-gap align-items-center">
                      <div className="col-12 col-xl-6">
                        <div className="banner-three__content">
                          <p>Fully automatic, then go far beyond the AI.</p>
                          <h1 className="h2-light">
                            Remove Background From Image Using Artificial
                            Intelligence
                          </h1>
                          <div className="section__content-cta">
                            <Link
                              href="/sign-in"
                              className="btn btn--ocotonary"
                            >
                              start remove now
                            </Link>
                            <Link href="/use-case" className="try-this">
                              <span className="thumb">
                                <Image src={ThumbOne} alt="Image" />
                                <Image src={ThumbTwo} alt="Image" />
                                <Image src={ThumbThree} alt="Image" />
                              </span>
                              <span className="content">
                                <span> No image?</span>
                                <span> Try one of these</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6">
                        <div className="banner-three__thumb">
                          <Image src={bannerThreeThumb} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="banner-three__single">
                    <div className="row items-gap align-items-center">
                      <div className="col-12 col-xl-6">
                        <div className="banner-three__content">
                          <p>Fully automatic, then go far beyond the AI.</p>
                          <h1 className="h2-light">
                            Remove Background From Image Using Artificial
                            Intelligence
                          </h1>
                          <div className="section__content-cta">
                            <Link
                              href="/sign-in"
                              className="btn btn--ocotonary"
                            >
                              start remove now
                            </Link>
                            <Link href="/use-case" className="try-this">
                              <span className="thumb">
                                <Image src={ThumbOne} alt="Image" />
                                <Image src={ThumbTwo} alt="Image" />
                                <Image src={ThumbThree} alt="Image" />
                              </span>
                              <span className="content">
                                <span> No image?</span>
                                <span> Try one of these</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6">
                        <div className="banner-three__thumb">
                          <Image src={bannerThreeThumb} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="cmn-pagination banner-three-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
