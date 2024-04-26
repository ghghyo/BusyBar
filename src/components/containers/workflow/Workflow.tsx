import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/images/workflow/one.png";
import Two from "public/images/workflow/two.png";
import Three from "public/images/workflow/three.png";

const Workflow = () => {
  const [workFlow, setWorkFlow] = useState(0);

  return (
    <section className="section workflow">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div
              className="workflow__thumb"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb-top">
                <Image src={One} alt="Image" />
              </div>
              <div className="thumb-center">
                <Image src={Two} alt="Image" />
              </div>
              <div
                className={
                  (workFlow === 0
                    ? " w-one"
                    : workFlow === 1
                    ? " w-two"
                    : workFlow === 2
                    ? " w-three"
                    : workFlow === 3
                    ? " w-four"
                    : workFlow === 4
                    ? " w-five"
                    : workFlow === 5
                    ? " w-six"
                    : " ") + " thumb-transparent"
                }
              >
                <Image src={Three} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="workflow__content section__content m-0"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h2 className="h2">
                Simplify Workflow with Online Background Remover
              </h2>
              <div className="paragraph">
                <p className="fw-6">
                  No matter if you want transparent cut outs for making passport
                  photo, showing e-commerce products, or more, techAI can be the
                  best choice to replace background with solid colors.
                </p>
                <p>
                  Drop the complex brushes and layers. Use techAI to remove
                  background from image in one click. Replace busy background
                  with transparent background or solid color ones. With AI
                  background remover, you can handle tricky conditions like hair
                  and animal fur like a pro.
                </p>
              </div>
              <div className="workflow-switch-wrapper">
                <button
                  className={
                    (workFlow == 0 ? " active" : " ") +
                    " workflow-switch  w-one"
                  }
                  aria-label="switch background"
                  onClick={() => setWorkFlow(0)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  className={
                    (workFlow == 1 ? " active" : " ") +
                    " workflow-switch  w-two"
                  }
                  aria-label="switch background"
                  onClick={() => setWorkFlow(1)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  className={
                    (workFlow == 2 ? " active" : " ") +
                    " workflow-switch  w-three"
                  }
                  aria-label="switch background"
                  onClick={() => setWorkFlow(2)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  className={
                    (workFlow == 3 ? " active" : " ") +
                    " workflow-switch  w-four"
                  }
                  aria-label="switch background"
                  onClick={() => setWorkFlow(3)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  className={
                    (workFlow == 4 ? " active" : " ") +
                    " workflow-switch  w-five"
                  }
                  aria-label="switch background"
                  onClick={() => setWorkFlow(4)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  className={
                    (workFlow == 5 ? " active" : " ") +
                    " workflow-switch  w-six"
                  }
                  aria-label="switch background"
                  onClick={() => setWorkFlow(5)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
              <div className="section__content-cta">
                <Link href="/register" className="btn btn--quinary">
                  Start Remove Now
                </Link>
                <Link href="/contact-us" className="btn btn--tertiary">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
