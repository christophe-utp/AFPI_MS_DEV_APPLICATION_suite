import React from 'react'

export default function BoutonComponent(props) {

    // L'opérateur optionnel ?.
    // L'opérateur ?? opérateur de coalescence null (nullish coalescing operator)
    const textbutton = props?.message ?? 'Cliquez'
    console.log(textbutton)

  return (
    <button style={{backgroundColor: "red", margin : "30px"}} >{textbutton}</button>
  )
}
