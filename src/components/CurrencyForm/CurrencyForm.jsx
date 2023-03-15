import React, {useEffect, useState} from 'react';
import Select from "../UI/Select/Select";
import classes from "./CurrencyForm.module.scss";
import InputBlock from "../UI/InputBlock/InputBlock";
import {useDispatch, useSelector} from "react-redux";
import {handleFirstValue, handleSecondValue} from "../../store/currencySlice";

const CurrencyForm = ({placeholder}) => {
    const dispatch = useDispatch()
    const fullData = useSelector(state => state.currency.data)
    const firstValue = useSelector(state => state.currency.state.valueFirst)
    const secondValue = useSelector(state => state.currency.state.valueSecond)
    const firstCurrency = useSelector(state => state.currency.state.firstValuteName)
    const secondCurrency = useSelector(state=> state.currency.state.secondValuteName)
    const lastValute = useSelector(state => state.currency.state.lastValute)
    const [data, setData]= useState(["RUB", "USD", 'EUR'])
    useEffect(()=>{
        setData([...data, lastValute])
    }, [])
    const firstBlockValueHandle = (event) =>{
        if (!isNaN(Number(event.target.value))) {
            dispatch(handleFirstValue(Number(event.target.value)))
        }
    }
    const secondBlockValueHandle = (event) =>{
        if (!isNaN(Number(event.target.value))) {
            dispatch(handleSecondValue(Number(event.target.value)))
        }
    }
    return (
        <form className={classes.currencyFormCl}>
            <div className={classes.firstCurrency}>
                <Select data={data} fullData={fullData} />
                <InputBlock placeholder={placeholder} onClick={firstBlockValueHandle} value={firstValue} first={firstCurrency} second={secondCurrency}/>
            </div>
            <div className={classes.logoDiv}>
                <img src={require('../../152360.png')} alt='swap' className={classes.logoCl}/>
            </div>
            <div className={classes.secondCurrency}>
                <Select data={data} fullData={fullData}/>
                <InputBlock placeholder={placeholder} onClick={secondBlockValueHandle} value={secondValue} first={secondCurrency} second={firstCurrency}/>
            </div>
        </form>
    );
};

export default CurrencyForm;