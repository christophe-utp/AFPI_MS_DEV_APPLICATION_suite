import React from 'react'

export default function SecondComponent(props) {

    const prenom = props.prenom
    const nom = props.nom

  return (
    <div>Bonjour {prenom} {nom}</div>
  )
}
