import React, { Component } from 'react'

export default class FirstStatefulComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            monPrenom: "Christophe"
        }
    }


    changePrenom(){
        console.log("je suis dans la méthode changePrenom")
        this.setState({ monPrenom: "Albert"})
    }

  render() {
    return (
        <>
        <hr />
        <h2>FirstStatefulComponent !!!</h2>
        <p>Mon prénom est : {this.state.monPrenom}</p>
        <button onClick={() => this.changePrenom()}>Changer le prénom</button>
        <hr />
      </>
    )
  }
}

