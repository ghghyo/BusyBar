import React from "react";
import Image from "next/image";
import Link from "next/link";
import Frame from "public/images/frame-three.png";
import Laid from "public/images/laidback.jpg";
import NightLife from "public/images/nightlife.jpg";
import Discover from "public/images/discover.jpg";

const Publish = () => {
  return (
    <section className="section publish reduced-margin-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="publish__inner">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div
                    className="section__header"

                  >
                    <h2 className="h2">
                      You choose the mood, <br /> we create the crowd
                    </h2>
                    <p className="grd">Whether you're craving a laid-back mimosa or looking to unleash your inner party animal, we have the perfect spots waiting for you.</p>
                  </div>
                </div>
              </div>
              <div className="row items-gap">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="publish__single"

                  >
                  <div className="flex mb-5 justify-center items-center h-32 w-32 mobile-margin-left"> {/* Adjust height and width as needed */}
                    <Image src={Laid}
                      alt="Descriptive Alt Text"
                      width={280} // Set the width of the image
                      height={200} // Set the height of the image
                      style={{ borderRadius: '15px' }} 
                    />
                  </div>
                    <div className="content">
                      <h5 className="h5">LaidBack & Chill</h5>
                      <p>
                      Relaxation meets exploration! Personalized spots perfectly suited to your laid-back vibe
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="publish__single"

                  >
                  <div className="flex mb-5 justify-center items-center h-32 w-32 mobile-margin-left" > {/* Adjust height and width as needed */}
                    <Image src={NightLife}
                      alt="Descriptive Alt Text"
                      width={280} // Set the width of the image
                      height={200} // Set the height of the image
                      style={{ borderRadius: '15px' }} 
                    />
                  </div>
                    <div className="content">
                      <h5 className="h5">Nightlife & Clubbing</h5>
                      <p>
                      Immerse yourself in the city's nightlife pulse! From trendy bars to exclusive venues, BusyBar guides you to the hottest spots for unforgettable nights.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="publish__single"

                  >
                  <div className="flex mb-5 justify-center items-center h-32 w-32 mobile-margin-left"> {/* Adjust height and width as needed */}
                    <Image src={Discover}
                      alt="Descriptive Alt Text"
                      width={280} // Set the width of the image
                      height={200} // Set the height of the image
                      style={{ borderRadius: '15px' }} 
                    />
                  </div>
                    <div className="content">
                      <h5 className="h5">Discover your city</h5>
                      <p>
                      Discover hidden gems alongside renowned bars, clubs, and pubs. Unveil city secrets and immerse yourself in the vibrant nightlife culture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section__content-cta text-center"
              >
                <Link href="#contactus" className="btn btn--senary ">
                  Get Free Access For Life
                </Link>
                <Image src={Frame} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publish;
