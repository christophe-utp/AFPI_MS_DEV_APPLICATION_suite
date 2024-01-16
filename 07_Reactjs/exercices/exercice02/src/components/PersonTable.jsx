import React from 'react'
import classes from './PersonTable.module.css'

export default function PersonTable(props) {

    const everybody = props.persons
   // console.log(everybody)

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
