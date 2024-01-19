import React from 'react'
import { useState } from 'react'

export default function FormComponent() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("traitement du formulaire")
        console.log(username+" "+password)
    }


  return (
    <>
    <form action="#" onSubmit={submitHandler}>
        <div>
            <label htmlFor="username">Username :</label>
            <input type="text" value={username} onInput={(e) => setUsername(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password :</label>
            <input type="password" value={password} onInput={(e) => setPassword(e.target.value)}/>
        </div>
        {/* <button onClick={() => console.log(username+" "+password)}>Submit</button> */}
        <button>Submit</button>
    </form>
    </>
  )
}
