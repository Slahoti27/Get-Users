import React from 'react'
import './Loading.gif'




const Loading = () => {
    return(
        <div style={{height:"100vh" , display:"flex",justifyContent:"center",alignItems:"center",backdropFilter:"blur(1px)"}}>
        <img src= {Loading} style={{height:"60px"}} alt="loading"/>
        </div>
    )
}

export default Loading