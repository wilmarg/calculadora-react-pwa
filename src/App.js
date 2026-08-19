import React from 'react'
import Calculadora from './components/calculadora'

const App = () => {
  return(
    <div className='container text-center' htmlFor="floatingInput">
        <h1>CALCULADORA REACT + PWA</h1>
        <hr/>
        <Calculadora/>

    </div>
  )
}

export default App