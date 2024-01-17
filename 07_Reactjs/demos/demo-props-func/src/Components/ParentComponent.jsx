import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {

  const textbtn = "le texte pour le bouton de mon petit enfant"

    const sayHelloParent = () => {
        console.log("Hello World from ParentComponent")
    }

    const montab = ["Albert","tati"]

    const sayHelloParentWithParam = (param) => {
        console.log("je suis dans le composant parent")
        console.log("Aurevoir "+ param + ".")
    }

  return (
    <>
        <h1>Parent Component</h1>
        <button onClick={sayHelloParent}>Bouton parent</button>
        <hr />
        <ChildComponent 
        mafonction={sayHelloParent} paramA="toto" paramB={montab} mafonctionavecparam={sayHelloParentWithParam} textbtn={textbtn}/>
        
    </>
  )
}
