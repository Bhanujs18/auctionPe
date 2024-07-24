import React, { useState } from 'react'
import styles from '../LoginSignup/LoginSignup.module.css'
import { login, signup } from '../../apis/auth';

const LoginSignup = ({setIslogin}) => {

    const [toggle, setToggle] = useState("Signup"); 
    const [details, setDetails] = useState({
        name : "",
        email : "",
        password : ""
    })

    const register = async() => {
        const res = await signup(details)
        if(res?.data?.data){
            console.log(res)
            localStorage.setItem("autionpeUserID" , res?.data?.data?._id)
            console.log("registered")
            setIslogin(true);
        }
    }

    const userLogin = async() => {
        const res = await login(details)
        if(res?.data?.data){
            if(res){
                localStorage.setItem("autionpeUserID" , res?.data?.data?._id)
                console.log("registered")
                setIslogin(true);
            }
        }
    }
    

  return (
    <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.toggle}>
          <button onClick={()=>setToggle("Signup")} className={toggle==="Signup" ? styles.bg : null}>Signup</button>
          <button onClick={()=>setToggle("Login")} className={toggle==="Login" ? styles.bg : null}>Login</button>
          </div>
          <div className={styles.input}>
            {toggle==="Signup" ? 
            <input placeholder='Name' onChange={(e)=>setDetails((prev)=>({...prev , name : e.target.value}))} /> : null}
            <input placeholder='Email' onChange={(e)=>setDetails((prev)=>({...prev , email : e.target.value}))} />
            <input placeholder='Password' onChange={(e)=>setDetails((prev)=>({...prev , password : e.target.value}))}/>
            <label>
            <input type='checkbox' />
            Agree to terms and conditions
            </label>
          </div>
          {toggle==="Signup" ? 
          <button className={styles.submit} onClick={()=>register()}>Sign Up</button> :
          <button className={styles.submit} onClick={()=>userLogin()}>Login</button>}
        </div>
    </div>
  )
}

export default LoginSignup