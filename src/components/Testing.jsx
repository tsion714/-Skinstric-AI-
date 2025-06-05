import React, { useState } from 'react';
import leftbracket from '../Assets/Rectangle 2710.png';
import rightbracket from '../Assets/Rectangle 2711.png';
import '../css/testing.css';
import axios from 'axios';
import largediamond from '../Assets/Rectangle 2780.png';
import mediumdiamond from '../Assets/Rectangle 2779.png';
import smalldiamond from '../Assets/Rectangle 2778.png';
const Testing = () => {
  const [step, setStep] = useState(1);       
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [processing, setProcessing] = useState(false); 
  const [done, setDone] = useState(false);


  const isValidInput = (val) => /^[A-Za-z\s'-]+$/.test(val.trim());

  const handleSubmit = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = inputValue.trim();
      if (!value || !isValidInput(value) || processing) return;

      if (step === 1) {
        setName(value);
        localStorage.setItem('name', value);
        setInputValue('');
        setStep(2);
      } else if (step === 2) {
        setLocation(value);
        localStorage.setItem('location', value);
        setInputValue('');
        setProcessing(true);

      try {
          await axios.post('https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne', { name, location: value });
          setTimeout(() => {
            setProcessing(false);
            setDone(true);
            setStep(3);
          }, 3000);
      } catch (err) {
        console.error('Submission failed:', err);
        setProcessing(false);
        }
      }
    }
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
    <div className='background'>
      <div className='start-analysis'>
        <p className='start-analysis-p'>TO START ANALYSIS</p>
      </div>
      <div className='click-to-type'>
      {processing && (
          <p className='click-to--type-p'>Processing...</p>
        )}

        {!processing && !done && step < 3 && (
          <p className='click-to--type-p'>CLICK TO TYPE</p>
        )}

        {done && (
          <p className='click-to--type-p'>Thank you!</p>
        )}
        <form style={{position: "relative", zIndex: "10"}} action="">
          <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}></div>
          {step < 3 && !processing && (
              <input
                autoFocus
                autoComplete='off'
                className='Introduction-input'
                placeholder={
                  step === 1
                    ? 'Introduce Yourself'
                    : 'your city name'
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleSubmit}
              />
            )}
             {done && <p className='proceed-message'>Proceed to the next step</p>}
          <button type='submit' className='submit-button'>Submit</button>
        </form>
        <img src={largediamond} alt="Large-Diamond" className='large-diamond'/>
        <img src={mediumdiamond} alt="Medium-Diamond" className='Medium-diamond' />
        <img src={smalldiamond}alt="Small-Diamond" className='Small-diamond' />
      </div>
      <div className='testing-bottom'>
        <a href="/">
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
        {done && (
        <a style={{ display: 'inline-block' }} href="/result">
        <div className='invisible'>
          <div>
            <div className='Procced'>
            <span className='Procced-button'>PROCEED</span>
            </div>
          </div>
          <div className='bigscreen-proceed'>
          <span className='proceed-span' >PROCEED</span>
            <div className='diamond'></div>
            <span className='proceed-arrow'>▶</span>
          </div>
        </div>
        </a>
        )}
      </div>
    </div>
    </>
  )
}

export default Testing
