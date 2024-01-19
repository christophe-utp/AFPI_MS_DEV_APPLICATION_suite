import React from 'react'
import { useState } from 'react'

export default function ListingComponent() {

    const [listing,setListing] = useState([])


    const addElementToListing = () => {
        console.log("Je doit rajouter un element à ma liste")
        // je dois rajouter du texte dans mon state en utilsant setListing
        setListing(prevstate => [...prevstate,"Titi"])
    }


  return (
    <>
    <button onClick={addElementToListing}>Add an Element</button>
    <hr />
    <ul>
        {listing.map((element,index) => (
            <li key={index}>{element}</li>
        ))}
    </ul>
    </>
  )
}
