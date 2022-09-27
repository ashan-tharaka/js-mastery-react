
import { useEffect, useState } from 'react';
import './App.css';
const Person=(props)=>{
  return(
    <>
    <h1>First Name:{props.fname}</h1>
    <h2>Last Name:Tharaka</h2>

    </>
  )
}

const App=()=> {
  useEffect(()=>{
   alert("You changed the counter to"+counter);




  },[counter]);
    const name='ashan';
  const isNameShowing=true;
  const [counter,setCounter]=useState(0);



  return (
    <div className="App">
      <button onClick={()=>setCounter((prev)=>prev-1)}>-</button>
      <button>{counter}</button>
      <button onClick={()=>setCounter((prev)=>prev+1)}>+</button>



    </div>
  );
}

export default App;
