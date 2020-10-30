import React from 'react';

export const Button = ({children, handleClick, isLightTheme}) => {    
    return (
      <button 
        className={`button-wrapper ${isLightTheme ? 'btn-light' : 'btn-dark'}`} 
        onClick={() => handleClick(children)}>
        {children}
      </button>
    )
}