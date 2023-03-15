import React from 'react';
import classes from "./InputBlock.module.scss";
const InputText = ({firstCurrency, secondCurrency}) => {


    return (
        <div className={classes.textCl}>
            1 {firstCurrency} = 1 {secondCurrency}
        </div>
    );
};

export default InputText;