// Rocket.js

import React, { useRef, useEffect } from 'react';
import './Rocket.css'; // Import your CSS file for rocket styles
import Spline from '@splinetool/react-spline';
// import Countdown from '../components/countdown';
import "../home/home.css";
import Countdown from "../home/countdown";
const HomeSpline = () => {
//   const rocketRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       const rocket = rocketRef.current;

//       // Move the rocket from bottom to top based on scroll amount
//       rocket.style.bottom = `${scrollY}px`;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  return (
    <div className='main'>
        <div className='splinemodel' >
        <Spline className='splines' scene="https://prod.spline.design/T0phBXpG8D8N7k4p/scene.splinecode" />
    </div>
    <div className='heading'>
        <img className='image' src="/hometxt.png" />
        <div className="btn-p"><div className="button-p"><button className="button-x">REGISTER</button></div></div>
      <div className="ctd-p"><div className="ctd"><Countdown /></div></div>
    </div>
    </div>
    


  );
};

export default HomeSpline;