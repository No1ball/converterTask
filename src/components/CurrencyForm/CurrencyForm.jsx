import React from 'react';
import Select from "../UI/Select/Select";
import classes from "./CurrencyForm.module.scss";
import InputBlock from "../UI/InputBlock/InputBlock";

const CurrencyForm = ({placeholder, baseText, data}) => {
    return (
        <form className={classes.currencyFormCl}>
            <div className={classes.firstCurrency}>
                <Select data={data} baseText={baseText} />
                <InputBlock placeholder={placeholder}/>
            </div>
            <div className={classes.logoDiv}>
                <img src={require('../../152360.png')} className={classes.logoCl}/>
            </div>
            <div className={classes.secondCurrency}>
                <Select data={data} baseText={baseText} />
                <InputBlock placeholder={placeholder}/>
            </div>
        </form>
    );
};

export default CurrencyForm;