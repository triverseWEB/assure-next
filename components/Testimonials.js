"use client";

import React from "react";
import Slider from "react-slick";
import { Star } from "../components/svg-components/Star";
import Halfstar from "../components/svg-components/Halfstar";
import Google from "../components/svg-components/Google";
import TestimonialData from "../Data/TestimonialData.json";

export const Testimonials = (props) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };

  return (
    <>
      <div>
        <div className="google-icon-wrap">
          <div className="googlereviewslider">
            <div className="item">
              <div className="google-icon-head">
                <div className="rating ">
                  <div className="g-logo    ">
                    <Google />
                  </div>
                  <div className="starrr">
                    <i className="nw">
                      <Star />
                    </i>
                    <i className="nw">
                      <Star />
                    </i>
                    <i className="nw">
                      <Star />
                    </i>
                    <i className="nw">
                      <Star />
                    </i>
                    <i className="nw nw_half">
                      <Halfstar />
                    </i>
                  </div>
                </div>

                <div className="baseon-rating">
                  <p> Based on 405+ reviews</p>
                </div>

                <Slider {...settings} {...props}>
                  {/* Mapping over the reviews data to generate slider items */}
                  {TestimonialData.reviews.map((review, index) => (
                    <div key={index}>
                      <p>{review.content}</p>
                      <p>{review.author}</p>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="col-12 flex-center mt-4 __trestmonail">
                <a
                  className="button button--aylen button--round-l button--text-thick text-uppercase bg-white    col-lg-3 col-12 mt-3"
                  href="https://www.google.com/maps/place/Assure+Pathlabs+%7C+Best+Pathology+Labs+%26+Blood+Test+Lab+in+Jalandhar+Punjab/@31.3042172,75.5861548,15z/data=!4m8!3m7!1s0x391a5bb201b0f3d1:0x7856b16cd286d465!8m2!3d31.3042172!4d75.5861548!9m1!1b1!16s%2Fg%2F11f__bnrjm?entry=ttu"
                  target="_blank"
                >
                  READ ALL REVIEWS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
