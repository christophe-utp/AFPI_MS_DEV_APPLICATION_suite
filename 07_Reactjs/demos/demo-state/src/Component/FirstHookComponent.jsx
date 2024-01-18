import React from 'react'
import { useState } from 'react'

export default function FirstHookComponent() {

    const [monPrenom,setMonPrenom] = useState("Christophe")
    const [nomComplet,setNomComplet] = useState({
        firstname: "Christophe",
        lastname: "Dupont",
        age : 25
    })


    const changePrenom = () => {
        console.log("je suis dans la arrow fonction changePrenom")
        setMonPrenom("Toto")
    }

    const changePrenomNomComplet = () => {
        setNomComplet(prevState => ({...prevState, firstname: "Claire"}))
    }

    const vieillir = () => {
        setNomComplet(prevState => ({...prevState, age : prevState.age - 1}))
    }

  return (
    <>
    <hr />
    <h2>FirstHookComponenent !!!</h2>
    <p>Mon prénom est : {monPrenom}</p>
    <button onClick={changePrenom}>Changer le prénom</button>
    <br />
    <button onClick={() => setMonPrenom("Tata")}>Changer le prénom v2</button>
    <hr />
    <h2>FirstHookComponenent Nom complet!!!</h2>
    <p>Mon nom complet est : {nomComplet.lastname} {nomComplet.firstname} je suis agé de {nomComplet.age} ans.</p>
    <br />
    <button onClick={changePrenomNomComplet}>Changer le prénom du nom complet</button>
    <br />
    <button onClick={() => setNomComplet(prevState => ({...prevState, lastname: "Martin"}))}>Changer le nom du nom complet</button>
    <br />
    <button onClick={() => setNomComplet(prevState => ({...prevState, firstname: "Eric", lastname: "Doe"}))}>Changer le nom complet en entier</button>
    <br />
    <button onClick={() => setNomComplet(prevState => ({...prevState, age : prevState.age + 1}))}>+</button>
    {/* <button onClick={() => setNomComplet(prevState => ({...prevState, age : prevState.age - 1}))}>-</button> */}
    <button onClick={vieillir}>-</button>
    </>
  )
}
