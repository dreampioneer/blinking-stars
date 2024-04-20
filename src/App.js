import React, { useState } from 'react';
import {Animated} from "react-animated-css";
import './App.css';


const Star = ({ size, color, info, x, y }) => {
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
        animation: !showInfo ? 'blink 2s infinite' : 'none', 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
      {showInfo ? <Animated animationIn="rubberBand" animationOut="fadeOut" isVisible={showInfo}>
        <div style={{ display:'flex', justifyContent: 'center', zIndex: 120 }}>
          <p style={{ margin: '10px 0px 0px 0px', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '1.5rem', padding: '0 .5rem', width: 'min-content', color: color, fontSize: `${size}px`, display: 'flex', justifyContent: 'center', textWrap: 'nowrap', fontWeight: '700'  }}>{info}</p>
        </div>
      </Animated> : null}
    </div>
  );
};


function App() {
  let stars = [];
  for(let i = 0; i < 50; i++){
    stars.push({x: Math.random() * 100, y: Math.random() * 50, size:Math.random() * 40 ,  color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, info: `Star ${i}`})
  }

  return (
    <div style={{width: '100%', overflow: 'hidden' }}>
      <div style={{ width: '100%', overflow: 'hidden', height: '50vh'}}>
        <div style={{ position: 'absolute', top: '100px', left: '100px', zIndex: 110 }}>
          <svg fill="#FFFF00" height="100" width="100" version="1.1" viewBox="0 0 506.616 506.616">
            <path d="M465.411,427.184c-94.332-1.536-171.076-79.532-171.076-173.876s76.748-172.34,171.08-173.872 c1.592-0.02,3.02-1.004,3.612-2.488c0.588-1.484,0.24-3.176-0.904-4.292C420.447,25.804,357.403,0,290.615,0 C150.939,0,37.307,113.632,37.307,253.308c0,139.68,113.632,253.308,253.308,253.308c66.788,0,129.832-25.804,177.508-72.66 c1.14-1.116,1.492-2.808,0.904-4.288C468.431,428.184,467.007,427.204,465.411,427.184z"></path></svg>
        </div>
        {stars.map((star, index) => (
          <Star
            key={index}
            size={star.size}
            color={star.color}
            info={star.info}
            x={star.x}
            y={star.y}
          />
        ))}
      </div>
    </div>

  );
}

export default App;
