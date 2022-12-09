import React from 'react';
import Slider from 'react-slick';

const  sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
}
export default function CoverCarousel({ 
  moviesPosters = [] }) {

  return moviesPosters.length > 0 ? (
    <Slider {...sliderSettings}>
      {moviesPosters.map((moviesPoster, key) => (
        <div key={key}>{moviesPoster}</div>
      ))}
    </Slider>
  ) : null;
}
