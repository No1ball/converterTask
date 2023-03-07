import React from 'react';
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import classes from "./CurrencyForm.module.scss";
const CurrencyForm = ({placeholder, baseText, data}) => {
    return (
        <form className={classes.currencyFormCl}>
            <div className={classes.firstCurrency}>
                <Input placeholder={placeholder} />
                <Select data={data} baseText={baseText} />
            </div>
            <div className={classes.secondCurrency}>
                <span className={classes.spanCl}>100</span>
                <Select data={data} baseText={baseText} />
            </div>
        </form>
    );
};

export default CurrencyForm;