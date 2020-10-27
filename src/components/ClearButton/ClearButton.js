import React from 'react';

export const ClearButton= ({handleClear, isLightTheme}) => (
    <button className={`button-wrapper ${isLightTheme ? 'btn-light' : 'btn-dark'}`} onClick={() => handleClear()}>
        Clear
    </button>
)