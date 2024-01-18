import React from 'react'
import { useState } from 'react'

export default function FirstHookComponent() {

    const [monPrenom,setMonPrenom] = useState("Christophe")
    const [nomComplet,setNomComplet] = useState({
        firstname: "Christophe",
        lastname: "Dupont"
    })


    const changePrenom = () => {
        console.log("je suis dans la arrow fonction changePrenom")
        setMonPrenom("Toto")
    }

    const changePrenomNomComplet = () => {
        setNomComplet(prevState => ({...prevState, firstname: "Claire"}))
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
    <p>Mon nom complet est : {nomComplet.lastname} {nomComplet.firstname}</p>
    <br />
    <button onClick={changePrenomNomComplet}>Changer le prénom du nom complet</button>
    <br />
    <button onClick={() => setNomComplet(prevState => ({...prevState, lastname: "Martin"}))}>Changer le nom du nom complet</button>
    <br />
    <button onClick={() => setNomComplet(prevState => ({ firstname: "Eric", lastname: "Doe"}))}>Changer le nom complet en entier</button>
    </>
  )
}
