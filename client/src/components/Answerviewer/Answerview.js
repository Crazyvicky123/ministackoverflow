import React from 'react'
import { RxAvatar } from 'react-icons/rx'
import {useParams} from "react-router-dom"
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'






const Answerview = () => {

const [fullquestion,setFullquestion] = useState([]);
 console.log(fullquestion);
const {questionid} =useParams("");
//


const getfullquestion = async()=>{
   const res = await fetch(`https://mini-stack-overflow.onrender.com/postanswer/${questionid}`,{
       method:'GET',
       headers:{
           "Content-Type":"application/json"
       }
   });
   const data =await res.json();
  console.log(data)
  if(res.status !== 201){
   console.log("no data available");
  }
  else{
   console.log("getdata");
   setFullquestion(data);
  }
}
useEffect(()=>{
getfullquestion();
},[questionid]);

    return (
        <>
        {
            fullquestion.map(e=>{
                return(
       
            <div className='all-answer'>
                <div className='qanda'>
                <p>Answered by anonymous     :</p>
                <p>{e.answer} </p>
                    <div className='author'>
                        <small>said by {e.created_at}</small>
                        <div className='authdetails'>
                            <RxAvatar size={25} />
                            <p>anonymous</p>
                        </div>
                    </div>
                </div>

            </div>
             )
                
            })
        }

            <div className='answer-posting'>
                <NavLink to="/home"><button style={{marginTop:"10px",marginLeft:"40%"}}>Click here to go to Home page</button></NavLink>
            </div>


        </>
    )
}

export default Answerview

