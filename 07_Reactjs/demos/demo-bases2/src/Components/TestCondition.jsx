import React from 'react'

const monAge = 18

export const TestCondition = () => {

    const maFonction = (param) => {
        return param + " tada"
    }
  
  
    if(monAge >= 18){
        return (
            <>
            <div>Bienvenue sur le site</div>
            <p>{maFonction("Félicitations !!!")}</p>
            </>
          )
    }else {
        return (
            <>
            <div>Aurevoir !!!!</div>
            <p>{maFonction("Félicitations !!!")}</p>
            <p>{monAge < 16 ? "Vous etes un enfant !!!" : "Vous etes un ado !!!"}</p>
            </>

        )
    }
    
}
