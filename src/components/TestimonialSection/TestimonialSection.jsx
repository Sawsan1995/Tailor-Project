import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { RiDoubleQuotesL } from "react-icons/ri";
import founderImage from "../../imgs/testimonial.png";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Testimonial.css';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class TestimonialSection extends Component {
  render() {
    return (
      <section className="testimonal-section-container">
        <Swiper
          slidesPerView={1}
          navigation={{clickable: true, prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next', el: '.custom-navigation'}}
          pagination={{ clickable: true, type: 'fraction', el: '.custom-pagination' }}
          speed={1000}
          loop 
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className="slider-wrapper">
              <IconContext.Provider value={{ color: "#ffe9e5", size: "10em", className: "testimonial-quote" }}>
                <RiDoubleQuotesL />
              </IconContext.Provider>
              <div className="testimonial-quote">
                <p>Brook presents your services with flexible, convenient and cdpose layouts.
                  You can select your favorite layouts & elements for cular ts with unlimited ustomization
                  possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.
                </p>
              </div>
              <div className="testimoinal-info">
                <div className="testimonial-founder-image">
                  <img src={founderImage} alt="founder" />
                </div>
                <div className="testimonial-text">
                  <h2>
                    Robert Brown
                  </h2>
                  <h4>
                    Creative Designer at Colorlip
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-wrapper">
              <IconContext.Provider value={{ color: "#ffe9e5", size: "10em", className: "testimonial-quote" }}>
                <RiDoubleQuotesL />
              </IconContext.Provider>
              <div className="testimonial-quote">
                <p>Brook presents your services with flexible, convenient and cdpose layouts.
                  You can select your favorite layouts & elements for cular ts with unlimited ustomization
                  possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.
                </p>
              </div>
              <div className="testimoinal-info">
                <div className="testimonial-founder-image">
                  <img src={founderImage} alt="founder" />
                </div>
                <div className="testimonial-text">
                  <h2>
                    Robert Brown
                  </h2>
                  <h4>
                    Creative Designer at Colorlip
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination custom-pagination"></div>
          <div className="swiper-button-prev custom-navigation"></div>
          <div className="swiper-button-next custom-navigation"></div>
        </Swiper>

      </section>
    )
  }
}