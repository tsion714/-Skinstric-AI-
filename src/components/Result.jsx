import React, { useEffect, useRef, useState } from 'react'
import leftbracket from '../Assets/Rectangle 2710.png';
import rightbracket from '../Assets/Rectangle 2711.png';
import '../css/result.css';
import largediamond from '../Assets/Rectangle 2780.png';
import mediumdiamond from '../Assets/Rectangle 2779.png';
import smalldiamond from '../Assets/Rectangle 2778.png';
import camera from '../Assets/camera.png'
import galllery from '../Assets/gallery-icon.png'
import scanline from '../Assets/Vector 1.png'
import leftscanline from '../Assets/Union.png'
import axios from 'axios';

const Result = () => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysisDone, setAnalysisDone] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);


  const handlePick = () => {
    inputRef.current.click();
  };

  const handleTakePhoto = async () => {
    setShowPermissionModal(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      const video = document.createElement('video');
      const canvas = document.createElement('canvas');
      video.srcObject = stream;
      await video.play();
  
      video.onloadedmetadata = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        setTimeout(() => {
          canvas.getContext('2d').drawImage(video, 0, 0);
          const base64 = canvas.toDataURL('image/png');
          stream.getTracks().forEach(track => track.stop());
          setPreview(base64);
          localStorage.setItem('previewImage', base64);
          sendToAPI(base64);
        }, 1000);
      };
    } catch (err) {
      console.error('Camera access denied or failed:', err);
    }
  };
  


const handleAllow = () => {
  setShowPermissionModal(false);
  window.location.href = '/camera';
  };
 
const handleDeny = () => {
  setShowPermissionModal(false);
};
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    setLoading(true);
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onloadend = async () => {
      const base64 = reader.result;
      localStorage.setItem('previewImage', base64);
      setPreview(base64);
      sendToAPI(base64);
    };
  };
  const sendToAPI = async (base64) => {
      try {
        const res = await axios.post('https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo', {image:base64});
        console.log('Full API response:', res.data); 
        const { age, gender, race } = res.data.data;
        localStorage.setItem('analysisResult', JSON.stringify({ age, gender, race }));
        console.log('Analysis Result:', { age, gender, race });
        setAnalysisDone(true);
      } catch (err) {
        console.error('Analysis failed:', err);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);

    };

  const handleOkClick = () => {
    window.location.href = '/select';
  };

  return (
    <>
    {loading ? (
  <div
    className="click-to-type"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#fff',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <p className="click-to--type-p" style={{ fontSize: '18px', marginBottom: '20px' }}>
      Preparing your analysis...
    </p>
    <img src={largediamond} alt="Large-Diamond" className="large-diamond" />
    <img src={mediumdiamond} alt="Medium-Diamond" className="Medium-diamond" />
    <img src={smalldiamond} alt="Small-Diamond" className="Small-diamond" />
  </div>
) : (
  <div>
    <div className='header'>
         <div className='pt-1'>
           <a className='skinstric' href='/'>SKINSTRIC</a>
               <img className='rectangle2710' src={leftbracket} alt="" />
               <p className='Intro'>INTRO</p>
               <img className='rectangle2711' src={rightbracket} alt="" />
         </div>
         <button className='button-simple'>ENTER CODE</button>
       </div>
       <div style={{ filter: showPermissionModal ? 'blur(1px)' : 'none', transition: 'filter 0.3s ease'}} className='result-background'>
         <div className='start-analysis'>
           <p className='start-analysis-p'>TO START ANALYSIS</p>
         </div>
       
         <div className='scan-face'>
            <div className='scan-your-face'>
                <div className='result-diamond' ></div>
                <img className='result-largediamond' src={largediamond} alt="Large-Diamond"/>
               <img className='result-mediumiamond' src={mediumdiamond} alt="Medium-Diamond"/>
               <img className='result-smalldiamond'src={smalldiamond}alt="Small-Diamond" />
               <div style={{position: 'absolute', width: '270px', height: '270px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
                <img  className='camera'src={camera} alt="" onClick={() => setShowPermissionModal(true)} />
                <div className='allow-ai'>
                    <p className='allowai-p'>
                      ALLOW A.I. 
                      <br/> 
                      TO SCAN YOUR FACE
                      </p>
                    <img className='scanline' src={scanline} alt="" />
                </div>
               </div>
            </div>
            <div className='left-scan-your-face'>
                <div className='result-diamond' ></div>
                <img className='result-largediamond' src={largediamond} alt="Large-Diamond"/>
               <img className='result-mediumiamond' src={mediumdiamond} alt="Medium-Diamond"/>
               <img className='result-smalldiamond'src={smalldiamond}alt="Small-Diamond" />
               <div style={{position: 'absolute', display: 'flex', width: '270px', height: '270px',flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
                <img  className='galllery'src={galllery}    alt="Gallery"  onClick={handlePick}/>
                <div className='left-allow-ai'>
                    <p className='left-allowai-p'>
                      ALLOW A.I. 
                      <br/>
                      ACCESS GALLERY
                      </p>
                    <img className='left-scanline' src={leftscanline} alt="" />
                </div>
               </div>
            </div>
            
            <div style={{
              position: 'absolute',
               top: '-75px',
               right: '28px',
               opacity: 0.5,
               transition: 'opacity 300ms'
              }}>
                <h1 style={{ all:'unset',fontSize: '12px', marginBottom:'4px'}}>Preview</h1>
                <div style={{
                 width: '96px',
                 height: '96px',
                 border: '1px solid #D1D5DB', 
                 overflow: 'hidden'
                }}>
                      <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
            </div>
            <input ref={inputRef} accept='image/*' style={{display: 'none'}} type='file' onChange={handleChange}></input>
          </div>
          <div className='result--back-button'>
            <div className='testing-bottom'>
            <a style={{position: 'relative'}} href="/testing">
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
            </div>
          </div>
         </div>
</div>
)}
    {analysisDone && (
  <>
    <div className="overlay-blur" />
    <div className="analysis-modal">
      <p style={{color: '#fff'}}>Image analyzed successfully!</p>
      <button onClick={handleOkClick}>OK</button>
    </div>
  </>
)}
{showPermissionModal && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
    }}
  >
    <div style={{ backgroundColor: '#1A1B1C', paddingTop: '16px', paddingBottom: '8px',}}>
      <h2 style={{ color: '#FCFCFC',  fontSize: '16px', fontWeight: 600, marginBottom: '48px', lineHeight: '24px',  paddingLeft: '16px',paddingRight: '16px' }}>ALLOW A.I. TO ACCESS YOUR CAMERA.</h2>
      <div style={{ display: 'flex',  marginTop: '16px', borderTop: '1px solid #FCFCFC', paddingTop: '8px' }}  >
      <button onClick={handleDeny} style={{  backgroundColor: '#1A1B1C',  paddingLeft: '28px', paddingRight: '28px', transform: 'translateX(45px)', color: '#fcfcfca1',  fontWeight: 400, fontSize: '14px', lineHeight: '16px', letterSpacing: '-0.01562em',cursor: 'pointer' }}>Deny</button>
      <button onClick={handleAllow} style={{  backgroundColor: '#1A1B1C', paddingLeft: '20px', paddingRight: '20px', transform: 'translateX(45px)', color: '#fcfcfc',  fontWeight: 600, fontSize: '14px', lineHeight: '16px', letterSpacing: '-0.01562em',cursor: 'pointer' }}>Allow</button>
      </div>
    </div>
  </div>
)}
         </>
  )
}

export default Result
