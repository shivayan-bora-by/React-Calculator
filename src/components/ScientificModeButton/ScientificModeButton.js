import React from 'react';

export const ScientificModeButton= ({handleClick, isLightTheme}) => (
    <button className={`button-wrapper ${isLightTheme ? 'btn-light' : 'btn-dark'}`} onClick={() => handleClick()}>
        Scientific
    </button>
)