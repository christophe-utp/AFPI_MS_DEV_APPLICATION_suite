import React from 'react'

export default function Footer(props) {

const nameClient = props.client

  return (
    <footer>
        <p>Site crée avec React pour :</p>
        <p>{nameClient}</p>
    </footer>
  )
}
