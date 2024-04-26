import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo-three.png";

const FooterTwo = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-two section bg-img">
      <div className="container">
        <div className="row items-gap-two">
          <div className="col-12 col-sm-6 col-xl-4 col-xxl-5">
            <div
              className="footer-two__single bt"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Link href="/" className="logo">
                <Image src={Logo} alt="Image" />
              </Link>
              <p>
                Copyright &copy;
                <span id="copyYear"> {currentYear} </span>
                <Link href="/"> techAI </Link>. Design By{" "}
                <Link href="/(autor-url)"> HugeBinary</Link>
              </p>
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
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-2 col-xxl-2">
            <div
              className="footer-two__single"
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
          <div className="col-12 col-sm-6 col-xl-2 col-xxl-2">
            <div
              className="footer-two__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h5 className="h5">Free tools</h5>
              <ul>
                <li>
                  <Link href="/use-case"> AI Article Writer</Link>
                </li>
                <li>
                  <Link href="/use-case">Paraphrasing Tool</Link>
                </li>
                <li>
                  <Link href="/use-case"> Sentence Expander</Link>
                </li>
                <li>
                  <Link href="/use-case"> Text SummarizerAI</Link>
                </li>
                <li>
                  <Link href="/use-case">Art Generator</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
            <div
              className="footer-two__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h5 className="h5">Art Generator</h5>
              <div className="footer-two__form">
                <h6 className="h6">Ready to unlock your full potential?</h6>
                <form action="#" method="post">
                  <div className="mail-group">
                    <input
                      type="email"
                      name="subscribe-news"
                      id="subscribeNews"
                      placeholder="Enter Mail"
                      required
                    />
                    <button
                      type="submit"
                      aria-label="subscribe to our newsletter"
                    >
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
