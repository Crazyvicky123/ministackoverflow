import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdFilterList} from "react-icons/md"
import Allquestions from '../Question/Allquestions'
import "./main.css"

const Main = () => {
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-top'>
            <h2>All Questions</h2>
            <NavLink to="/addquestion"><button>Ask Question</button></NavLink>
        </div>
        <div className="main-desc">
            <p>All question stat</p>
      <div className="main-filter">
      <MdFilterList size={20} />
      <p className='filter-p'>Filter</p>
             </div>
        </div>
      </div>
      <div className='questions'>
        <div className='question'>
            <Allquestions />
        </div>
      </div>
    </div>
  )
}

export default Main
