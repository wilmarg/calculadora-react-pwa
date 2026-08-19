import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Resultado from './Resultado';
import { operaciones } from '../helpers/operaciones';

const NumberInputs = ({name}) => {

  const [numeros, setNumeros] = useState({
    num1: 0,
    num2: 0,
  });


  const {
    handleChange, 
    handleChange2, 
    num1, 
    num2, 
    suma, 
    resta, 
    multiplicacion, 
    division} = operaciones(numeros, setNumeros);


  return(
    <>
        <label className='mx-2'>
            Número 1:{""} <input value={num1} onChange={handleChange} type= "number"/>     
        </label>

        <label className='mx-2'>
            Número 2:{""} <input value={num2} onChange={handleChange2} type= "number"/>     
        </label>

        <Resultado operacion= "Suma" calculo={suma()} />
        <Resultado operacion= "Resta" calculo={resta()} />
        <Resultado operacion= "Multiplicación" calculo={multiplicacion()} />
        <Resultado operacion= "División" calculo={division()} />


    </>
  )
}

NumberInputs.PropTypes = {
    name: PropTypes.string,
}

export default NumberInputs
