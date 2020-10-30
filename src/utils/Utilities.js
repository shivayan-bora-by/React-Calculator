export const operators = ['+', '-', '*', '/', '+/-', 'Square', 'Sqrt']

export const checkZero = (value) => {
    return value !== "";
}

export const checkDecimal = (value) => {
    return value.indexOf('.') === -1;
}

export const addition = (num1, num2) => {
    return (parseInt(num1) + parseInt(num2)).toString();
}

export const subtraction = (num1, num2) => {
    return (parseInt(num1) - parseInt(num2)).toString();
}

export const multiplication = (num1, num2) => {
    return (parseInt(num1) * parseInt(num2)).toString();
}

export const division = (num1, num2) => {
    return parseInt(num2) !== 0 ? (parseInt(num1) / parseInt(num2)).toString() : '0';
}

export const calculate = (calculationStack) => {
    if(calculationStack[1] === '+') {
        return addition(calculationStack[0], calculationStack[2])
    } else if(calculationStack[1] === '-') {
        return addition(calculationStack[0], calculationStack[2])
    } else if(calculationStack[1] === '*') {
        return addition(calculationStack[0], calculationStack[2])
    } else if(calculationStack[1] === '/') {
        return addition(calculationStack[0], calculationStack[2])
    }
}

export const toggleSign = (num1) => {
    //return (parseInt(num1) + parseInt(num2)).toString();
}

export const square = (num1) => {
    return Math.pow(num1, 2);
}

export const squareRoot = (num1) => {
    return Math.sqrt(num1);
}

export const updateInput = (num1, num2) => {
    if(num2 === '0') {
        return checkZero(num1) ? num1 + num2 : num1;
    } else if (num2 === '.'){
        return checkDecimal(num1) ? num1 + num2 : num1;
    } 
    return num1.concat(num2);
}