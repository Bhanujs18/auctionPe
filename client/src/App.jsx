import React, { useEffect, useState } from 'react'
import LoginSignup from './pages/LoginSignup/LoginSignup'
import Dashboard from './pages/Dashboard/Dashboard'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

const App = () => {
  
  const [isLogin , setIslogin] = useState(false);
  let userid = localStorage.getItem("autionpeUserID");
  useEffect(()=>{
  
    if(userid){
      setIslogin(true);
    }

    setTimeout(()=>{
      localStorage.removeItem("autionpeUserID")
    },300000)
  } , [userid])

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogin ? <Dashboard setIslogin={setIslogin} /> : <LoginSignup setIslogin={setIslogin}/>} />
      </Routes>
    </BrowserRouter>
 
  )
}

export default App