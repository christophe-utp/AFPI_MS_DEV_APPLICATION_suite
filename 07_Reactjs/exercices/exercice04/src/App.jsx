import React from 'react'
import { useState } from 'react'

export default function App() {

   // const [users,setUsers] = useState([])
    const [user,setUser] = useState({
        firstname : "",
        lastname : ""
    })
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")


    const submitForm = (event) => {
        event.preventDefault()
        console.log("fonction submit form")
        console.log(user)
        console.log(firstname)
        console.log(lastname)
       // setUser(prevstate => ({firstname : firstname, lastname : lastname}))
        setUser({firstname, lastname})
        
    }

  return (
    <>
    <h1>Exercice 04</h1>
        <form action="#" onSubmit={submitForm}>
            <div>
                <label htmlFor="firstname">Prénom : </label>
                <input type="text" value={firstname} onInput={(e) => (setFirstname(e.target.value))}/>
            </div>
            <br />
            <div>
                <label htmlFor="lastname">Nom : </label>
                <input type="text" value={lastname}  onInput={(e) => (setLastname(e.target.value))}/>
            </div>
            <br />
            <button>Valider</button>
        </form>
        <h2>Bonjour {user.firstname} {user.lastname} !!!</h2>
    </>
  )
}
