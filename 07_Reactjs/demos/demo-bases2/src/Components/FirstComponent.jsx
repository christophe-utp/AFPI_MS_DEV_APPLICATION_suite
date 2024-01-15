import React from 'react'
import './styleglobal.css'
import classes from './FirstComponent.module.css'
import BoutonComponent from './BoutonComponent'

export default function FirstComponent() {

    const styleh = {
        color : "blue",
        background : "yellow"
    }

  return (
    <>
        <h3 style={{color:"red",fontSize:"30px"}}>Salut !!</h3>
        <h3 style={styleh}>Coucou !!!</h3>
        <h3 className='bggreen'>Bonjour !!!</h3>
        <h3 className={classes.bgblue}>Hi  !!!</h3>
        <BoutonComponent message="Cliquez ici"/>
        <BoutonComponent message="Ne pas cliquez"/>
        <BoutonComponent />
    </>
  )
}
