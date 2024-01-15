import React from 'react'
import AlertComponent from './Components/AlertComponent'
import AlertComp from './Components/AlertComp'

export default function App() {
  return (
    <>
        <h1>Exercice 01</h1>
        <AlertComponent />
        <AlertComponent msg="Attention!"/>
        <AlertComponent backColor="blue"/>
        <AlertComponent backColor="green" msg="Tout est bon!!!"/>
        <hr />
        <AlertComp />
        <AlertComp msg="Attention!"/>
        <AlertComp backColor="blue"/>
        <AlertComp backColor="green" msg="Tout est bon!!!"/>
    </>
  )
}
