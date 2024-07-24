import React, { useState } from 'react'
import styles from '../LoginSignup/LoginSignup.module.css'
import { signup } from '../../apis/auth';

const LoginSignup = () => {

    const [toggle, setToggle] = useState("Signup"); 

  return (
    <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.toggle}>
          <button onClick={()=>setToggle("Signup")} className={toggle==="Signup" ? styles.bg : null}>Signup</button>
          <button onClick={()=>setToggle("Login")} className={toggle==="Login" ? styles.bg : null}>Login</button>
          </div>
          <div className={styles.input}>
            {toggle==="Signup" ? <input placeholder='Name'/> : null}
            <input placeholder='Email' />
            <input placeholder='Password'/>
            <label>
            <input type='checkbox' />
            Agree to terms and conditions
            </label>
          </div>
          <button className={styles.submit} onClick={()=>signup()}>{toggle}</button>
        </div>
    </div>
  )
}

export default LoginSignup