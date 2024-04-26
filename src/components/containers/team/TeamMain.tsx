import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/teams/one.png";
import two from "public/images/teams/two.png";
import three from "public/images/teams/three.png";
import four from "public/images/teams/four.png";
import five from "public/images/teams/five.png";
import six from "public/images/teams/six.png";

const TeamMain = () => {
  return (
    <section className="section team-main pb-0">
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="team-main-single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Image src={one} alt="Image" />
                <div className="social">
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
                <div className="content">
                  <h5 className="h5">Robert V. Deguzman</h5>
                  <p>Creative Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="team-main-single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Image src={two} alt="Image" />
                <div className="social">
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
                <div className="content">
                  <h5 className="h5">Robert V. Deguzman</h5>
                  <p>Creative Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="team-main-single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Image src={three} alt="Image" />
                <div className="social">
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
                <div className="content">
                  <h5 className="h5">Robert V. Deguzman</h5>
                  <p>Creative Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="team-main-single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Image src={four} alt="Image" />
                <div className="social">
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
                <div className="content">
                  <h5 className="h5">Robert V. Deguzman</h5>
                  <p>Creative Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="team-main-single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Image src={five} alt="Image" />
                <div className="social">
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
                <div className="content">
                  <h5 className="h5">Robert V. Deguzman</h5>
                  <p>Creative Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="team-main-single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <Image src={six} alt="Image" />
                <div className="social">
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
                <div className="content">
                  <h5 className="h5">Robert V. Deguzman</h5>
                  <p>Creative Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMain;
