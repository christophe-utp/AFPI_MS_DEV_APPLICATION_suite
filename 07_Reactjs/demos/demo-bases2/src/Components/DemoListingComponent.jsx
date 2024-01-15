import React from 'react'

export default function DemoListingComponent() {

       // const mesPrenoms = ["John","Albert","Olivier","Nicolas","Clément","Thomas"]
        const mesPrenoms = [{ prenom :"John", nom : "Dupond"},{ prenom :"Sarah", nom : "Martin"}]

  return (
    <>
        <h1>Demo Listing Component</h1>
        <hr />
        <ul>
            {mesPrenoms.map((nomcomplet,index) => <li key={index}>{nomcomplet.prenom} {nomcomplet.nom}</li>)}
        </ul>
    </>
  )
}
