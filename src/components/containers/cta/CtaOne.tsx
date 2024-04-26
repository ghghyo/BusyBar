import React from "react";
import Link from "next/link";

const CtaOne = () => {
  return (
    <section className="section cta bg-img ctaa">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <div
              className="section__header m-0 text-center"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">
                Start creating a custom voice for your brand today
              </h2>
              <div className="form-cta">
                <Link href="/register" className="btn btn--quinary">
                  create free AI voice Over
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
