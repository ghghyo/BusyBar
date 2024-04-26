import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimeOne from "public/images/anime-one.png";
import AnimeTwo from "public/images/anime-two.png";
import Thumb from "public/images/clone-thumb.png";
import CloneItem from "./CloneItem";
const Clone = () => {
  return (
    <section className="section clone pt-0">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div
              className="clone__thumb"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <CloneItem
                img={Thumb}
                audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              />
              <div className="text-end">
                <CloneItem
                  img={Thumb}
                  audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                />
              </div>
              <div className="anime">
                <Image
                  src={AnimeOne}
                  priority
                  alt="Image"
                  className="anime-one"
                />
                <Image
                  src={AnimeTwo}
                  priority
                  alt="Image"
                  className="anime-two"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="clone__content section__content">
              <h2 className="h2">Pitch Perfect Voice Clones</h2>
              <div
                className="paragraph"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <p className="fw-5 text-lg">
                  Resemble&apos;s AI voice generator lets you create realistic
                  human-like voiceovers in seconds.
                </p>
                <p>
                  Create a spot-on match of the voice you like with Murf.
                  Customize the voice by adjusting pitch, tone, speed, and more
                  to produce life-like narration for your content. Make
                  modifications to your script anytime during the creative
                </p>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Emotions
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Speech-To-Speech
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Localize
                </li>
              </ul>
              <div
                className="section__content-cta"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <Link href="/contact-us" className="btn btn--tertiary">
                  request A Demo
                </Link>
                <Link href="/about-us" className="btn btn--quaternary">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clone;
