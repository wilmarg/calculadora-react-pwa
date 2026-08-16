import { useState } from 'react'
import NumberInputs from './NumberInputs';
import Resultado from './Resultado';

const Calculadora = () => {
const [suma, setSuma] = useState(0);


  return(
    <div>
        <NumberInputs />
        
        <Resultado operacion= "Suma" calculo={suma} />
        <Resultado operacion= "Resta" calculo={suma} />
        <Resultado operacion= "Multiplicación" calculo={suma} />
        <Resultado operacion= "División" calculo={suma} />
        
    </div>
  )
}

export default Calculadora