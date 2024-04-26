import React from "react";
import Image from "next/image";
import Link from "next/link";
import Google from "public/images/google.png";
import Facebook from "public/images/facebook.png";

const SignInAccount = () => {
  return (
    <section className="section authentication pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-6">
            <div
              className="authentication__inner"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="section__header text-start">
                <h2 className="h3">Welcome Back</h2>
              </div>
              <form action="#" method="post">
                <div className="input-single">
                  <input
                    type="email"
                    name="author-Email"
                    id="authorEmail"
                    placeholder="email address"
                    required
                  />
                </div>
                <div className="input-single">
                  <input
                    type="password"
                    name="author-Password"
                    id="authorPassword"
                    placeholder="enter password"
                    required
                  />
                </div>
                <div className="divide">
                  <p>OR</p>
                </div>
                <div className="authentic">
                  <button type="submit" className="btn btn--nonary">
                    <Image src={Google} alt="Image" />
                    continue with google
                  </button>
                  <button type="submit" className="btn btn--nonary">
                    <Image src={Facebook} alt="Image" />
                    continue with facebook
                  </button>
                </div>
                <div className="group-radio">
                  <input
                    type="checkbox"
                    name="create-in-check"
                    id="createInCheck"
                  />
                  <label htmlFor="createInCheck">
                    i accept your terms & conditions
                  </label>
                </div>
                <div className="form-cta">
                  <button
                    type="submit"
                    aria-label="post comment"
                    className="btn btn--ocotonary"
                  >
                    sign in
                  </button>
                  <p>
                    Don&apos;t Have an account?{" "}
                    <Link href="/register"> Register Now</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInAccount;
