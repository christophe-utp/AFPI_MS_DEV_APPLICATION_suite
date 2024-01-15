// composant fonction snippet rfc
// import React from 'react'

// export default function App() {
//   return (
//     <>
//       <h1>Hello World !!!</h1>
//       <h2>Hello World </h2> 
//     </>
//   )
// }


// composant class  snippet rcc
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//         <>
//             <h1>Hello World !!!</h1>
//             <h2>Hello World </h2> 
//         </>
//     )
//   }
// }

import React from 'react'
// import FirstComponent from './Components/FirstComponent'
import DemoListingComponent from './Components/DemoListingComponent'

export const App = () => {
  return (
    <>
        {/* <h1>Hello World !!!</h1>
        <h2>Hello World </h2> 
        <FirstComponent /> */}
        <DemoListingComponent />
    </>
  )
}



