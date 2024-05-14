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
            <img src={fitness} alt="icon"></img>
            <h3>
              Personal <br />
              Fitness <br />
              Training
            </h3>
          </div>
        </div>
        <div className="info__slide" id="2">
          <div className="info__card">
            <img src={yogamat} alt="icon"></img>
            <h3>
              Pilates-
              <br />
              Wirbelsäulen- <br />
              Beckenboden-
              <br />
              training
            </h3>
          </div>
        </div>
        <div className="info__slide" id="3">
          <div className="info__card">
            <img src={air} alt="icon"></img>
            <h3>Atemtraining</h3>
          </div>
        </div>
        <div className="info__slide" id="4">
          <div className="info__card">
            <img src={forest} alt="icon"></img>
            <h3>Outdoortraining</h3>
          </div>
        </div>
        <div className="info__slide" id="5">
          <div className="info__card">
            <img src={mindful} alt="icon"></img>
            <h3>
              Entspannungs- <br />
              und
              <br />
              Achtsamkeitstraining
            </h3>
          </div>
        </div>
        <div className="info__slide" id="6">
          <div className="info__card">
            <img src={apnoe} alt="icon"></img>
            <h3>Apnoetauchkurse</h3>
          </div>
        </div>
        <div className="info__slide" id="7">
          <div className="info__card">
            <img src={ice} alt="icon"></img>
            <h3>
              Eisbaden <br />
              Eisschwimmen <br />
              Kältetraining
            </h3>
          </div>
        </div>
        <div className="info__slide" id="8">
          <div className="info__card">
            <img src={aroma} alt="icon"></img>
            <h3>
              Aromatherapie <br />& Energetische <br />
              Körperanwendungen
            </h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}
