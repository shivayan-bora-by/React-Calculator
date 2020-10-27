import React from 'react';

export const LightModeButton = ({handleClick, isLightTheme}) => (
    <button className={`button-wrapper ${isLightTheme ? 'btn-light' : 'btn-dark'}`} onClick={() => handleClick()}>
        Light Mode
    </button>
)