import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoTwo from "public/images/logo-two.png";
import AnimeOne from "public/images/anime-one.png";
import AnimeTwo from "public/images/anime-two.png";

const FooterLight = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer section pb-0 footer-light">
      <div className="container">
        <div className="row items-gap-two">
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h5 className="h5">our Products</h5>
              <ul>
                <li>
                  <Link href="/about-us"> AI Article Writer </Link>
                </li>
                <li>
                  <Link href="/about-us"> Image background remover </Link>
                </li>
                <li>
                  <Link href="/about-us"> audio voice over AI </Link>
                </li>
                <li>
                  <Link href="/about-us"> Text Summarizer AI </Link>
                </li>
                <li>
                  <Link href="/about-us">Art Generator</Link>
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
              <h5 className="h5">Use Cases</h5>
              <ul>
                <li>
                  <Link href="/use-case"> AI Voiceover for Videos </Link>
                </li>
                <li>
                  <Link href="/use-case">E- Learning</Link>
                </li>
                <li>
                  <Link href="/use-case"> All interactive Voice </Link>
                </li>
                <li>
                  <Link href="/use-case"> Auto Accessibility </Link>
                </li>
                <li>
                  <Link href="/use-case">YouTube Videos</Link>
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
        <div className="row">
          <div className="col-12">
            <div className="copyright-inner">
              <div className="row items-gap align-items-center">
                <div className="col-12 col-lg-3">
                  <div className="logo text-center text-lg-start">
                    <Link href="/">
                      <Image src={LogoTwo} alt="Image" />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="text-center">
                    Copyright &copy;
                    <span id="copyYear"> {currentYear} </span>
                    <Link href="/"> techAI </Link>. Designed By{" "}
                    <Link href="/(autho-url)"> HugeBinary </Link>
                  </p>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="social justify-content-center justify-content-lg-end">
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
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image src={AnimeOne} alt="Image" className="one" />
        <Image src={AnimeTwo} alt="Image" className="two" />
      </div>
    </footer>
  );
};

export default FooterLight;
