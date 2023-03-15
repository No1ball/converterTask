import React from 'react';
import Input from "../Input/Input";
import classes from "./InputBlock.module.scss";
import InputText from "./InputText";
const InputBlock = ({placeholder, onClick, value, first, second}) => {

    return (
        <div className={classes.inpBlockCl}>
            <Input placeholder={placeholder} onChange={onClick} value={value}/>
            <InputText firstCurrency={first} secondCurrency={second}/>
        </div>
    );
};

export default InputBlock;