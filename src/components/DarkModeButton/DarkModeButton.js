import React from 'react';

export const DarkModeButton= ({handleClick, isLightTheme}) => (
    <button className={`button-wrapper ${isLightTheme ? 'btn-light' : 'btn-dark'}`} onClick={() => handleClick()}>
        Dark Mode
    </button>
)