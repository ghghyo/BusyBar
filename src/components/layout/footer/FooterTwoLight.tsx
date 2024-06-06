import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/images/busybarlogo2.png';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/components/containers/utils/firebase'; // Adjust this import path as necessary

const FooterTwoLight = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, 'BusyBar Newsletter'), {
        email: email,
        subscribedAt: new Date().toISOString() // captures the current time in ISO format
      });
      console.log('Email added to newsletter list');
      setEmail(''); // Optionally reset the email input or provide feedback
    } catch (error) {
      console.error('Error adding email to newsletter:', error);
    }
  };

  return (
    <footer className="footer-two section bg-img footer-two-alter reduced-margin-top">
      <div className="container">
        <div className="row items-gap-two">
          <div className="col-10 col-sm-5 col-xl-4 col-xxl-5">
            <div className="footer-two__single bt">
              <Link href="/" passHref>
                <Image src={Logo} alt="Image" width={128} height={64} />
              </Link>
              <p>
                Copyright &copy;
                <span id="copyYear"> {currentYear} </span>
                <Link href="/">BusyBar</Link>
              </p>
              {/* <div className="social">
                <Link href="/" aria-label="social media"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link href="/" aria-label="social media"><i className="fa-brands fa-twitter"></i></Link>
                <Link href="/" aria-label="social media"><i className="fa-brands fa-linkedin-in"></i></Link>
                <Link href="/" aria-label="social media"><i className="fa-brands fa-instagram"></i></Link>
  </div> */}
            </div>
          </div>
          <div className="col-10 col-xl-2 col-xxl-2">
            <div className="footer-two__single" >
              <h5 className="h5 "> BusyBar Quick Links</h5>
              <ul>
                <li>
                  <Link href="/#aboutus">Discover</Link>
                </li>
                <li>
                  <Link href="#contactus">Early Access</Link>
                </li>
                <li>
                  <Link href="#faqtwolight">FAQ's</Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/*
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
  */}
          <div className="col-12 col-xl-5 col-xxl-5">
            <div className="footer-two__single" >
              <h5 className="h5">Get exclusive early access</h5>
              <p>Free For The First 1,000 Sign Ups</p>
              <div className="footer-two__form">
                <h6 className="h6">Ready to have a great time?</h6>
                <form onSubmit={handleSubmit}>
                  <div className="mail-group">
                    <input
                      type="email"
                      name="subscribe-news"
                      id="subscribeNews"
                      placeholder="Enter Email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <button type="submit" aria-label="subscribe to our newsletter">
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

export default FooterTwoLight;
