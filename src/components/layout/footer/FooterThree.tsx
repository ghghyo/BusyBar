import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo-light.png";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-three section pb-0">
      <div className="container">
        <div
          className="row items-gap align-items-center top-break"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          <div className="col-12 col-lg-3">
            <div className="logo">
              <Link href="/">
                <Image src={Logo} alt="Image" />
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <p>
              The Background Remover uses artificial intelligence to detect the
              subject of the photo, mask the image, and remove the background.
              No additional work from you is required!
            </p>
          </div>
          <div className="col-12 col-lg-3">
            <div className="social justify-content-start justify-content-lg-end">
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
          </div>
        </div>
        <hr id="footer-break" />
        <div className="row items-gap-two">
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h5 className="h5">photo Editing</h5>
              <ul>
                <li>
                  <Link href="/use-case"> Image Cropper</Link>
                </li>
                <li>
                  <Link href="/use-case"> Image Resizer</Link>
                </li>
                <li>
                  <Link href="/use-case"> Image Rotator</Link>
                </li>
                <li>
                  <Link href="/use-case"> Image Flipper</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <h5 className="h5">About tech AI</h5>
              <ul>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/sign-in">Sign in</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h5 className="h5">Creativity</h5>
              <ul>
                <li>
                  <Link href="/use-case"> AI Photo Restorer</Link>
                </li>
                <li>
                  <Link href="/use-case">Toongineer Cartoonizer</Link>
                </li>
                <li>
                  <Link href="/use-case"> VansPortrait</Link>
                </li>
                <li>
                  <Link href="/use-case"> AI Photo Colorizer</Link>
                </li>
                <li>
                  <Link href="/use-case">AI Photo Retoucher</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h5 className="h5">support</h5>
              <ul>
                <li>
                  <Link href="/about-us">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/about-us">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/about-us">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="/use-case">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact-us">Helpdesk</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <p>
          Copyright &copy;
          <span id="copyYear"> {currentYear} </span>{" "}
          <Link href="/"> techAI </Link>. Design By{" "}
          <Link href="https://themeforest.net/user/hugebinary">
            {" "}
            HugeBinary
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default FooterThree;
