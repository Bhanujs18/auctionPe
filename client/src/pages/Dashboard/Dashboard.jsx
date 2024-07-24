import React, { useEffect, useState } from 'react'
import styles from '../Dashboard/Dashboard.module.css'
const Dashboard = () => {

    const [session , setSession] = useState(false);
    const [counter , setCounter] = useState(false)
    const [counterValue , setCounterValue] = useState(0)
    const [storage, setStorage] = useState({
        session : "",
    })
    const [data , setData] = useState([])

    useEffect(()=>{
     if(counter){
        setCounterValue(counterValue+1)
     }
     else{
      setCounterValue(counterValue)
      setStorage((prev=>(
        {...prev , session : counterValue} 
      )))
      
     }
    },[counterValue , counter])

 

    const startSession = () => {
        setSession(true)
        setCounter(true)
    }

    const endSession = () => {
        setSession(false)
        setCounter(false)
        setData((prev)=>(
            [...prev , storage]
          ));
    }

  return (
    <div className={styles.section}>
        <div className={styles.heading}>
        <h1>Dashboard</h1>
        <button>Logout</button>
        </div>
        <div style={{width:'90%' , display:'flex'}}>
<div className={styles.task}>
        <div>
            {!session ? 
            <button className='button' onClick={()=>startSession()}>Start Session</button> : 
            <button className='button' style={{color:'red'}} onClick={()=>endSession()}>End Session</button>}
        </div>

        <div>
            <h1>Counter : {counterValue}</h1>
        </div>

</div>

<div className={styles.history}>
    <h1>History</h1>
    {data.map((cur)=>(
     <div>
       <p> Last Session = {cur.session} Min</p>
     </div>
    ))}
   
</div>

</div>
    </div>
  )
}

export default Dashboard