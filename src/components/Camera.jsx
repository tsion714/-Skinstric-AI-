import React, { useEffect } from 'react'
import largediamond from '../Assets/Rectangle 2780.png';
import mediumdiamond from '../Assets/Rectangle 2779.png';
import smalldiamond from '../Assets/Rectangle 2778.png';
import camera from '../Assets/camera.png'
import '../css/Camera.css';
import leftbracket from '../Assets/Rectangle 2710.png';
import rightbracket from '../Assets/Rectangle 2711.png';
import { useNavigate } from 'react-router-dom';


const Camera = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/camera/capture');
      }, 5000); 
  
      return () => clearTimeout(timer); 
    }, [navigate]);
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
       <div className="click-to-type"  style={{ height: '65vh', display: 'flex',  backgroundColor: 'white',  flexDirection: 'column',  justifyContent: 'center',  alignItems: 'center'  }} >
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '70vh', overflow: 'auto'}} >
<div style={{ flex: '0 1 auto', display: 'flex',flexDirection: 'column',alignItems: 'center', justifyContent: 'center', position: 'relative',}}>
<div className='camerapage-box'></div>
<img src={largediamond} alt="Large-Diamond" className="large-diamond" />
    <img src={mediumdiamond} alt="Medium-Diamond" className="Medium-diamond" />
    <img src={smalldiamond} alt="Small-Diamond" className="Small-diamond" />
    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0,left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}}>
<img  className='camera'src={camera} alt=""/>
    <p  style={{ position: 'absolute', fontWeight: 600, fontSize: '14px',lineHeight: '24px',letterSpacing: '-0.01562em',transform: 'translateY(5.5rem)',}}>
      SETTING UP CAMERA ...
    </p>
    </div>
</div>
<div style={{ marginTop: '20%', textAlign: 'center'}}>
<p className='getbetter-results'>TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
<div style={{display: 'flex', justifyContent: 'center', gap: '2rem',
}}>
   <p className='expression-p'>◇ NEUTRAL EXPRESSION</p> 
   <p className='expression-p'>◇ FRONTAL POSE</p> 
   <p className='expression-p'>◇ ADEQUATE LIGHTING</p> 
</div>
</div>
    </div>
  </div>
    </div>
  )
}

export default Camera
