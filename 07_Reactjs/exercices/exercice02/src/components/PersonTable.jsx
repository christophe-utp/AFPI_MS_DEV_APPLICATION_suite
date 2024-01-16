import React from 'react'
import classes from './PersonTable.module.css'

export default function PersonTable(props) {

    console.log(props)

    const everybody = props.persons // [] ou  [quelque chose dedans ...]
    console.log(everybody)

    if(everybody == undefined){
        console.log("je n'ai pas recu de tableau !!!")
        return (
            <p>Aucune données à affichées !!!!</p>
        )
    }else {
        console.log("j'ai recu de tableau !!!")
        console.log(everybody.length)
        if(everybody.length === 0){
         console.log("mon tableau est vide !!!")
         return(
             <p>Aucune données à affichées !!!!</p>
         )
        }else {
         console.log("mon tableau contient quelque chose !!!!!")
         return (
        
             <table className={classes.center}>
                 <thead>
                     <tr>
                         <th>#</th>
                         <th>Firstname</th>
                         <th>LastName</th>
                     </tr>
                 </thead>
                 <tbody className={classes.bodytable}>
                     {everybody.map((p,i) => (
                         <tr key={i}>
                             <td>{i}</td>
                             <td>{p.firstname}</td>
                             <td>{p.lastname}</td>
                         </tr>
                     ))}
                     
                 </tbody>
             </table>
       
       )
        }
    }

  
  

  
}
