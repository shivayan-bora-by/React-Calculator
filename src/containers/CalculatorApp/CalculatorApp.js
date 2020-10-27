import React, {useState, useReducer} from 'react';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import {ClearButton} from '../../components/ClearButton/ClearButton';
import { ScientificModeButton } from '../../components/ScientificModeButton/ScientificModeButton';
import { LightModeButton } from '../../components/LightModeButton/LightModeButton';
import { DarkModeButton } from '../../components/DarkModeButton/DarkModeButton';
import { ScientificButtonContainer } from '../ScientificButtonContainer/ScientificButtonContainer';
import CalculatorReducer from '../../reducers/CalculatorReducer';
import { operators } from './../../utils/Utilities';

export default function CalculatorApp({theme, handleThemeChange}) {
    const [isScientificMode, setIsScientificMode] = useState(false);
    const initialState = {input:'', calculationStack: [], result: ''};
    const [state, dispatch] = useReducer(CalculatorReducer, initialState);

    const buttonClickHandler = (value) => {
      if(value === '=') {
        dispatch({type: 'EVALUTATE'})
      } 
      else if(operators.indexOf(value) !== -1) {
        dispatch({type: 'UPDATE_OPERATOR', payload: value})
        if(state.calculationStack.length >= 3) {
          dispatch({type: 'EVALUATE', payload: value})
        }
      } 
      else {
        dispatch({type: 'UPDATE_INPUT', payload: value})
      }
    }

    const toggleScientificMode = () => {
      setIsScientificMode(!isScientificMode);
    }

    const toggleLightMode = () => {
      handleThemeChange('light');
    }
    
    const toggleDarkMode = () => {
      handleThemeChange('dark');
    }

    return (
          <div className="calc-wrapper">
              <Input input={state.input ? state.input : state.result} />
              {isScientificMode && <ScientificButtonContainer isLightTheme={theme==='light'} handleClick={buttonClickHandler}/>}
              <div className="row">
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>1</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>2</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>3</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>+</Button>
              </div>
              <div className="row">
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>4</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>5</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>6</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>-</Button>
              </div>
              <div className="row">
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>7</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>8</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>9</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>*</Button>
              </div>
              <div className="row">
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>.</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>0</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>=</Button>
                <Button isLightTheme={theme==='light'} handleClick={buttonClickHandler}>/</Button>
              </div>
              <div className="row">
                <ClearButton isLightTheme={theme==='light'} handleClear={() => dispatch({type: 'CLEAR'})} />
                <ScientificModeButton isLightTheme={theme==='light'} handleClick={toggleScientificMode} />
                <LightModeButton isLightTheme={theme==='light'} handleClick={toggleLightMode} />
                <DarkModeButton isLightTheme={theme==='light'} handleClick={toggleDarkMode} />
              </div>
          </div>
    )
}