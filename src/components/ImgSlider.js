import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img className='slide-title' src='images/title-burrow.png' alt='Burrow' />
          <img src='/images/slider-badging.jpg' alt="Rabit Movie"/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img className='slide-title' src='images/title-wandaVision.png' alt='Wanda Vision' />
          <img src='/images/slider-scale.jpg' alt="Wanda Vision"/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img className='slide-title' src='images/title-onward.png' alt='Onward' />
          <img src='/images/slider-badag.jpg' alt="Onward"/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img className='slide-title' src='images/title-wandaAssembled.png' alt='Avengers Assembled' />
          <img src='/images/slider-scales.jpg' alt="WandaVision Assembled"/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img className='slide-title' src='images/title-ravensHome.png' alt='Avengers Assembled' />
          <img src='/images/slider-ravensHome.jpeg' alt="Ravens Home"/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img className='slide-title' src='images/title-avatar2.png' alt='Avengers Assembled' />
          <img src='/images/slider-avatar2.jpeg' alt="Avatar 2"/>
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  .slick-slide > div {
  margin: 0 5px;
  }

  .slick-list {
    margin: 0 -5px;
  }

  .slide-title {
    box-shadow: none;
    width: 30%;
    height: auto;
    position: absolute;
    margin-left: 6%;
    margin-top: 20px;
    opacity: 0;
    transform: translateX(30px);
    transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
  }

  .slick-active .slide-title {
    opacity: 1;
    transform: translateX(0px);
    transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms, opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
  }


  & > button {
    opacity: 0;
    height: 100%;
    margin: 30px;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 10vw;
    /* width: 15vw; */
    z-index: 1;

  @media (max-width: 768px) {
    width: 20vw;
  }

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;

  a {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px - 10px, 
      rgb(0 0 0 / 73%) 0px 16px 10px - 10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      border-radius: 6px;
      width: 100%;
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, 
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    }

    &:hover {
      padding: 0;
      border-radius: 4px;
      outline: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;

    }
  }
`;

export default ImgSlider
