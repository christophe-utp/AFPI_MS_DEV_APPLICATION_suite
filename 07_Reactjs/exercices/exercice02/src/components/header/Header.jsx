import React from 'react'
import classes from './Header.module.css'

export default function Header(props) {

    const titre = props.title

  return (
    <header className={classes.myheader}>
        <h1 className={classes.mytitle}>{titre}</h1>
    </header>
  )
}
