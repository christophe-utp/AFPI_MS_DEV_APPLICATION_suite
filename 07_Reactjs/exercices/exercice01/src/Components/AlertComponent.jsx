import React from 'react'

export default function AlertComponent(props) {

    //console.log(props)

   // const message = "Something went wrong !"

   //const message = props.msg

   const message = props?.msg ?? "Something went wrong !"

   const color = props?.backColor ?? "red"


    const styleAlert = {
        backgroundColor : color,
        height : '45px',
        width : '600px',
        borderRadius :'10px',
        color : 'white',
        padding : '5px',
        margin : '10px'
    }

  return (
    <div style={styleAlert}>
        <p>{message}</p>
    </div>
  )
}
