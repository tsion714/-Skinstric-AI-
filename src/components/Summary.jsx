import React, { useEffect, useState } from 'react'
import leftbracket from '../Assets/Rectangle 2710.png';
import rightbracket from '../Assets/Rectangle 2711.png';
import '../css/summary.css';
import ratioButton from '../Assets/radio-button (1).png'
import blackRatioButton from '../Assets/radio-button.png'

const CircleProgress = ({ percent = 0 }) => {
    const stroke = 8;
    const size = 384; 
    const radius = (size - stroke) / 2; 
    const circumference = 2 * Math.PI * radius;
  
    const safePercent =
      typeof percent === 'number' && !isNaN(percent)
        ? Math.min(100, Math.max(0, percent))
        : 0;
  
    const offset = circumference * (1 - safePercent / 100);
  
    return (
      <div
        style={{
          width: '95%',
          height: '95%',
          maxHeight: '384px',
          position: 'relative',
          transform: 'scale(1)',
          transformOrigin: 'center center',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${size} ${size}`}
          style={{ display: 'block', marginBottom: '20px' }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#eee"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="black"
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset.toString()}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeLinecap="round"
          />
          <text
            x={size / 2}
            y={size / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={size / 9} 
            fontWeight="normal"
            fill="#000"
          >
            {safePercent}%
          </text>
        </svg>
      </div>
    );
  };
  
const Summary = () => {
        const [analysis, setAnalysis] = useState(null);
      
        useEffect(() => {
          const saved = localStorage.getItem('analysisResult');
          if (saved) setAnalysis(JSON.parse(saved));
        }, []);
      
        const getTopRace = (race) =>
          race && typeof race === 'object'
            ? Object.entries(race).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
            : 'Unknown';
            const topRacePercent = analysis?.race
            ? Math.ceil(Math.max(...Object.values(analysis.race)) * 100)
            : 0;

            const getSortedRacesWithPercent = (race) =>
              race && typeof race === 'object'
                ? Object.entries(race)
                    .sort((a, b) => b[1] - a[1])
                    .map(([name, val]) => ({ name, percent: Math.ceil(val * 100) }))
                : [];  

const sortedRaces = getSortedRacesWithPercent(analysis?.race);
const sortedAges = getSortedRacesWithPercent(analysis?.age); 
const sortedGender = getSortedRacesWithPercent(analysis?.gender); 
const [activeType, setActiveType] = useState('race');
const [selectedRace, setSelectedRace] = useState({ name: 'Unknown', percent: 0 });
const raceList = sortedRaces.slice(0, 7);


const [selectedAge, setSelectedAge] = useState({ name: 'Unknown', percent: 0 });
const ageList = sortedAges.slice(0, 7);


const [selectedGender, setSelectedGender] = useState({ name: 'Unknown', percent: 0 });
const GenderList = sortedGender.slice(0, 7);



useEffect(() => {
  if (sortedRaces.length > 0) setSelectedRace(sortedRaces[0]);
  if (sortedAges.length > 0) setSelectedAge(sortedAges[0]);
  if (sortedGender.length > 0) setSelectedGender(sortedGender[0]);
}, [analysis?.race, analysis?.age, analysis?.Gender]);

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
          <div className='summary'>
            <main className='main-summary'>
                <div className='summary-container'>
                    <div className='summary-head'>
                        <h1 className='summary-h1'> A.I. ANALYSIS</h1>
                        <h3 className='summary-h3'>DEMOGRAPHICS</h3>
                        <h4 style={{ fontWeight:'normal', fontSize: '14px',   lineHeight: '20px',  marginTop: '8px', }}>PREDICTED RACE & AGE</h4>
                    </div>
                    {analysis && (
                    <div className='demographics-head'>
                        <div className='demogrpahics-race'>
                            <div style={{background:activeType === 'race' ? 'black' : '#F3F3F4',}}className='summery-race'  onClick={() => {setSelectedRace(sortedRaces[0]); setActiveType('race')}}>
                                <p style={{fontSize: '16px', lineHeight:'24px', marginBottom: '4px',textTransform: 'uppercase', color: activeType === 'race' ? 'white' : 'black',}}>{getTopRace(analysis.race)}</p>
                                <p style={{ fontSize:'16px', lineHeight:'24px',  marginBottom: '4px',  color: activeType === 'race' ? 'white' : 'black',}}>RACE</p>
                            </div>
                            <div style={{background:activeType === 'age' ? 'black' : '#F3F3F4',}}className='summery-age' onClick={() => { setSelectedAge(sortedAges[0]);setActiveType('age');}}>
                            <p style={{fontSize: '16px', lineHeight:'24px', marginBottom: '4px', color: activeType === 'age' ? 'white' : 'black',}}>{getTopRace(analysis.age)}</p>
                            <p style={{ fontSize:'16px', lineHeight:'24px', marginBottom: '4px',  color: activeType === 'age' ? 'white' : 'black',}}>AGE</p>
                            </div>
                            <div style={{background:activeType === 'gender' ? 'black' : '#F3F3F4',}} className='summery-age' onClick={() => {setSelectedGender(sortedGender[0]); setActiveType('gender')}}>
                            <p style={{fontSize: '16px', lineHeight:'24px', marginBottom: '4px', textTransform: 'uppercase',  color: activeType === 'gender' ? 'white' : 'black', }}>{getTopRace(analysis.gender)}</p>
                            <p style={{ fontSize:'16px', lineHeight:'24px', marginBottom: '4px', color: activeType === 'gender' ? 'white' : 'black',}}>SEX</p>
                            </div>
                        </div>
                        <div className='percentage'>
                        <p className='percentage-race'>{activeType === 'race' ? selectedRace.name : activeType === 'age' ? `${selectedAge.name} y.o.`  : selectedGender.name}</p>
                        <div className='race-container'>
                            <div  style={{ width: '100%',height: '100%',maxHeight: '384px',position: 'relative',transform: 'scale(1)', transformOrigin: 'center center', }}>
                            <CircleProgress percent={activeType === 'race' ? selectedRace.percent : activeType === 'age' ? selectedAge.percent : selectedGender.percent} />
                            </div>
                            </div>
                            <p className='percentage-p'>  If A.I. estimate is wrong, select the correct one. </p>
                            </div>
                            <div className='AI-confidence-container'>
                              <div style={{marginTop:'0'}}>
                                <div style={{ display:'flex', justifyContent:'space-between', paddingLeft:'16px', paddingRight:'16px'}}>
                                  <h4 style={{fontSize:'16px', lineHeight:'24px', fontWeight:'500', marginBottom:'0.5rem', letterSpacing:'-0.01562em' }}>RACE</h4>
                                  <h4 style={{fontSize:'16px', lineHeight:'24px', letterSpacing:'-0.025em', fontWeight:'500', marginBottom:'0.5rem'}}>A.I.CONFIDENCE</h4>
                                </div>
                                {(activeType === 'race' ? raceList : activeType === 'age' ? ageList : GenderList).map(({ name, percent }, index) => (
                           <div  key={name} className={ (activeType === 'race' && selectedRace.name === name) ||
                                                      (activeType === 'age' && selectedAge.name === name) ||
                                                      (activeType === 'gender' && selectedGender.name === name)
                                                      ? 'highest-percentage'
                                                      : 'second-percentage'
                                                        }
                           onClick={() => {
                           if (activeType === 'race') { setSelectedRace({ name, percent }); } else if (activeType === 'age') { setSelectedAge({ name, percent }); } 
                           else if (activeType === 'gender') { setSelectedGender({ name, percent }); }  }} >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                         <img style={{ width: '12px', height: '12px', marginRight: '8px' }} src= {(activeType === 'race' && selectedRace.name === name) ||
                             (activeType === 'age' && selectedAge.name === name) ||
                             (activeType === 'gender' && selectedGender.name === name)
                             ? ratioButton
                               : blackRatioButton
                              }alt=""/>
                         <span style={{ color: (activeType === 'race' && selectedRace.name === name) ||
                                         (activeType === 'age' && selectedAge.name === name) ||
                                         (activeType === 'gender' && selectedGender.name === name)
                                        ? 'white'
                                        : 'black', fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.025em' }}>  {name} </span>
                          </div>
                          <span style={{ color: (activeType === 'race' && selectedRace.name === name) ||
                                         (activeType === 'age' && selectedAge.name === name) ||
                                         (activeType === 'gender' && selectedGender.name === name)
                                        ? 'white'
                                        : 'black', fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.025em' }}> {percent}%  </span>
                           </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    )}
                     <div className='summery-bottom'>
                      <div className='summerybottom-container'>
        <a href="/select">
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
        <a style={{ display: 'inline-block' }} href="/">
        <div className='invisible'>
          <div>
            <div className='Procced'>
            <span className='Procced-button'>HOME</span>
            </div>
          </div>
          <div className='bigscreen-proceed'>
          <span className='proceed-span' >HOME</span>
            <div className='diamond'></div>
            <span className='proceed-arrow'>▶</span>
          </div>
        </div>
        </a>
        </div>
      </div>
                </div>
            </main>
          </div>
   </>
  )
}

export default Summary
