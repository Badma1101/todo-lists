import React from 'react'
import CountdownTimer from '.'
import './timer.css'

function CountdownTimerTest() {
    function handleTimeFinish() {
        console.log('once the timer is finish');
        
    }
  return (
    <div className='Countdown-timer-container'>
        Countdown Timer
        <CountdownTimer initialTime={120} onTimeFinish={handleTimeFinish}/>
        </div>
        
  )
}

export default CountdownTimerTest