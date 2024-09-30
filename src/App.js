import React, { useState } from 'react';
import {Animated} from "react-animated-css";
import './App.css';


const Star = ({ size, color, info, x, y,time }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        position: 'absolute',
        left: `${x}vw`,
        top: `${y}vh`,
        zIndex: !showInfo ? 100 : 120,
        animation: !showInfo ? `blink ${time}s infinite` : 'none',
      }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" color={color} style={{ textShadow: '10px 20px 30px blue' }}>
        <defs>
            <filter id="blur">
                <feGaussianBlur stdDeviation="10" />
            </filter>
        </defs>
        <path className='blur' fill={color} d="M128,10c0,0,11.8,64.3,24.4,80.6c12.5,16.4,54,36.3,54,36.3s-35.4,13.6-54,36.3C138.1,178.3,128,246,128,246s-11.2-60.7-23.8-82.8c-12.5-22.1-54.6-36.3-54.6-36.3s36.6-11.2,54.6-36.3C122.2,65.5,128,10,128,10z"/>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width={size} height={size} color={color} viewBox="0 0 100 125" >
        <defs>
          <filter id="blur">
              <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>
        <path className='blur' fill={'#FFFFFFBF'} d="M90.2,50L90.2,50l0,0.3c-10.4,0-20.2,1-27.6,2.8c0,0-0.1,0-0.1,0c-4.5,1.1-8,4.6-9.1,9.1c0,0,0,0.1,0,0.1   c-1.9,7.4-2.9,17.2-2.8,27.6l-0.2,0h-0.1l-0.2,0c0-10.4-1-20.2-2.8-27.6c0,0,0-0.1,0-0.1c-1.1-4.5-4.7-8-9.1-9.1c0,0-0.1,0-0.1,0   c-7.4-1.9-17.2-2.9-27.6-2.8l0-0.2V50l0-0.2c10.4,0,20.2-1,27.6-2.8c0,0,0.1,0,0.1,0c4.5-1.2,8-4.7,9.1-9.1c0,0,0-0.1,0-0.1   c1.9-7.4,2.9-17.2,2.8-27.6l0.2,0h0.1l0.2,0c0,10.4,1,20.2,2.8,27.6c0,0,0,0.1,0,0.1c1.1,4.5,4.6,8,9.1,9.1c0,0,0.1,0,0.1,0   c7.4,1.9,17.2,2.9,27.6,2.8L90.2,50z"/></svg>
        {/* {showInfo ? <Animated animationIn="rubberBand" animationOut="fadeOut" isVisible={showInfo}>
          <div style={{ display:'flex', justifyContent: 'center', zIndex: 120 }}>
            <p style={{ margin: '10px 0px 0px 0px', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '1.5rem', padding: '0 .5rem', width: 'min-content', color: color, fontSize: `${size}px`, display: 'flex', justifyContent: 'center', textWrap: 'nowrap', fontWeight: '700'  }}>{info}</p>
          </div>
        </Animated> : null} */}
    </div>
  );
};

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function App() {
  let stars = [];
  for(let i = 0; i < 400; i++){
    stars.push({x: Math.random() * 100, y: Math.random() * 65, size:Math.random() * 50 ,  color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, info: `Star ${i}`, time: getRandomNumber(5, 10)})
  }



  return (
    <div style={{width: '100%', overflow: 'hidden' }}>
      <div style={{ width: '100%', overflow: 'hidden', height: '50vh'}}>
        <div style={{ position: 'absolute', top: '100px', left: '100px', zIndex: 110}}>
          <svg fill="#F6F1D5" height="100" width="100" version="1.1" viewBox="0 0 506.616 506.616">
            <defs>
              <filter id="blur">
                  <feGaussianBlur stdDeviation="5" />
              </filter>
            </defs>
            {/* <path className='blur' d="M465.411,427.184c-94.332-1.536-171.076-79.532-171.076-173.876s76.748-172.34,171.08-173.872 c1.592-0.02,3.02-1.004,3.612-2.488c0.588-1.484,0.24-3.176-0.904-4.292C420.447,25.804,357.403,0,290.615,0 C150.939,0,37.307,113.632,37.307,253.308c0,139.68,113.632,253.308,253.308,253.308c66.788,0,129.832-25.804,177.508-72.66 c1.14-1.116,1.492-2.808,0.904-4.288C468.431,428.184,467.007,427.204,465.411,427.184z"></path> */}
            </svg>
            {/* <img src='/moon.png' width='25%' alt='moon' style={{ imageRendering: "smooth" }} /> */}
        </div>
        {stars.map((star, index) => (
          <Star
            key={index}
            size={star.size}
            color={star.color}
            info={star.info}
            x={star.x}
            y={star.y}
            time={star.time}
          />
        ))}
      </div>
    </div>

  );
}

export default App;
