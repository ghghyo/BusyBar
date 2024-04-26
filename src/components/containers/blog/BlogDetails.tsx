import React from "react";
import Link from "next/link";
import Image from "next/image";
import eight from "public/images/news/eight.png";
import ten from "public/images/news/ten.png";
import eleven from "public/images/news/eleven.png";
import twelve from "public/images/news/twelve.png";
import thirteen from "public/images/news/thirteen.png";
import fourteen from "public/images/news/fourteen.png";
import GroupOne from "public/images/news/group-one.png";
import GroupTwo from "public/images/news/group-two.png";

const BlogDetails = () => {
  return (
    <section className="section blog-main blog-details pb-0">
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-xl-8">
            <div className="blog-details__content">
              <div
                className="bd-thumb"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                <Image src={eight} alt="Image" />
              </div>
              <div className="bd-content">
                <div className="bd-meta">
                  <div className="meta__left">
                    <p>
                      <strong>Written by:</strong>
                      Marry biden
                    </p>
                    <span></span>
                    <p>10/01/2023</p>
                  </div>
                </div>
                <div
                  className="bd-content-info"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  <h4 className="h4">
                    Guide dog shortage: The blind people who train their
                  </h4>
                  <div className="paragraph">
                    <p>
                      Proin ultricies ultricies est vitae cursus. Nulla sit amet
                      suscipit tortor. Maecenas dui erat, ornare eget tristique
                      vitae, rutrum pretium justo. Phasellus vitae consequat
                      nisi, quis luctus nisl. Praesent faucibus sem id massa
                      semper ornare. Nam eu magna at mi pellentesque mattis.
                      Morbi at condimentum velit. Phasellus aliquet, leo auctor
                      volutpat ultrices, metus dolor dictum enim, sed convallis
                      lacus urna nec erat.
                    </p>
                    <p>
                      consectetur adipiscing elit. Etiam at mauris accumsan mi
                      pulvinar lacinia a in justo. Ut tempor et libero quis
                      dignissim. Nulla at convallis libero, vitae aliquam leo.
                      Etiam ut augue nibh. In laoreet neque quis ex ornare, quis
                      auctor elit facilisis. Mauris dapibus massa rhoncus ligula
                      luctus vulputate. Fusce condimentum placerat vulputate.
                      Praesent ullamcorper dui in dui sagittis commodo.
                    </p>
                  </div>
                  <h4 className="h4">Where can I get some?</h4>
                </div>
              </div>
              <div
                className="bd-group"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <Image src={GroupOne} alt="Image" />
                <Image src={GroupTwo} alt="Image" />
              </div>
              <div
                className="bd-content"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="bd-content__alt">
                  <p>
                    Proin ultricies ultricies est vitae cursus. Nulla sit amet
                    suscipit tortor. Maecenas dui erat, ornare eget tristique
                    vitae, rutrum pretium justo. Phasellus vitae consequat nisi,
                    quis luctus nisl. Praesent faucibus sem id massa semper
                    ornare. Nam eu magna at mi pellentesque mattis. Morbi at
                    condimentum velit. Phasellus aliquet, leo auctor volutpat
                    ultrices, metus dolor dictum enim, sed convallis lacus urna
                    nec erat.
                  </p>
                  <ul>
                    <li>Mauris maximus diam ac imperdiet dictum.</li>
                    <li>
                      Maecenas eget ipsum dapibus, rutrum mi non, ultricies
                      massa.
                    </li>
                    <li>Nam non purus porta risus tincidunt cursus.</li>
                    <li>Quisque blandit lacus vel urna pellentesque mattis.</li>
                    <li>Maecenas vehicula tortor et consectetur faucibus.</li>
                  </ul>
                </div>
              </div>
              <div className="bd-quote">
                <blockquote className="h4">
                  <q className="h4">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </q>
                </blockquote>
              </div>
              <div
                className="bd-content"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="bd-content__alt mt-0">
                  <p>
                    Proin ultricies ultricies est vitae cursus. Nulla sit amet
                    suscipit tortor. Maecenas dui erat, ornare eget tristique
                    vitae, rutrum pretium justo. Phasellus vitae consequat nisi,
                    quis luctus nisl. Praesent faucibus sem id massa semper
                    ornare. Nam eu magna at mi pellentesque mattis. Morbi at
                    condimentum velit. Phasellus aliquet, leo auctor volutpat
                    ultrices, metus dolor dictum enim, sed convallis lacus urna
                    nec erat.
                  </p>
                </div>
              </div>
              <div className="bd-tags">
                <div className="tags-left">
                  <p>Tags:</p>
                  <div className="tags-content">
                    <Link href="/blog">Nature</Link>
                    <Link href="/blog">Health</Link>
                  </div>
                </div>
                <div className="tags-right">
                  <p>Share:</p>
                  <ul className="social">
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="blog-details__pagination">
              <div className="row items-gap">
                <div className="col-md-6">
                  <div className="single">
                    <Link href="/blog">
                      <i className="fa-solid fa-arrow-left-long"></i>
                      Previous Blog
                    </Link>
                    <div className="latest-single">
                      <div className="latest-thumb">
                        <Link href="/blog-single">
                          <Image src={eleven} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="/blog-single">
                            Guide dog shortage: The blind peo ple who train
                            their own guide
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single single--alt">
                    <Link href="/blog">
                      Next Blog
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <div className="latest-single">
                      <div className="latest-thumb">
                        <Link href="/blog-single">
                          <Image src={ten} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="/blog-single">
                            Guide dog shortage: The blind peo ple who train
                            their own guide
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section pb-0 comment-form"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                <div className="section__header">
                  <h2 className="h2 text-start">Leave a comment</h2>
                </div>
                <form action="#" method="post">
                  <div className="form-group-wrapper">
                    <div className="form-group-single">
                      <input
                        type="text"
                        name="comment-name"
                        id="commentName"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group-single">
                      <input
                        type="email"
                        name="comment-email"
                        id="commentemail"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group-single">
                    <textarea
                      name="comment-message"
                      id="commentMessage"
                      placeholder="Write Comment..."
                    ></textarea>
                  </div>
                  <div className="cta__group">
                    <button type="submit" className="btn btn--ocotonary">
                      post comment
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="blog-main__sidebar">
              <div
                className="widget"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                <div className="widget__head">
                  <h5 className="h5">Search</h5>
                </div>
                <div className="widget-search">
                  <form action="#" method="post">
                    <div className="form-group-input">
                      <input
                        type="search"
                        name="blog-search"
                        id="blogSearch"
                        placeholder="Search here. . ."
                      />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="widget"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="widget__head">
                  <h5 className="h5">Categories</h5>
                </div>
                <div className="widget__list">
                  <ul>
                    <li>
                      <Link href="/blog">Business</Link>
                    </li>
                    <li>
                      <Link href="/blog">Job Market</Link>
                    </li>
                    <li>
                      <Link href="/blog">Marketing</Link>
                    </li>
                    <li>
                      <Link href="/blog">News</Link>
                    </li>
                    <li>
                      <Link href="/blog">Social Media</Link>
                    </li>
                    <li>
                      <Link href="/blog">Trends</Link>
                    </li>
                    <li>
                      <Link href="/blog">Writing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="widget__head">
                  <h5 className="h5">Recent Posts</h5>
                </div>
                <div className="widget__latest">
                  <div
                    className="latest-single"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="600"
                  >
                    <div className="latest-thumb">
                      <Link href="/blog-single">
                        <Image src={ten} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>10/01/2023</p>
                      <p>
                        <Link href="/blog-single">
                          Guide dog shortage: The blind peo ple who train their
                          own guide
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div
                    className="latest-single"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <div className="latest-thumb">
                      <Link href="/blog-single">
                        <Image src={eleven} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>10/01/2023</p>
                      <p>
                        <Link href="/blog-single">
                          Guide dog shortage: The blind peo ple who train their
                          own guide
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div
                    className="latest-single"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <div className="latest-thumb">
                      <Link href="/blog-single">
                        <Image src={twelve} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>10/01/2023</p>
                      <p>
                        <Link href="/blog-single">
                          Guide dog shortage: The blind peo ple who train their
                          own guide
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div
                    className="latest-single"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <div className="latest-thumb">
                      <Link href="/blog-single">
                        <Image src={thirteen} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>10/01/2023</p>
                      <p>
                        <Link href="/blog-single">
                          Guide dog shortage: The blind peo ple who train their
                          own guide
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget">
                <div className="widget__head">
                  <h5 className="h5">Tags</h5>
                </div>
                <div className="widget__tags">
                  <ul>
                    <li>
                      <Link href="/blog">nature</Link>
                    </li>
                    <li>
                      <Link href="/blog">health</Link>
                    </li>
                    <li>
                      <Link href="/blog">galaxy</Link>
                    </li>
                    <li>
                      <Link href="/blog">creative</Link>
                    </li>
                    <li>
                      <Link href="/blog">art</Link>
                    </li>
                    <li>
                      <Link href="/blog">business</Link>
                    </li>
                    <li>
                      <Link href="/blog">space</Link>
                    </li>
                    <li>
                      <Link href="/blog">biology</Link>
                    </li>
                    <li>
                      <Link href="/blog">environemnt</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="widget widget-big"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                <Link href="/blog-single">
                  <Image src={fourteen} alt="Image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
