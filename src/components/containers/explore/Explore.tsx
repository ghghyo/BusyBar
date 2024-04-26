import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThumbOne from "public/images/blog/one.png";
import ThumbTwo from "public/images/blog/two.png";
import ThumbThree from "public/images/blog/three.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

const Explore = () => {
  return (
    <section className="section explore">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center items-gap">
                <div className="col-12 col-lg-8">
                  <h2 className="h2" data-aos="fade-up" data-aos-duration="600">
                    Explore More AI Products from tech AI
                  </h2>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="cmn-pagination explore-pagination"></div>
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
                el: ".explore-pagination",
                clickable: true,
              }}
              className="explore__slider"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className="explore__slider-single">
                  <div className="thumb">
                    <Link href="/blog-single">
                      <Image src={ThumbOne} alt="Image" />
                    </Link>
                  </div>
                  <div className="content">
                    <h5 className="h5">
                      <Link href="/blog-single">Free Video Customizer</Link>
                    </h5>
                    <p>
                      Convert videos to visually striking cartoons in only a
                      couple of clicks. 100% Automatically and FREE! Animate
                      your video now!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="explore__slider-single">
                  <div className="thumb">
                    <Link href="/blog-single">
                      <Image src={ThumbTwo} alt="Image" />
                    </Link>
                  </div>
                  <div className="content">
                    <h5 className="h5">
                      <Link href="/blog-single">AI image compressed</Link>
                    </h5>
                    <p>
                      Convert videos to visually striking cartoons in only a
                      couple of clicks. 100% Automatically and FREE! Animate
                      your video now!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="explore__slider-single">
                  <div className="thumb">
                    <Link href="/blog-single">
                      <Image src={ThumbThree} alt="Image" />
                    </Link>
                  </div>
                  <div className="content">
                    <h5 className="h5">
                      <Link href="/blog-single">video object remover</Link>
                    </h5>
                    <p>
                      Convert videos to visually striking cartoons in only a
                      couple of clicks. 100% Automatically and FREE! Animate
                      your video now!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="explore__slider-single">
                  <div className="thumb">
                    <Link href="/blog-single">
                      <Image src={ThumbOne} alt="Image" />
                    </Link>
                  </div>
                  <div className="content">
                    <h5 className="h5">
                      <Link href="/blog-single">Free Video Customizer</Link>
                    </h5>
                    <p>
                      Convert videos to visually striking cartoons in only a
                      couple of clicks. 100% Automatically and FREE! Animate
                      your video now!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="explore__slider-single">
                  <div className="thumb">
                    <Link href="/blog-single">
                      <Image src={ThumbTwo} alt="Image" />
                    </Link>
                  </div>
                  <div className="content">
                    <h5 className="h5">
                      <Link href="/blog-single">AI image compressed</Link>
                    </h5>
                    <p>
                      Convert videos to visually striking cartoons in only a
                      couple of clicks. 100% Automatically and FREE! Animate
                      your video now!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="explore__slider-single">
                  <div className="thumb">
                    <Link href="/blog-single">
                      <Image src={ThumbThree} alt="Image" />
                    </Link>
                  </div>
                  <div className="content">
                    <h5 className="h5">
                      <Link href="/blog-single">video object remover</Link>
                    </h5>
                    <p>
                      Convert videos to visually striking cartoons in only a
                      couple of clicks. 100% Automatically and FREE! Animate
                      your video now!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
