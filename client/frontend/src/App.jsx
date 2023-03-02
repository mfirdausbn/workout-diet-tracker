import React from 'react'
import NavBarFB from './components/NavBarFB'
import Quote from './components/Quote'
import TodayEntry from './components/TodayEntry'
import WeeklyEntries from './components/WeeklyEntries'


function App() {
  
  return (
    <>
      <div><NavBarFB /></div>

      <div className='flex my-10'>
        <div className='w-1/2 my-4 mx-12'><TodayEntry /></div>
        <div className='w-72 my-4 mx-48'><Quote /></div>
      </div>
      <div className=''><WeeklyEntries /></div>
    </>
  )
}

export default App
