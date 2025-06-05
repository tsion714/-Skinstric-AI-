import React, { useEffect, useRef, useState } from 'react';
import leftbracket from '../Assets/Rectangle 2710.png';
import rightbracket from '../Assets/Rectangle 2711.png';
import { gsap } from 'gsap';

const Introduction = () => {
    const boxRef = useRef(null);
  
    useEffect(() => {
       
    const tl = gsap.timeline();

    tl.set(boxRef.current, { opacity: 0, duration: 2 }) 

      .to(boxRef.current, { opacity: 0.2, duration: 1 })
      .to(boxRef.current, { opacity: 0.4, duration: 1.2 })
      .to(boxRef.current, { opacity: 0.6, duration: 1.25 })
      .to(boxRef.current, { opacity: 0.9, duration: 2 })
      .to(boxRef.current, { opacity: 1, duration: 2.5});
      }, []);

      const pRef = useRef(null);
      const [hiddenArrow, setHiddenArrow] = useState(null); 

      const moveRight = () => {
        gsap.to(pRef.current, { x: 100, duration: 0.5, ease: "power2.out" }); 
        setHiddenArrow("left");
      };
    
      const moveLeft = () => {
        gsap.to(pRef.current, { x: -100, duration: 0.5, ease: "power2.out" });
        setHiddenArrow("right");  
      };
    
      const resetPosition = () => {
        gsap.to(pRef.current, { x: 0, duration: 0.5, ease: "power2.out" }); 
         setHiddenArrow(null); 
      };

      const arrowStyle = (isHidden) => ({
        cursor: "pointer",
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? "none" : "auto",
        transition: "opacity 0.3s ease",
      });

      const combinedRef = (el) => {
        boxRef.current = el;
        pRef.current = el;
      };

  return (
    <>
    <div className='header'>
      <div className='pt-1'>
        <a className='skinstric' href='/'>SKINSTRIC</a>
            <img className='rectangle2710' src={leftbracket} alt="" />
            <p className='Intro'>INTRO</p>
            <img className='rectangle2711' src={rightbracket} alt="" />
      </div>
      <button className='button-simple'>ENTER CODE</button>
    </div>
    <div className='body'>
        <div className='Discover'>
            <div className='Detail'>
                <div className='detail'></div>
            </div>
            <div className='head'>
                <div className='heading'></div>
            </div>
            <div className='main-heading'>
                <h1  ref={combinedRef}>
                    Sophisticated
                    <span className='skincare'> skincare</span>
                </h1>
            </div>
            <p className='explanation'>
            Skinstric developed an A.I. that creates a highly-personalized routine tailored to what your skin needs.
            </p>
            <div className='experience'>
                <a href="/testing"> 
                <button className='experience-button'>
                    <span className='experience-span'>ENTER EXPERIENCE</span>
                    <div className='rotated-box '>
                    </div>
                    <span className='right-arrow'>
                        <svg className='right-svg'>
                       <path d="M8 5v14l11-7z">
                        </path> 
                        </svg>
                    </span>
                </button>
                </a>
            </div>
            <div className='left-p'>
                <p className='left-explanation'>
                Skinstric developed an A.I. that creates a
                highly-personalized routine tailored to 
                what your skin needs.
                </p>
            </div>
            <div className='left-section' style={arrowStyle(hiddenArrow === "right")}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <div  style={{position: 'fixed', top: 0,  right: 0,  bottom: 0, left: 0,  width: '100%',  height: '100%', border: '1px dotted #A0A4AB',  transform: 'rotate(45deg)', }}></div>
                    <button className='left-button' onMouseEnter={moveRight} onMouseLeave={resetPosition}>
                        <div className='left-pointer'></div>
                            <span className='left-arrow'>▶</span>
                            <span>DISCOVER A.I.</span>
                    </button>
                </div>
            </div> 
            <div className='right-section' style={arrowStyle(hiddenArrow === "left")}  >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}></div>
                <div style={{position: 'fixed', top: 0,  right: 0,  bottom: 0, left: 0,  width: '100%',  height: '100%', border: '1px dotted #A0A4AB',  transform: 'rotate(45deg)', }} ></div>
                <a href="/testing">
                <button className='take--test-button' onMouseEnter={moveLeft} onMouseLeave={resetPosition}>
                    TAKE TEST
                    <div className='left-pointer'></div>
                    <span className='take--test-arrow'>▶</span>
                </button>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Introduction
