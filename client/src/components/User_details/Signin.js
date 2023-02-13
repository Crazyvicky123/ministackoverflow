import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import "./signin.css"
import {useNavigate} from "react-router-dom"

const Signin = () => {
  const history = useNavigate();

  const [logdata,setData] = useState({
    email:"",
    password:""

});
console.log(logdata);
const adddata =(e) =>{
  const {name,value} =e.target;

  setData(()=>{
    return{
      ...logdata,[name]:value
    }
  })

};

const senddata = async (e) =>{
  e.preventDefault();
  const {email,password} =logdata;

  const res = await fetch("https://mini-stack-overflow.onrender.com/signin",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email,password})
  });

  const data = await res.json();
  if(!data || res.status === 400)
  {
    alert("invalid details");
  }
else{
  alert("successfully signed");
    history("/home")
    setData({...logdata,email:"",password:""});
  
}
}
  return (
    <section>
    <div className="sign_container">
      <div className="sign_form">
        <form method="POST">
          <h1  className="h1">Sign-In</h1>
          <div className="form_data">
            <label htmlFor='email' className="label">Email</label>
            <input type="text" name="email" id="email" onChange={adddata} value={logdata.email}/>
          </div>
          <div className="form_data">
            <label htmlFor='password' className="label">Password</label>
            <input type="password" name="password" id="password" placeholder="at least 6 character"  onChange={adddata} vlaue={logdata.password}/>
          </div>
          <button className="signin_btn" onClick={senddata}>Continue</button>
        </form>

      </div>
      <div className="create_accountinfo">
        <p className="p1">New to Ministackoverflow</p>
        <NavLink to="/"><button className="button2">Create Your Account</button></NavLink>
      </div>
    
    </div>
    </section>
      
  )
}

export default Signin

