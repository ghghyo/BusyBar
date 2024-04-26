import React from "react";
import Image from "next/image";
import thumb from "public/images/error-thumb.png";

const ErrorContent = () => {
  return (
    <section className="section error pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="error__content text-center">
              <div className="section__header">
                <h2 className="h3" data-aos="fade-up" data-aos-duration="600">
                  404
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  page not found
                </p>
              </div>
              <Image
                src={thumb}
                priority
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

export default ErrorContent;
