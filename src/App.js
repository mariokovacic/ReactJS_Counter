import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {

  const [rezultat, nekaOperacija] = useState(0);

  const zbroji = () => {


    nekaOperacija(rezultat + 1)


  }

  const oduzmi = () => {


    nekaOperacija(rezultat - 1);


  }

  return (

    <>

      <button onClick={zbroji}>+</button>
      <button onClick={oduzmi}>-</button>
      <div>{rezultat}</div>
    </>

  );
}

export default App;
