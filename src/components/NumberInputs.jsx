import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NumberInputs = ({name}) => {

const [numeros, setNumeros] = useState({
    num1: 0,
    num2: 0,
});

const handleChange = (e) => {
  setNumeros(e.target.value);

};

  return(
    <>
        <label>
            {name}: <input onChange={handleChange} type= "text"/>     
        </label>
    </>
  )
}

NumberInputs.PropTypes = {
    name: PropTypes.string,
}

export default NumberInputs
