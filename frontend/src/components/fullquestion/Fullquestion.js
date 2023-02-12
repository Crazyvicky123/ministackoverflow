import React,{useEffect, useState} from 'react'
import { RxAvatar } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import "./fullquestion.css"
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"



const Fullquestion = ({date}) => {
    const history = useNavigate();
     

    const [answerdata,answerUdata] = useState({
        questionid:"",answer:""
      });
      
      // console.log(answerdata);
      const adddata=(e)=>{
          const {name,value}=e.target;
  
          answerUdata(()=>{
              return{
                  ...answerdata,[name]:value
              }
  
          })
      }
      
      const senddata = async (e) =>{
        e.preventDefault();
        const {answer,questionid} =answerdata;
  
        const res = await fetch("/postanswer",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({answer,questionid})
        });
  
        const data1 = await res.json();
        console.log(data1);
    if(res.status === 422 ||!data1){
      alert("fill all field");
    }else{
      alert("answer added successfully");
      answerUdata({...answerdata,questionid:'',answer:''})
      history(`/postanswer/${fullquestion._id}`);
    }
      }


 // api call to fullquestion/:_id
 const [fullquestion,setFullquestion] = useState([]);
 console.log(fullquestion);
const {_id} =useParams("");
console.log(_id);
//


const getfullquestion = async()=>{
   const res = await fetch(`/fullquestion/${_id}`,{
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
},[_id]);




    const [show,setShow] = useState(false);
    return (
        <>
        
    <div className='fullquestion'>
        <div className='fullquestion-container'>
            <div className='fullquestion-top'>
                <h2 className='full-question'>{fullquestion.title}</h2>
        
                <NavLink to="/addquestion"><button>Ask Question</button></NavLink>
            </div>
            <p style={{color:"red"}}>Question Id :{fullquestion._id}</p>
            <div className='all-questions'>
                <div className='all-question-container'>
                    <div className='qanda'>
                        <p>{fullquestion.desc}</p>
                        <div className='author'>
                            <small>asked {fullquestion.created_at}</small>
                            <div className='authdetails'>
                                <RxAvatar size={25} />
                                <p>Anonymous</p>
                            </div>
                        </div>
                    </div>
                  
                  {
                            <div className='answer-posting'>
                                
                              <NavLink to={`/postanswer/${fullquestion._id}`}><button style={{marginTop:"20px",marginLeft:"35"}}>See All Answer</button></NavLink>
                        <p>please provide question id here and answer the question  :</p>
                    <input classname="questionid" name="questionid" onChange={adddata} value={answerdata.questionid}></input>
                    <p onClick={()=>setShow(!show)}>Click Here to Answer the question</p>
                    {
                        show && (
                                <div className='title3'>
                                    <textarea type="text" name="answer" placeholder="enter the answer" cols={40} row={40} onChange={adddata} value={answerdata.answer}/>
                                     <button style={{marginLeft:"10px"}} onClick={senddata} >Post</button> 

                               
                                    </div>
                                    )
                    }

                    </div>
                  }
                    
                </div>
            </div>
        </div>
      
    </div>
</>
    )
}

export default Fullquestion
