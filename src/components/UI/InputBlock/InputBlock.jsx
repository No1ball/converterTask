import React from 'react';
import Input from "../Input/Input";
import classes from "./InputBlock.module.scss";
import InputText from "./InputText";
const InputBlock = ({placeholder, onClick, value, first, second, firstCourse, secondCourse}) => {

    return (
        <div className={classes.inpBlockCl}>
            <Input placeholder={placeholder} onChange={onClick} value={value}/>
            <InputText firstCurrency={first} secondCurrency={second} firstCourse={firstCourse} secondCourse={secondCourse}/>
        </div>
    );
};

export default InputBlock;