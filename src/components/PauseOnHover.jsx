import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import air from '../../src/img/air.png';
import apnoe from '../../src/img/apnoe.png';
import aroma from '../../src/img/aroma.png';
import fitness from '../../src/img/fitness.png';
import forest from '../../src/img/forest.png';
import ice from '../../src/img/ice.png';
import mindful from '../../src/img/mindful.png';
import yogamat from '../../src/img/yoga-mat.png';

import boundaries from '../../src/img/boundaries.png';
import calm from '../../src/img/calm.png';
import connection from '../../src/img/connection.png';
import creativety from '../../src/img/creativety.png';
import emotionalintelligence from '../../src/img/emotional-intelligence.png';
import empathy from '../../src/img/empathy.png';
import selfcare from '../../src/img/selfcare.png';
import reflection from '../../src/img/reflection.png';

export default function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="info__slide" id="1">
          <div className="info__card">
            <img
              src={selfcare}
              alt="icon"
              style={{ filter: 'sepia(0.6)' }}
            ></img>
            <h3>Eigenwaarde</h3>
          </div>
        </div>
        <div className="info__slide" id="2">
          <div className="info__card">
            <img
              src={connection}
              alt="icon"
              style={{ filter: 'sepia(0.6)' }}
            ></img>
            <h3>Verbinding</h3>
          </div>
        </div>
        <div className="info__slide" id="3">
          <div className="info__card">
            <img
              src={boundaries}
              alt="icon"
              style={{ filter: 'sepia(0.6)' }}
            ></img>
            <h3>Grenzen</h3>
          </div>
        </div>
        <div className="info__slide" id="4">
          <div className="info__card">
            <img
              src={empathy}
              alt="icon"
              style={{ filter: 'sepia(0.6)' }}
            ></img>
            <h3>Empathie</h3>
          </div>
        </div>
        <div className="info__slide" id="5">
          <div className="info__card">
            <img src={calm} alt="icon" style={{ filter: 'sepia(0.6)' }}></img>
            <h3>Rust</h3>
          </div>
        </div>
        <div className="info__slide" id="6">
          <div className="info__card">
            <img
              src={reflection}
              alt="icon"
              style={{ filter: 'sepia(0.6)' }}
            ></img>
            <h3>Inzicht</h3>
          </div>
        </div>
        <div className="info__slide" id="7">
          <div className="info__card">
            <img
              src={emotionalintelligence}
              alt="icon"
              style={{ filter: 'sepia(0.6)' }}
            ></img>
            <h3>Intuïtie</h3>
          </div>
        </div>
        <div className="info__slide" id="8">
          <div className="info__card">
            <img
              src={creativety}
              alt="icon"
              style={{ filter: 'sepia(0.6)' }}
            ></img>
            <h3>Creativiteit</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}
