import React from 'react';
import classes from "./InputBlock.module.scss";
import Service from "../../../service";
const InputText = ({firstCurrency, firstCourse,secondCurrency, secondCourse}) => {


    return (
        <div className={classes.textCl}>
            1 {firstCurrency} = {Service.convertation( 1, firstCourse, secondCourse)} {secondCurrency}
        </div>
    );
};

export default InputText;