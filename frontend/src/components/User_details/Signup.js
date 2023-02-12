import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

const Signup = () => {

    const [udata,setUdata] = useState({
      name:"",
      email:"",
      password:"",
      cpassword:""
    });
    const history = useNavigate();
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
      const {name,email,password,cpassword} =udata;

      const res = await fetch("https://ministackoverflow-mini.onrender.com/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,email,password,cpassword})
      });
      const data = await res.json();
  if(res.status === 422 ||!data){
    alert("no data");
  }
  else{
    alert("data added successfully");
    setUdata({...udata,name:"",email:'',password:"",cpassword:''})
    history("/home");
  }
    }
  return (
    <section>
    <div className="sign_container">
      <div className="sign_form">
        <form method="POST">
          <h1  className="h1">Sign-In</h1>
          <div className="form_data">
            <label htmlFor='name' className="label">Name</label>
            <input type="text" name="name" id="name" onChange={adddata} value={udata.name}/>
          </div>
          <div className="form_data">
            <label htmlFor='email' className="label">Email</label>
            <input type="text" name="email" id="email" onChange={adddata} value={udata.email}/>
          </div>
          <div className="form_data">
            <label htmlFor='password' className="label">Password</label>
            <input type="password" name="password" id="password" placeholder="at least 6 character" onChange={adddata}
            value={udata.password}/>
          </div>
          <div className="form_data">
            <label htmlFor='cpassword' className="label">confirm Password</label>
            <input type="password" name="cpassword" id="cpassword" onChange={adddata} value={udata.cpassword}/>
          </div>
          <button className="signin_btn" onClick={senddata}>Continue</button>
        </form>

      </div>
      <div className="create_accountinfo">
        <p className="p1">Have an Acoount</p>
        <NavLink to="/signin"><button className="button2">Sign in</button></NavLink>
      </div>
    
    </div>
    </section>
  )
}

export default Signup
