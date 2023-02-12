import React from 'react';
import { GoSearch } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import "./header.css";


const Header = () => {



  return (
  
    <header>
      <div className="header-container">
        <div className='header-left'>
            <h4>Mini</h4>
            <p>Stackoverflow</p>
        </div>
        <div className='header-middle'>
          <div className='search-container'>
          <GoSearch />
          <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-left">
          <RxAvatar size={40} style={{cursor:"pointer",color:"grey"}}/>
        </div>

        </div>
    
    </header>
  )
}

export default Header
