import React from 'react';
import inpClass from './Input.module.scss'
const Input = ({placeholder, value, onChange}) => {
    const cl = inpClass.inpClass
    return (
        <input placeholder={placeholder} className={cl} value={value} onChange={onChange}>

        </input>
    );
};

export default Input;