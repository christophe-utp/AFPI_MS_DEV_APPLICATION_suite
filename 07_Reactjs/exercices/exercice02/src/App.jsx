import React from 'react'
import Header from './components/header/Header'
import Footer from './components/Footer'
import PersonTable from './components/PersonTable'
import Person from './models/Person'
import PersonTableModif from './components/PersonTableModif'


export default function App() {

     const myPersons = [
         new Person("Albert","DUPONT"),
        new Person("Maria","DUPONT"),
         new Person("Chloé","DUPONT"),
         new Person("Sylvia","MARTEZ"),
         new Person("Clement","DERO")
     ]

    const myPersonsEmpty = []

  return (
    <>
        <Header title="Annuaire"/>
        <h2>Avec un tableau remplie</h2>        
        <PersonTable persons={myPersons}/>
        <hr />
        <h2>Avec un tableau vide</h2> 
        <PersonTable persons={myPersonsEmpty} tata="toto"/>
        <hr />
        <h2>Avec aucun tableau</h2> 
         <PersonTable /> 
         <hr />
         <h2>Avec le composant PersonTableModif :</h2>
         <h2>Avec un tableau remplie</h2>  
         <PersonTableModif persons={myPersons}/>
         <h2>Avec un tableau vide</h2>  
         <PersonTableModif persons={myPersonsEmpty}/>
         <h2>Avec aucun tableau</h2>  
         <PersonTableModif />
        <Footer client="Toto tata"/>
    </>
  )
}
