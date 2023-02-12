import React from 'react'
import Header from './components/header/Header'
import {Routes,Route} from "react-router-dom"
import Index from './components/Home/Index'
import Question from './components/Add question/Question'
import Indexfull from './components/fullquestion/Indexfull'
import Signin from './components/User_details/Signin'
import Signup from './components/User_details/Signup'
import Answerview from './components/Answerviewer/Answerview'

const App = () => {

  return (
<>
<Header />

<Routes>
<Route path="https://mini-stack-overflow.onrender.com/signin" element={<Signin />} />
<Route path="https://mini-stack-overflow.onrender.com/home" element={<Index />} />
<Route path="https://mini-stack-overflow.onrender.com/addquestion" element={<Question/>} />
<Route path="https://mini-stack-overflow.onrender.com/fullquestion/:_id" element={<Indexfull/>} />
<Route path="https://mini-stack-overflow.onrender.com/" element={<Signup/>}></Route>
<Route path="https://mini-stack-overflow.onrender.com/postanswer/:questionid" element={<Answerview/>}></Route>
</Routes>


</>
  )
}

export default App
