import { updateInput, toggleSign, square, squareRoot, calculate } from '../utils/Utilities';

export default function CalculatorReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_OPERATOR':
        return { ...state, calculationStack: [...state.calculationStack, state.input, action.payload], result: state.input, input: ''};
      case 'EVALUATE':
        return {...state, result: calculate(state.calculationStack), input: '', calculationStack: [state.result, action.payload]}
      case 'SQUARE':
        return {...state, input: square(state.input), prevInput: ''};
      case 'SQUARE_ROOT':
        return {...state, input: squareRoot(state.input), prevInput: ''};
      case 'TOGGLE_SIGN':
        return {...state, input: toggleSign(state.input)};
      case 'UPDATE_INPUT':
        return {...state, input: updateInput(state.input, action.payload)};
      case 'CLEAR':
        return {calculationStack: [], input: '', result: ''};
      default:
        return state;
    }
}