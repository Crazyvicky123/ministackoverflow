import React ,{useState,useEffect}from 'react'
import { NavLink } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";
import "./allquestions.css"


const Allquestions = () => {


  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("/question",{
      method:"GET",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,"allquestion");
      setData(data.data)
    })
  },[]);


  return (
    <>
    {data.map(e=>{
      return(
        <div className="allg-questions">
      <div className="all-questionsg-container">
        <div>
        <div className='qganda'>
        
          <NavLink to={`/fullquestion/${e._id}`}>{e.title}</NavLink>
          
          
          <div style={{width:"90%"}}>
            <div className='question-desc'>{e.desc}</div>
          </div>
          <div style={{display:"flex"}}>
            <span className='question-tags'>
            {e.tags}
            </span>
          </div>
          <div className='author'>
            <small>Posted at {e.created_at}</small>
            <div className='details'>
              < RxAvatar size={30}/>
              <p>user name</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      
    </div>
      )
    })}
    
    </>
  )
}

export default Allquestions
