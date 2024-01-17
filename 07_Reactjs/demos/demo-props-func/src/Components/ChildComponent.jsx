import React from 'react'
import GrandChildComponent from './GrandChildComponent'


export default function ChildComponent(props) {


   // console.log(props.paramA)
  //  console.log(props.paramB)
  // console.log(props.textbtn)

    const sayHello = () => {
        console.log("Hello World from ChildComponent")
    }

    const sayGoodBye = (param) => {
        console.log("Bonjour "+ param + ".")
    }

    const callParent = () => {
        console.log("Je suis dans le composant enfant")
        props.mafonctionavecparam("Tata")
    }


  return (
    <>
        <h2>Child Component</h2>
        <button onClick={() => console.log("Hello World !!!")}>Click me !</button>
        <hr />
        <button onClick={sayHello}>Click me Again !!!</button>
        <hr />
        <input type="text" onInput={(e) => console.log(e.target.value)}/>
        <hr />
        <input type="text" onInput={(e) => sayGoodBye(e.target.value)}/>
        <hr />
        <button onClick={props.mafonction}>Cliquez moi !!!</button>
        <hr />
        <button onClick={() => props.mafonctionavecparam("Toto")}>Clique</button>
        <hr />
        <button onClick={callParent}>Last Click !!!!</button>
        <GrandChildComponent textbtn={props.textbtn} mafonction={props.mafonction}/>
    </>
  )
}
