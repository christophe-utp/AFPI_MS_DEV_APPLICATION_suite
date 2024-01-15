import React from 'react'

export default function DemoListingComponent() {

        const mesPrenoms = ["John","Albert","Olivier","Nicolas","Clément","Thomas"]

  return (
    <>
        <h1>Demo Listing Component</h1>
        <hr />
        <ul>
            {mesPrenoms.map((prenom,index) => <li key={index}>{prenom}</li>)}
        </ul>
    </>
  )
}
