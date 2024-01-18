import React from 'react'
import classes from './ShowPeople.module.css'

export default function ShowPeople(props) {

    const prenom = props.lastname
    const nom = props.firstname
   // const { lastname, firstname } = props

  return (
    <>
        <div className={classes.card}>
            <p>Infos Client :</p>
            <p className={classes.firstname}>Nom : {nom}</p>
            <p className={classes.lastname}>Prénom : {prenom}</p>
        </div>
    </>
  )
}
