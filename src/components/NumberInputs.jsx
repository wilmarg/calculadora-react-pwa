import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NumberInputs = ({name}) => {
  const [numeros, setNumeros] = useState({
    num1: 0,
    num2: 0,
  });


  const {num1, num2} = numeros;

  const handleChange = (e) => {
  setNumeros({
    num1: parseFloat(e.target.value),
    num2: num2,
    });
  };

  const handleChange2 = (e) => {
  setNumeros({
    num2: parseFloat(e.target.value),
    num1: num1,
    });
  };


  return(
    <>
        <label>
            Número1:{""} <input value={num1} onChange={handleChange} type= "number"/>     
        </label>

        <label>
            Número2:{""} <input value={num2} onChange={handleChange2} type= "number"/>     
        </label>
    </>
  )
}

NumberInputs.PropTypes = {
    name: PropTypes.string,
}

export default NumberInputs
