import React from 'react'
import Header from './components/header/Header'
import Footer from './components/Footer'
import PersonTable from './components/PersonTable'
import Person from './models/Person'


export default function App() {

    const myPersons = [
        new Person("Albert","DUPONT"),
        new Person("Maria","DUPONT"),
        new Person("Chloé","DUPONT"),
        new Person("Sylvia","MARTEZ"),
        new Person("Clement","DERO")
    ]

  return (
    <>
        <Header title="Annuaire"/>        
        <PersonTable persons={myPersons}/>
        <hr />
        <Footer client="Toto tata"/>
    </>
  )
}
