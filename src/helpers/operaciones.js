export const operaciones = (numeros, setNumeros) => {

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

    const suma = () => num1 + num2;
    const resta = () => num1 - num2;
    const multiplicacion = () => num1 * num2;
    const division = () => num1 / num2;

    return{handleChange, handleChange2, num1, num2, suma, resta, multiplicacion, division};

}