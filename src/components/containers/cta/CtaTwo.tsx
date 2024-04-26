import React from "react";
import Image from "next/image";
import Link from "next/link";
import Anime from "public/images/anime-new-two.png";
import AnimeTwo from "public/images/anime-new-three.png";
const CtaTwo = () => {
  return (
    <section className="section cta-two pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cta-two__inner bg-img"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div
                className="section__header"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h2 className="h2">Ready to expedite your writing?</h2>
                <p>
                  Generate unique article drafts from headlines and keywords,
                  now
                </p>
              </div>
              <ul>
                <li>FULL ARTICLE DRAFT IN MINUTES</li>
                <li>SEO FRIENDLY CONTENT</li>
                <li>LIST OF CITATIONS FOR VERIFICATION</li>
                <li>UNIQUE & RELEVANT ORIGINAL CONTENT</li>
              </ul>
              <div className="section__content-cta text-center">
                <Link href="/register" className="btn btn--senary">
                  start writing free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image src={Anime} alt="Image" className="one" />
        <Image src={AnimeTwo} alt="Image" className="two" />
      </div>
    </section>
  );
};

export default CtaTwo;
