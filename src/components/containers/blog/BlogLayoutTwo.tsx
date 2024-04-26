import React from "react";
import Link from "next/link";
import Image from "next/image";
import four from "public/images/blog/four.png";
import five from "public/images/blog/five.png";
import six from "public/images/blog/six.png";
import seven from "public/images/blog/seven.png";
import eight from "public/images/blog/eight.png";
import nine from "public/images/blog/nine.png";
import ten from "public/images/blog/ten.png";
import eleven from "public/images/blog/eleven.png";
import twelve from "public/images/blog/twelve.png";
import thirteen from "public/images/blog/thirteen.png";
import fourteen from "public/images/blog/fourteen.png";
import fifteen from "public/images/blog/fifteen.png";

const BlogLayoutTwo = () => {
  return (
    <section className="section pb-0 news-section">
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={four} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    It is a long established fact that a reader will be
                    distracted
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={five} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    There are many variations of passages of Lorem Ipsum
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={six} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    Power of a great photo backdrop — in just a few steps, you
                    can
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={seven} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={eight} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={nine} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    making this the first true generat on the Internet
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={ten} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    Various versions have evolved over the years
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={eleven} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    even slightly believable. If you are going to use
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={twelve} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    written in 45 BC. This book is a treatise on the theory
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={thirteen} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    he generated Lorem Ipsum is therefore always
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={fourteen} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    Various versions have evolved over the years, sometimes
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="news__slider-item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Link href="/blog-single">
                  <Image src={fifteen} alt="Image" />
                </Link>
                <div className="publish-date">
                  <h4 className="h4">21</h4>
                  <p>JAN</p>
                </div>
              </div>
              <div className="content">
                <div className="tag">
                  <Link href="/blog-single">tech</Link>
                </div>
                <h4 className="h4">
                  <Link href="/blog-single">
                    will uncover many web sites still in their infancy
                  </Link>
                </h4>
                <div className="cta">
                  <Link href="/blog-single">
                    <i className="tech-arrow-top"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLayoutTwo;
