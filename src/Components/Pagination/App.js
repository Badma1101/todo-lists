import React from 'react'
import PaginationTest from './data'
import './styles.css';
import DigitalClock from '../Digital-Clock';
import CountdownTimerTest from '../countdown-timer/test';
import StepProgressBarTest from '../Step-Progress-Bar/text';
// import RandomQuoteGenerator from '../Random-Quote';
import LoadMoreButton from '../Load-More-Button';

export default function App() {
  return (
    <div className='App'>
        <h1 className='title'> 25 react Js project</h1>
        <PaginationTest />
        <DigitalClock />
        <CountdownTimerTest />
        <StepProgressBarTest />
        <LoadMoreButton />
        {/* <RandomQuoteGenerator /> */}
    </div>
  )
}
