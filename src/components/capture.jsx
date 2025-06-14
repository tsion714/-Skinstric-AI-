import React, { useRef, useEffect, useState } from 'react';
import leftbracket from '../Assets/Rectangle 2710.png';
import rightbracket from '../Assets/Rectangle 2711.png';
import '../css/capture.css';
import capture from '../Assets/Group 40037.png'


const Capture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState('');
  const [capturedImage, setCapturedImage] = useState(() => localStorage.getItem('capturedImage'));
  const [justCaptured, setJustCaptured] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play().catch(e => console.error('play error:', e));
          };
        }
      })
      .catch(err => setError(err.message));
  
    return () => {
      videoRef.current?.srcObject?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataURL = canvas.toDataURL('image/png');
      setCapturedImage(imageDataURL);
      setJustCaptured(true);
      localStorage.setItem('capturedImage', imageDataURL);
      video.pause();
    }
  };

  return (
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
      <div style={{height:'90vh', width:'100vw'}}>
        <div style={{ position: 'relative', width: '100vw', height: '92vh',overflow: 'hidden',backgroundColor: '#1a202c',}}>
    <div style={{ position: 'absolute',top: 0, right: 0, bottom: 0,left: 0, zIndex: 10,}} >
    <canvas ref={canvasRef} style={{ display: 'none' }} />
    <>
    <video
      ref={videoRef}
      autoPlay
      playsInline
      style={{position: 'absolute',top: 0, right: 0, bottom: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',}}
    />
    {capturedImage && (
    <img
      src={capturedImage}
      alt="Captured"
      style={{ width: '100%', display: capturedImage ? 'block' : 'none' }}
    /> 
    )}
    <img src={capturedImage} alt="Captured" style={{ width: '100%' }} />
<div style={{position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)',zIndex: 20, display: 'flex', alignItems: 'center', gap: '0.75rem',}}>
<div style={{ fontWeight: 600,fontSize: '0.875rem', letterSpacing: '-0.025em', lineHeight: '14px',color: '#FCFCFC',display: 'none', }}>TAKE PICTURE</div>
<div className='takepicture'>
{!justCaptured && (
<img style={{width: '64px', height: '64px', cursor:'pointer'}} src={capture} alt="" onClick={handleCapture}/>
)}
</div>
</div>
</>
       {!justCaptured ? (
<div className='capture-footer'>
<p style={{fontSize:'14px', marginBottom:'8px', fontWeight:'400', lineHeight:'24px', color:'#FCFCFC'}}>TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
<div style={{display:'flex', justifyContent: 'center', gap: '32px', fontSize: '12px', lineHeight: '24px', alignItems:'center'}}>
   <p style={{color: '#FCFCFC',}}>◇ NEUTRAL EXPRESSION</p> 
   <p style={{color: '#FCFCFC',}}>◇ FRONTAL POSE</p> 
   <p style={{color: '#FCFCFC',}}>◇ ADEQUATE LIGHTING</p> 
</div>
</div>
       ) : ( 
        <>
        <div style={{position:'absolute', top:'160px', fontSize:'14px', lineHeight:'24px', color:'#FCFCFC', textAlign:'center', left:'45%'}}>
         Great Shot! 
       </div>
       <div className='capture-preview'>
        <h2 className='capture-h2'>
          Preview
        </h2>
        <div style={{ display:'flex', justifyContent:'center', gap: '24px'}}>
          <button className='retake-pic'>Retake</button>
          <button className='usePhoto'>Use This Photo</button>
        </div>
       </div>
       </>
       )}
    </div>
    <div className='capturebottom'>
            <a href="/result">
        <div>
          <div style={{border:'1px solid #FCFCFC'}} className='back'>
            <span style={{color: '#FCFCFC',}} className='back-button'>BACK</span>
          </div>
          <div  className='bigscreen-back'>
            <div style={{border:'1px solid #FCFCFC'}} className='diamond'></div>
            <span style={{color: '#FCFCFC'}} className='back-arrow'>▶</span>
            <span style={{color: '#FCFCFC'}} className='back-span' >BACK</span>
          </div>
        </div>
        </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Capture
