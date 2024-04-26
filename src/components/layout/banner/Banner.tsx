import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimeOne from "public/images/anime-one.png";
import AnimeTwo from "public/images/anime-two.png";

const Banner = ({ desc, page }: any) => {
  return (
    <section className="section cmn-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cmn-banner__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h3 className="h3">{desc}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {page}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image src={AnimeOne} alt="Image" className="one" />
        <Image src={AnimeTwo} alt="Image" className="two" />
      </div>
    </section>
  );
};

export default Banner;
