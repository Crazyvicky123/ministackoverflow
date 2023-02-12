import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sidepart.css"
const Leftsidepart = () => {
  return (
    <div className='leftside-part'>
        <div className='leftside-container'>
            <div className='option'>
                <NavLink to="/home" className="homeoption">Home</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Leftsidepart
