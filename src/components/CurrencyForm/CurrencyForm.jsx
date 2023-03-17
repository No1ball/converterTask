import React, {useEffect, useState} from 'react';
import Select from "../UI/Select/Select";
import classes from "./CurrencyForm.module.scss";
import InputBlock from "../UI/InputBlock/InputBlock";
import {useDispatch, useSelector} from "react-redux";
import {
    changeFirstValuteName,
    changeSecondValuteName,
    handleFirstValue,
    handleSecondValue
} from "../../store/currencySlice";
import Service from "../../service";

const CurrencyForm = ({placeholder}) => {
    const dispatch = useDispatch()
    const [firstCourse, setFirstCourse] = useState()
    const [secondCourse, setSecondCourse] = useState()
    const [data, setData]= useState([{CharCode:"RUB"}, {CharCode:"USD"}, {CharCode:'EUR'}])
    const fullData = useSelector(state => state.currency.data.currencyArr)
    const status = useSelector(state => state.currency.data.status)
    const lastValute = useSelector(state => state.currency.state.lastValute)
    const firstCurrency = useSelector(state => state.currency.state.firstValuteName)
    const secondCurrency = useSelector(state=> state.currency.state.secondValuteName)
    const firstValue = useSelector(state => state.currency.state.valueFirst)
    const secondValue = useSelector(state => state.currency.state.valueSecond)
    console.log(status)
    useEffect( () => {
        setData([...data, {CharCode:lastValute}])
    }, [])
    useEffect(()=>{
        const firstFiltredObj = fullData.filter(item => item.CharCode.localeCompare(firstCurrency) === 0)[0]
        const secondFiltredObj = fullData.filter(item => item.CharCode.localeCompare(secondCurrency) === 0)[0]
        if(fullData.length > 1){
            console.log(fullData.filter(item => item.CharCode.localeCompare(firstCurrency) === 0)[0].Value)
            setFirstCourse(firstFiltredObj.Value / firstFiltredObj.Nominal);
            setSecondCourse(secondFiltredObj.Value / secondFiltredObj.Nominal);
            dispatch(handleSecondValue(Service.convertation(firstValue,
                firstFiltredObj.Value / firstFiltredObj.Nominal,
                secondFiltredObj.Value / secondFiltredObj.Nominal )))
        }
    }, [status, firstCurrency, secondCurrency])


    const [firstBlockState, setFirstBlockState] = useState(true)
    const [secondBlockState, setSecondBlockState] = useState(false)

    const firstBlockValueHandle = (event) =>{
        let value = event.target.value;
        if(event.target.value.substring(event.target.value.length - 1) === '.'){
            value += '0'
        }
        if (!isNaN(Number(value))) {
            if(event.target.value.substring(event.target.value.length - 1) === '.') {
                dispatch(handleFirstValue((event.target.value)))
            }else {
                dispatch(handleFirstValue(Number(event.target.value)))
            }
            dispatch(handleSecondValue(Service.convertation(Number(event.target.value), firstCourse, secondCourse)))
            setFirstBlockState(true)
            setSecondBlockState(false)
        }
    }
    const secondBlockValueHandle = (event) =>{
        let value = event.target.value;
        if(event.target.value.substring(event.target.value.length - 1) === '.'){
            value += '0'
        }
        if (!isNaN(Number(value))) {
            if(event.target.value.substring(event.target.value.length - 1) === '.') {
                dispatch(handleSecondValue((event.target.value)))
            }else {
                dispatch(handleSecondValue(Number(event.target.value)))
            }
            dispatch(handleFirstValue(Service.convertation(Number(event.target.value), secondCourse, firstCourse)))
            setFirstBlockState(false)
            setSecondBlockState(true)
        }
    }

    const selectHandlerFirst = (event) =>{
        dispatch(changeFirstValuteName(event.target.innerText))
    }
    const selectHandlerSecond = (event) =>{
        dispatch(changeSecondValuteName(event.target.innerText))
    }

    const swap = () =>{
        let tempName = firstCurrency;
        dispatch(changeFirstValuteName(secondCurrency));
        dispatch(changeSecondValuteName(tempName))
        console.log(secondValue)
        dispatch(handleFirstValue(secondValue))
        setFirstBlockState(true)
        setSecondBlockState(false)
    }
    console.log(secondValue)
    return (
        <form className={classes.currencyFormCl}>
            <div className={classes.firstCurrency}>
                <Select data={data} fullData={fullData} select={selectHandlerFirst} activeValute={firstCurrency}/>
                <InputBlock placeholder={placeholder}
                            onClick={firstBlockValueHandle}
                            value={Service.calcValueForInput(
                                firstValue,
                                firstBlockState,
                                Service.convertation(secondValue, secondCourse, firstCourse)
                            )}
                            first={firstCurrency}
                            second={secondCurrency}
                            firstCourse={firstCourse}
                            secondCourse={secondCourse}
                />
            </div>
            <div className={classes.logoDiv} onClick={swap}>
                <img src={require('../../152360.png')} alt='swap' className={classes.logoCl}/>
            </div>
            <div className={classes.secondCurrency}>
                <Select data={data} fullData={fullData} select={selectHandlerSecond} activeValute={secondCurrency}/>
                <InputBlock placeholder={placeholder}
                            onClick={secondBlockValueHandle}
                            value={Service.calcValueForInput(
                                secondValue,
                                secondBlockState,
                                Service.convertation(firstValue, firstCourse, secondCourse)
                            )}
                            first={secondCurrency}
                            second={firstCurrency}
                            firstCourse={secondCourse}
                            secondCourse={firstCourse}
                />
            </div>
        </form>
    );
};

export default CurrencyForm;