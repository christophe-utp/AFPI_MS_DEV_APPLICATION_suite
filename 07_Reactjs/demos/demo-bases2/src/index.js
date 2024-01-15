import React from 'react';
import ReactDOM from 'react-dom/client';
import { App }  from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React Fragment
  // <>
  //   <h1>Hello World !!!</h1>
  //   <h2>Hello World </h2> 
  // </>
  <>
    <h1 className='bggreen'> Mon APP </h1>
    <App />
  </>
);


