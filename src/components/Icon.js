import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

export const Icon = (props) => {
    return (    
      <>
        <i className={`bi ${props.icon}`}></i>
      </>  
    );  
}