import React from 'react';
import Input from "../Input/Input";
import classes from "./InputBlock.module.scss";
import InputText from "./InputText";
const InputBlock = ({placeholder}) => {
    return (
        <div className={classes.inpBlockCl}>
            <Input placeholder={placeholder} />
            <InputText firstCurrency={'usd'} secondCurrency={'usd'}/>
        </div>
    );
};

export default InputBlock;