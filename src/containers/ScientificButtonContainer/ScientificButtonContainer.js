import React from 'react';
import {Button} from '../../components/Button/Button';

export const ScientificButtonContainer = ({handleClick,isLightTheme}) => (
    <div className="row">
        <Button isLightTheme={isLightTheme} handleClick={handleClick}>+/-</Button>
        <Button isLightTheme={isLightTheme} handleClick={handleClick}>Square</Button>
        <Button isLightTheme={isLightTheme} handleClick={handleClick}>Sqrt</Button>
    </div>
)
