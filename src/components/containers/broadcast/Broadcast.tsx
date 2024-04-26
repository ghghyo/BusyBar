import React from "react";
import Image from "next/image";
import Link from "next/link";
import animeOne from "public/images/anime-three.png";
import animeTwo from "public/images/anime-two.png";
import broadCastOne from "public/images/broadcast-thumb.png";
import broadCastTwo from "public/images/broadcast-thumb-two.png";
import broadCastThree from "public/images/broadcast-thumb-three.png";
import broadCastFour from "public/images/broadcast-thumb-four.png";

const Broadcast = () => {
  return (
    <section className="section broadcast pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 fix-scroll">
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12 col-xl-8 col-xxl-7">
                  <div className="section__content broadcast__inner-content">
                    <h2 className="h2">Commercial & broadcast rights</h2>
                    <div className="paragraph">
                      <p>
                        Your text to speech synthesized audio files are securely
                        stored in the cloud. You can also create drafts and
                        convert the text to audio at a later time. Clear,
                        consistent, and professional voices for marketing,
                        explainer, product, and YouTube videos.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link href="/contact-us" className="btn btn--secondary">
                        request A Demo
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-4 col-xxl-5">
                  <div className="broadcast__thumb text-xl-center">
                    <Image src={broadCastOne} alt="Image" priority />
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12 col-xl-4 col-xxl-5">
                  <div className="broadcast__thumb text-xl-center">
                    <Image src={broadCastTwo} alt="Image" priority />
                  </div>
                </div>
                <div className="col-12 col-xl-8 col-xxl-7">
                  <div className="section__content broadcast__inner-content">
                    <h2 className="h2">Team Access for Collaboration</h2>
                    <div className="paragraph">
                      <p>
                        Your text to speech synthesized audio files are securely
                        stored in the cloud. You can also create drafts and
                        convert the text to audio at a later time. Clear,
                        consistent, and professional voices for marketing,
                        explainer, product, and YouTube videos.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link href="/register" className="btn btn--secondary">
                        sign up now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12 col-xl-8 col-xxl-7">
                  <div className="section__content broadcast__inner-content">
                    <h2 className="h2">Insanely Powerfull. Easy to use</h2>
                    <div className="paragraph">
                      <p>
                        Your text to speech synthesized audio files are securely
                        stored in the cloud. You can also create drafts and
                        convert the text to audio at a later time. Clear,
                        consistent, and professional voices for marketing,
                        explainer, product, and YouTube videos.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link href="/contact-us" className="btn btn--secondary">
                        request A Demo
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-4 col-xxl-5">
                  <div className="broadcast__thumb text-xl-center">
                    <Image src={broadCastThree} alt="Image" priority />
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12 col-xl-4 col-xxl-5">
                  <div className="broadcast__thumb text-xl-center">
                    <Image src={broadCastFour} alt="Image" priority />
                  </div>
                </div>
                <div className="col-12 col-xl-8 col-xxl-7">
                  <div className="section__content broadcast__inner-content">
                    <h2 className="h2">Life-like Voice clones. As Real</h2>
                    <div className="paragraph">
                      <p>
                        Your text to speech synthesized audio files are securely
                        stored in the cloud. You can also create drafts and
                        convert the text to audio at a later time. Clear,
                        consistent, and professional voices for marketing,
                        explainer, product, and YouTube videos.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link href="/register" className="btn btn--secondary">
                        sign up now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Broadcast;
