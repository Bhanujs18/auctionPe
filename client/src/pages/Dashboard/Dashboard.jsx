import React, { useEffect, useState } from 'react'
import styles from '../Dashboard/Dashboard.module.css'
import axios from 'axios';
const Dashboard = ({setIslogin}) => {

    const [session , setSession] = useState(false);
    const [counter , setCounter] = useState(false)
    const [counterValue , setCounterValue] = useState(0)
    const [storage, setStorage] = useState({
        session : "",
    })
    const [data , setData] = useState([])
   
    let date = new Date();
    const [time , setTime] = useState("Loading...")
  

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

    setTimeout(()=>{
      date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`)
    },1000)

    const logout = () => {
        setIslogin(false);
        localStorage.removeItem("autionpeUserID")
    }


    let apikey = "https://fakestoreapi.com/products";

    const [apiData , setApiData] = useState();

    const fetchData = async() => {
    try {
      const res = await axios.get(apikey);
      if(res?.data){
        setApiData(res?.data.filter((cur)=>cur.category === "men's clothing"))
      }
    } catch (error) {
      
    }
    }

    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div className={styles.section}>
        <div className={styles.heading}>
        <h1>Dashboard</h1>
        <button onClick={()=>logout()} >Logout</button>
        </div>
        <div style={{width:'90%' , display:'flex'}}>
<div className={styles.task}>
        <div>
            {!session ? 
            <button className='button' onClick={()=>startSession()}>Start Session</button> : 
            <button className='button' style={{color:'red'}} onClick={()=>endSession()}>End Session</button>}
        </div>

         <div className={styles.clock}>
          <h1>{time}</h1>
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

<div>
  {apiData && apiData.map((cur)=>{
    return(
      <div style={{width:'5rem' , height : '5rem'}}>
        <img  style={{width:'5rem' , height : '5rem'}} src={cur?.image} />
      </div>
    )
  })}
</div>

</div>
    </div>
  )
}

export default Dashboard