import React, { useEffect, useState } from 'react'
import leftbracket from '../Assets/Rectangle 2710.png';
import rightbracket from '../Assets/Rectangle 2711.png';
import '../css/select.css';
import smalldiamond from '../Assets/Rectangle 2778.png';
import mediumdiamond from '../Assets/Rectangle 2779.png';
import largediamond from '../Assets/Rectangle 2780.png';

const Select = () => {
  const [analysis, setAnalysis] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const savedAnalysis = localStorage.getItem('analysisResult');
    const savedImage = localStorage.getItem('previewImage');

    if (savedAnalysis) {
      setAnalysis(JSON.parse(savedAnalysis));
      console.log('Loaded Analysis:', JSON.parse(savedAnalysis));
    }

    if (savedImage) {
      setPreviewImage(savedImage);
    }
  }, []);
  return (
    <div>
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
       <div>
        <div style={{ position: 'absolute', top: '40px',  left: '32px', textAlign: 'left', marginTop: '20px'}}>
          <h1  style={{ all:'unset', fontSize: '16px', fontWeight: 600,  lineHeight: '24px',  letterSpacing: '-0.4px'}}>A.I. ANALYSIS</h1>
          <p className='select-p'>
            A.I. has estimated the following.
            <br/>
            Fix estimated information if needed. 
          </p>
        </div>
        <div style={{  height: '78.3vh',  display: 'flex', flexDirection: 'column', alignItems: 'center',  justifyContent: 'center',  backgroundColor: 'white'}}>
          <div style={{position: 'relative', width:'341.625px', height:'341.625px'}}>
            <div style={{ position: 'absolute',  top: 0, right: 0,  bottom: 0,  left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',  pointerEvents: 'none'}}>
              <div   style={{  position: 'absolute',  transitionProperty: 'all',  transitionDuration: '400ms', width: '400px',  height: '400px',  opacity: 0 }}>
                <img style={{ position: 'absolute',  height: '100%',  width: '100%',  inset: 0,  objectFit: 'contain',  color: 'transparent'}}src={smalldiamond} alt="" />
              </div>
            </div>
            <div style={{ width:'341.625px', height:'341.625px',  display: 'flex',  flexDirection: 'column',  alignItems: 'center',  justifyContent: 'center', backgroundColor: 'white'}}>
              <div style={{  position: 'absolute',  transitionProperty: 'all',  transitionDuration: '400ms',  width: '400px',  height: '400px',  opacity: 0,}}>
                <img style={{  position: 'absolute',  height: '100%', width: '100%',  inset: 0, objectFit: 'contain', color: 'transparent',}} src={mediumdiamond} alt="" />
              </div>
            </div>
            <div style={{ width:'341.625px', height:'341.625px', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, display: 'flex',  alignItems: 'center', justifyContent: 'center',  pointerEvents: 'none',}} >
              <div style={{  position: 'absolute', transitionProperty: 'all', transitionDuration: '400ms',  width: '400px',  height: '400px',  opacity: 0,}}>
                <img style={{  position: 'absolute',  height: '100%',  width: '100%', inset: 0, objectFit: 'contain',  color: 'transparent', }} src={largediamond} alt="" /> 
              </div>
            </div>
            <div style={{  inset: '0px', position: 'absolute', zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: 0, width: '341.625px', height: '341.625px'}}>
              <div style={{  display: 'flex',  alignItems: 'center',  justifyContent: 'center',  gridColumnStart: 2,}}>
                <a href="/summary">
                <button className='button-demographics'>
                  <span className='span-demofraphics'>Demographics</span>
                </button>
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gridRowStart: 2, gridColumnStart: 1,}}>
              <button className='button-Cosmotiic'>
                  <span className='span-Cosmotiic'>Cosmotiic concerns</span>
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', gridRowStart: 2, gridColumnStart: 3,}}>
                <button className='button-Skin'>
                  <span className='button-skintype'>
                    Skin Type Details
                  </span>
                </button>
              </div>
              <div style={{  display: 'flex',  alignItems: 'center',  justifyContent: 'center',  gridRowStart: 3,  gridColumnStart: 2,}}>
              <button className='button-weather'>
                  <span className='span-weather'>
                    Weather
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className='testing-bottom'>
        <a href="/testing">
        <div>
          <div className='back'>
            <span className='back-button'>BACK</span>
          </div>
          <div className='bigscreen-back'>
            <div className='diamond'></div>
            <span className='back-arrow'>▶</span>
            <span className='back-span' >BACK</span>
          </div>
        </div>
        </a>
        <a style={{ display: 'inline-block' }} href="/summary">
        <div className='invisible'>
          <div>
            <div className='Procced'>
            <span className='Procced-button'>SUM</span>
            </div>
          </div>
          <div className='bigscreen-proceed'>
          <span className='proceed-span' >GET SUMMARY</span>
            <div className='diamond'></div>
            <span className='proceed-arrow'>▶</span>
          </div>
        </div>
        </a>
      </div>
        </div>
       </div>
      </>
    </div>
  )
}

export default Select
