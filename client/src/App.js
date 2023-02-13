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
<Route path="https://ministackoverflow-mini.onrender.com/signin" element={<Signin />} />
<Route path="/home" element={<Index />} />
<Route path="/addquestion" element={<Question/>} />
<Route path="/fullquestion/:_id" element={<Indexfull/>} />
<Route path="/" element={<Signup/>}></Route>
<Route path="/postanswer/:questionid" element={<Answerview/>}></Route>
</Routes>


</>
  )
}

export default App
