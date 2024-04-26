import React from "react";

const CtaThree = () => {
  return (
    <section className="section update-cta pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="update-cta__inner bg-img"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="section__header">
                <h2 className="h2">Get updates</h2>
                <p>
                  Sign up to our newsletter to receive information about new
                  products, special offers and updates.
                </p>
              </div>
              <form action="#" method="post">
                <div className="mail-group-two">
                  <input
                    type="email"
                    name="subscribe-news-two"
                    id="subscribeNewsTwo"
                    placeholder="enter your email"
                    required
                  />
                  <button
                    type="submit"
                    aria-label="subscribe to our newsletter"
                    className="btn btn--nonary"
                  >
                    <span>join now</span>
                    <i className="fa-regular fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaThree;
