import React from "react";
import Image from "next/image";
import Thumb from "public/images/use-case/details-thumb.png";

const UseCaseDetails = () => {
  return (
    <section className="use-case-details section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div className="use-case-details__content">
              <h2 className="h2" data-aos="fade-up" data-aos-duration="600">
                Few steps to write content
              </h2>
              <div
                className="paragraph"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <p>
                  analyses the speaker&apos;s face and gaze during a video
                  conversation to maintain eye contact before changing the
                  camera position. io at a later time. Clear, consistent, and
                  professional voices for marketing, explainer, product, and
                  YouTube videos.
                </p>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat
                  incididunt.
                </p>
              </div>
              <hr />
              <div
                className="paragraph"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                <h5 className="h5">Write Higher Converting Posts</h5>
                <p>
                  analyses the speaker&apos;s face and gaze during a video
                  conversation to maintain eye contact before changing the
                  camera position. io at a later time. Clear, consistent, and
                  professional voices for marketing, explainer, product, and
                  YouTube videos.
                </p>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat
                  incididunt.
                </p>
              </div>
              <div
                className="details-thumb"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="800"
              >
                <Image src={Thumb} alt="Image" />
              </div>
              <div className="paragraph">
                <h5 className="h5">Generate AI Content</h5>
                <p>
                  analyses the speaker&apos;s face and gaze during a video
                  conversation to maintain eye contact before changing the
                  camera position. io at a later time. Clear, consistent, and
                  professional voices for marketing, explainer, product, and
                  YouTube videos.
                </p>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat
                  incididunt.
                </p>
                <p>
                  Mauris lacinia, neque non maximus rutrum, risus ex consequat
                  mi, id semper nulla turpis quis nulla. Proin vitae orci et
                  velit molestie tempor. Duis ac tellus leo. Aliquam rutrum leo
                  id convallis placerat. Fusce viverra diam elit, in tempus
                  ligula ornare a. Fusce auctor, tortor a facilisis vulputate,
                  magna purus laoreet elit, quis dictum justo ligula placerat
                  lectus.
                </p>
              </div>
              <div
                className="paragraph mb-0"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="1000"
              >
                <h5 className="h5">Fill in Your Product Details</h5>
                <p>
                  analyses the speaker&apos;s face and gaze during a video
                  conversation to maintain eye contact before changing the
                  camera position. io at a later time. Clear, consistent, and
                  professional voices for marketing, explainer, product, and
                  YouTube videos.
                </p>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat
                  incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseDetails;
