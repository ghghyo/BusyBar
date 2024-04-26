import React from "react";
import Image from "next/image";
import IconOne from "public/images/review/icon-one.png";
import IconTwo from "public/images/review/icon-two.png";
import IconThree from "public/images/review/icon-three.png";
import ThumbOne from "public/images/review/one.png";
import ThumbTwo from "public/images/review/two.png";
import ThumbThree from "public/images/review/three.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

const TeamOne = () => {
  const reviews = [
    { name: "Sarah H.", age: 28, profession: "Event Planner", review: "This app's a game-changer for my nights out! Seriously, it's made finding cool spots a breeze.", rating: 5 },
    { name: "Michael S.", age: 30, profession: "Graphic Designer", review: "Love how easy this app is to use. It's like having a buddy who knows all the best places in town.", rating: 5 },
    { name: "Emily B.", age: 26, profession: "Nurse", review: "This app's saved my bacon so many times! Crowds can be a pain, but this thing helps me dodge 'em like a pro.", rating: 4.5 },
    { name: "Jason M.", age: 32, profession: "Software Engineer", review: "Planning nights out's never been easier. Me and my buddies can find clubs that match our vibe in no time.", rating: 5 },
    { name: "Lauren C.", age: 27, profession: "Marketing Manager", review: "Waitlist? Totally worth it! This app's my go-to for exploring the city after dark.", rating: 5 },
    { name: "Alex W.", age: 29, profession: "Product Tester", review: "Been beta testing for a while now, and I gotta say, the team behind this app's on it! They really listen to what we say.", rating: 4.5 },
    { name: "Rachel T.", age: 31, profession: "Journalist", review: "Found some seriously cool bars thanks to this app. Feels like I've got a local showing me around!", rating: 4.8 },
    { name: "Daniel L.", age: 25, profession: "Financial Analyst", review: "Coordinating with friends is a breeze with this app. Plus, real-time crowd updates? Lifesaver!", rating: 4.7 },
    { name: "Jessica P.", age: 33, profession: "Interior Designer", review: "Can't imagine my nightlife without this app now. It's like it knows exactly what I'm in the mood for.", rating: 4.8 },
    { name: "Ryan G.", age: 28, profession: "Chef", review: "Tried a bunch of other apps, but none of 'em come close to this one. It's simple, it's awesome, and it gets the job done!", rating: 5 },
    { name: "Kevin R.", age: 30, profession: "Sales Manager", review: "Beta testing's been a blast! This app's like having a friend who's always got the inside scoop on the best places to go.", rating: 4.6 },
    { name: "Adam T.", age: 34, profession: "Lawyer", review: "No more guesswork with this app. Crowd predictions are spot-on, which means more time having fun and less time waiting in line!", rating: 4.9 },
    { name: "Brandon K.", age: 26, profession: "Photographer", review: "Feels like I'm discovering something new every time I open this app. Seriously, it's like a treasure hunt for awesome spots!", rating: 4.7 },
    { name: "Matthew J.", age: 29, profession: "Fitness Trainer", review: "Been waiting for an app like this, and it's finally here. Makes me feel like a nightlife expert without even trying!", rating: 4.8 },
    { name: "Nathan S.", age: 33, profession: "Event Coordinator", review: "Been singing this app's praises to all my friends. If you love a good night out, you gotta give it a try!", rating: 4.9 },
    { name: "Olivia L.", age: 27, profession: "Graphic Designer", review: "As a graphic designer, aesthetics matter, and this app nails it! It's like having a personal concierge for nightlife.", rating: 4.7 },
    { name: "Ethan M.", age: 31, profession: "Software Developer", review: "This app simplifies our group outings so much! We can finally avoid the places that don't fit our vibe.", rating: 4.6 },
    { name: "Megan R.", age: 29, profession: "Marketing Analyst", review: "Nights out are stress-free now, thanks to this app. It's like having a cheat code to navigate the city's nightlife.", rating: 4.9 },
    { name: "Hannah W.", age: 28, profession: "Event Planner", review: "I plan events for a living, and this app is a game-changer. It's become my secret weapon for organizing great nights.", rating: 5 },
    { name: "Tyler S.", age: 32, profession: "Musician", review: "This app is gold for finding new venues to perform at. It's like it knows exactly what kind of crowd we want to reach.", rating: 4.8 }
  ];

  return (
    <section className="section pb-0 testimonial">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header" data-aos="fade-up" data-aos-duration="600">
              <h4 className="h2">See why our beta testers can't get enough!</h4>
              <p className="grd"> Join a vibrant community of urban explorers who rave about our app's simplicity and awesomeness.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial__slider-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={1200}
          loop={true}
          roundLengths={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".next-testimonial",
            prevEl: ".prev-testimonial",
          }}
          autoplay={{
            delay: 3000,
          }}
          pagination={false}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
          }}
          className="testimonial__slider"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review__single">
                <div className="review-head">
                  <div className="review__icons">
                    {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                    {review.rating % 1 !== 0 && <i className="fa-solid fa-star-half-alt"></i>}
                  </div>
                  <Image src={review.rating >= 4.8 ? IconOne : review.rating >= 4.6 ? IconTwo : IconThree} alt="Image" />
                </div>
                <div className="review-content">
                  <p className="fw-7">{review.review}</p>
                </div>
                <div className="review-meta">
                  <div className="thumb">
                    <Image src={review.rating >= 4.8 ? ThumbThree : review.rating >= 4.6 ? ThumbTwo : ThumbOne} alt="Image" />
                  </div>
                  <div className="content">
                    <p className="h6">{review.name}</p>
                    <p>{review.profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonial__arrows">
          <button aria-label="previous slide" className="slide-btn prev-testimonial">
            <i className="tech-left-angle"></i>
          </button>
          <button aria-label="next slide" className="slide-btn next-testimonial">
            <i className="tech-right-angle"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
