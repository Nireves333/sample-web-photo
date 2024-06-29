import React from 'react';
import Slider from 'react-slick';
import image1 from '../assets/land1.webp';
import image2 from '../assets/land2.jpeg';
import image3 from '../assets/land3.jpeg';
import image4 from '../assets/land4.webp';
import Logo from '../assets/PhotoLogo.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const images = [image1, image2, image3, image4];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="hero-image"
            />
          </div>
        ))}
      </Slider>
      <div className="logo-middle">
        <img
          src={Logo}
          alt="Logo"
          className="mid-logo"
        />
      </div>
    </div>
  );
}

export default Hero;
