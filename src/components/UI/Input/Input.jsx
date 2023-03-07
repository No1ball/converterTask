import React from 'react';
import inpClass from './Input.module.scss'
const Input = ({placeholder}) => {
    const cl = inpClass.inpClass
    return (
        <input placeholder={placeholder} className={cl}>

        </input>
    );
};

export default Input;