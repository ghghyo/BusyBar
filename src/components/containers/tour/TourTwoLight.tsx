import React from "react";
import Image from "next/image";
import Anime from "public/images/anime-five.png";

const TourTwoLight = () => {
  return (
    <div className="section tour tour-two pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="tour__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <video muted loop autoPlay controls>
                <source src="/images/video/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image src={Anime} alt="Image" />
      </div>
    </div>
  );
};

export default TourTwoLight;
