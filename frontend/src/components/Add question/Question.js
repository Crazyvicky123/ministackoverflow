import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

import "./question.css"
const Question = () => {
    const history = useNavigate();
    const [udata,setUdata] = useState({
        title:"",
        desc:"",
        tags:"",
      });
      console.log(udata);
      const adddata=(e)=>{
          const {name,value}=e.target;
  
          setUdata(()=>{
              return{
                  ...udata,[name]:value
              }
  
          })
      }
      const senddata = async (e) =>{
        e.preventDefault();
        const {title,desc,tags} =udata;
  
        const res = await fetch("askquestion",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({title,desc,tags})
        });
  
        const data = await res.json();
        console.log(data);
    if(res.status === 422 ||!data){
      alert("fill all field");
    }else{
      alert("Question added successfully");
      history("/home")
      setUdata({...udata,title:'',desc:'',tags:''})
    }
      }
  return (
    <form method="POST">
    <div className='add-question'>
        <div className="add-question-container">
            <div className='title'>
                <h1>Ask a question</h1>
            </div>
            <div className='question-container'>
                <div className='question-options'>
                    <div className='question-option'>
                        <div className='title1'>
                            <h3>Title</h3>
                            <small>Ask a question to the open world</small>
                            <input type="text" placeholder="eg:add the title" name="title"  onChange={adddata} value={udata.title}/>
                        </div>
                    </div>
                    <div className='question-option'>
                        <div className='title1'>
                            <h3>Body</h3>
                            <small>Add the more info about the above question</small>
                           <textarea name="desc" placeholder="enter the detailed information about the question" cols={40} row={40} onChange={adddata} value={udata.desc}/>
                        </div>
                    </div>
                    <div className='question-option'>
                        <div className='title1'>
                            <h3>Tags</h3>
                            <small>Add the Tags for your question</small>
                            <input name="tags" placeholder="eg:add the title" onChange={adddata} value={udata.tags}/>
                        </div>
                    </div>
                </div>
            </div>
            <button className='button' onClick={senddata}>Add your question</button>
        </div>
      
    </div>
    </form>
  )
}

export default Question
