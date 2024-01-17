import React from 'react'

export default function GrandChildComponent(props) {


  const textbtn = props.textbtn

  return (
    <>
   <hr />
    <button onClick={props.mafonction}>{textbtn}</button>
    </>
  )
}
