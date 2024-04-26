import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumb from "public/images/use-case/thumb.png";

const UseCaseAbout = () => {
  return (
    <section className="section use-case-about pb-0">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div
              className="use-case-about__content section__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">
                #1 AI Writer That Writes Long- Form Content In Seconds
              </h2>
              <div className="paragraph">
                <p>
                  analyses the speaker&apos;s face and gaze during a video
                  conversation to maintain eye contact before changing the
                  camera position. io at a later time. Clear, consistent, and
                  professional voices for marketing, explainer, product, and
                  YouTube videos.
                </p>
                <p>
                  Spend less time in copywriting and research with Writesonic AI
                  writer. Our AI article writer helps with 2000+ words
                  SEO-optimized content in one go.
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="/register" className="btn btn--primary">
                  get started - its free
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="use-case-about__thumb text-start text-lg-end">
              <Image
                src={Thumb}
                alt="Image"
                data-aos="fade-up"
                data-aos-duration="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseAbout;
