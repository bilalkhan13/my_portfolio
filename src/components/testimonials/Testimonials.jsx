import React from 'react';
import './testimonials.css';
import Avatar from '../../assets/me.png';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    _avatar: Avatar,
    name: 'Bilal Ahmad Khan',
    review: 'tesing only',
  },
  {
    _avatar: Avatar,
    name: 'Dr.Ali',
    review: 'tesing only',
  },
  {
    _avatar: Avatar,
    name: 'Maj(R) M.QAsim',
    review: 'tesing only',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ _avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={Avatar} alt="Client Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
