import React from 'react'
import classes from './PersonTable.module.css'

export default function PersonTableModif(props) {

    const { persons } = props


    if(persons?.length === 0  || !persons  ){
        return (
            <p>Il n'y a personne dans la base de données</p>
          )
    }else {
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
                    {persons.map((p,i) => (
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
