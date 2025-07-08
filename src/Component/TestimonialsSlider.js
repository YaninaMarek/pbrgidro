import React from 'react';
import Slider from 'react-slick';


const letters = [
  "/images/le1.jpg",
  "/images/le2.jpg",
  "/images/le3.jpg",
  "/images/le4.jpg",
  "/images/le5.jpg",
  "/images/le6.jpg",
  "/images/le7.jpg",
  "/images/le8.jpg",
  "/images/le9.jpg",
  "/images/le10.jpg",
  "/images/le11.jpg",
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div style={{ maxWidth: 1000, margin: 'auto', padding: '20px' }}>
      <Slider {...settings}>
        {letters.map((src, idx) => (
          <div key={idx}>
            <img src={src} alt={`letter-${idx}`} style={{ width: '90%',  }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
