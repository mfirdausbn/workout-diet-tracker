import React from 'react'
import NavBarFB from './components/NavBarFB'
import Quote from './components/Quote'
import TodayEntry from './components/TodayEntry'
import WeeklyEntries from './components/WeeklyEntries'


function App() {
  
  return (
    <>
      <div><NavBarFB /></div>

      <div className='flex justify-between mt-10'>
        <div className='w-96 m-4'><TodayEntry /></div>
        <div className='w-72 m-4'><Quote /></div>
      </div>
      <div className=''><WeeklyEntries /></div>
    </>
  )
}

export default App
