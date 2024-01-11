import React from 'react'

export default function SecondComponent(props) {

    let prenom = props.prenom
    let nom = props.nom

  return (
    <div>Bonjour {prenom} {nom}</div>
  )
}
