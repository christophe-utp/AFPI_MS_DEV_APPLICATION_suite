import React from 'react'

export default function AlertComp({msg , backColor}) {

   // const {msg , backColor} = props


    const styleAlert = {
        backgroundColor : backColor ?? 'red',
        height : '45px',
        width : '600px',
        borderRadius :'10px',
        color : 'white',
        padding : '5px',
        margin : '10px'
    }
  return (
    <div style={styleAlert}>
        <p>{msg ?? "Something went wrong !"}</p>
    </div>
  )
}
