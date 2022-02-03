import React from 'react';
import { Slide } from 'react-slideshow-image';
import img1 from '../assets/cows.jpg';
import img2 from '../assets/inputs_cattle_map.jpg';
import img3 from '../assets/inputs_cattle_map2.jpg';

// const slideImages = [
//   img1,
//   img2,
//   img3,
  
// ];

const slideImages = [
  img1,
  img2,
  img3,
  
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

export default function Slideshow(){
  return (
    <div className="slide-container">
      <div className="slide-style">
      <Slide {...properties}>
      <div className="each-slide">
        <div className='slidewindow' style={{'backgroundImage': `url(${slideImages[0]})`,"backgroundRepeat":"no-repeat", "backgroundSize":"cover","backgroundPosition":"center"}}>
          <span></span>
        </div>
      </div>
      <div className="each-slide">
        <div className='slidewindow' style={{'backgroundImage': `url(${slideImages[1]})`,"backgroundRepeat":"no-repeat","backgroundPosition":"center"}}>
          <span></span>
        </div>
      </div>
      <div className="each-slide">
        <div className='slidewindow' style={{'backgroundImage': `url(${slideImages[2]})`,"backgroundRepeat":"no-repeat","backgroundSize":"cover","backgroundPosition":"center"}}>
          <span></span>
        </div>
      </div>
    </Slide>
    </div>
    </div>

    
  )
}