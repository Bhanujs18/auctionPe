import React, { useState } from 'react'
import LoginSignup from './pages/LoginSignup/LoginSignup'
import Dashboard from './pages/Dashboard/Dashboard'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

const App = () => {
  
  const [isLogin , setIslogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogin ? <Dashboard /> : <LoginSignup />} />
      </Routes>
    </BrowserRouter>
 
  )
}

export default App