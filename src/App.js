import { useState } from 'react';
import Cards from './Components/GetUsers'
import Loading from './Components/Loading';
import React from 'react';
import './App.css';
function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const showCards = () => {
    setLoading(true)
    const temp = fetch(`https://reqres.in/api/users?page=1`)
    .then((res) => res.json())
    .then((actualData) => {
      console.log(actualData.data);
      setData(actualData.data);
      setLoading(false)
    });

  }

  return (
   <div className='GetUsers'>
   <nav style={{ height:"50px",backgroundColor:"black", marginBottom:'20px'}}>
   <a href="#" id="brand_name" style={{color:"white", fontSize:"25px", padding:"3px", margin:"5px"}}>LetsGrowMore</a>
   <button onClick={showCards} style={{float:"right", padding:"10px",borderRadius:"15px", backgroundColor:"blue" ,color:"white",fontWeight:"200px",margin : "5px"}}>Get Users</button>
   </nav>
   {loading ? (<Loading/>):""}
   <div className='flex-cards'>
   {data ? (
    (data.map((index, key) => {
    return (
      <Cards key={index.id} first_name={index.first_name} last_name={index.last_name} email={index.email} avatar={index.avatar}/>
    )
   })
  )
  ): ""}
      
      </div>
   </div>
  );
}

export default App;
