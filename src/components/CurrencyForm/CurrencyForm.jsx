import React from 'react';
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import classes from "./CurrencyForm.module.scss";
const CurrencyForm = ({placeholder, baseText, data}) => {
    return (
        <form className={classes.currencyFormCl}>
            <div className={classes.firstCurrency}>
                <Select data={data} baseText={baseText} />
                <Input placeholder={placeholder} />
            </div>
            <div className={classes.secondCurrency}>
                <Select data={data} baseText={baseText} />
                <Input placeholder={placeholder}/>
            </div>
        </form>
    );
};

export default CurrencyForm;