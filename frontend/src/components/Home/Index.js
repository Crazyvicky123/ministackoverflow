import React from 'react'
import Leftsidepart from '../leftsidepart/Leftsidepart'
import Main from '../Main/Main'
import "./index.css"

const Index = () => {
  return (
    <div className='stack-index'>
      <div className='content'>
      <Leftsidepart />
      <Main />
      </div>
      
    </div>
  )
}

export default Index
