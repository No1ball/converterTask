import React, {useEffect, useState} from 'react';
import classes from "./CurrencyForm.module.scss";
import {useDispatch, useSelector} from "react-redux";
import cn from 'classnames'
import {changeFirstValuteName, changeSecondValuteName, handleFirstValue,
                                                        handleSecondValue} from "../../store/currencySlice";
import Service from "../../service";
import ConverterBlock from "../UI/ConverterBlock/ConverterBlock";

const CurrencyForm = ({placeholder}) => {
    const dispatch = useDispatch()
    const [firstCourse, setFirstCourse] = useState()
    const [secondCourse, setSecondCourse] = useState()
    const [dataF, setDataF]= useState([{CharCode:"RUB"}, {CharCode:"USD"}, {CharCode:'EUR'}])
    const [dataS, setDataS]= useState([{CharCode:"RUB"}, {CharCode:"USD"}, {CharCode:'EUR'}])
    const fullData = useSelector(state => state.currency.data.currencyArr)
    const status = useSelector(state => state.currency.data.status)
    const firstCurrency = useSelector(state => state.currency.state.firstValuteName)
    const secondCurrency = useSelector(state=> state.currency.state.secondValuteName)
    const firstValue = useSelector(state => state.currency.state.valueFirst)
    const secondValue = useSelector(state => state.currency.state.valueSecond)
    const [activeF, setActiveF] = useState(false)
    const [activeS, setActiveS] = useState(false)
    const [lastValuteF, setLastValuteF] = useState('KZT')
    const [lastValuteS, setLastValuteS] = useState('KZT')
    console.log(status)
    useEffect( () => {
        setDataF([...dataF, {CharCode:lastValuteF}])
        setDataS([...dataS, {CharCode:lastValuteS}])
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

    const selectHandlerFirst = (event) => dispatch(changeFirstValuteName(event.target.innerText))
    const selectHandlerSecond = (event) => dispatch(changeSecondValuteName(event.target.innerText))

    const swap = () =>{
        let tempName = firstCurrency;
        if(secondCurrency === lastValuteS){
            const tempLast = lastValuteF;
            setDataF([...dataF.filter(item => item.CharCode.localeCompare(lastValuteF) !== 0),
                {CharCode: secondCurrency}])
            setLastValuteF(secondCurrency)


            if(firstCurrency === lastValuteF) {
                setDataS([...dataS.filter(item => item.CharCode.localeCompare(lastValuteS) !== 0),
                    {CharCode: tempLast}])
                setLastValuteS(tempLast)

            }

        }else if(firstCurrency === lastValuteF){
            setDataS([...dataS.filter(item => item.CharCode.localeCompare(lastValuteS) !== 0),
                {CharCode: firstCurrency}])
            setLastValuteS(firstCurrency)
        }
        dispatch(changeFirstValuteName(secondCurrency));
        dispatch(changeSecondValuteName(tempName))
        dispatch(handleFirstValue(secondValue))
        setFirstBlockState(true)
        setSecondBlockState(false)
        console.log(firstCurrency, lastValuteF, secondCurrency, lastValuteS)

    }

    const openModal = (setActive, active) => (event) => setActive(!active)

    const currencyClassF = cn(classes.currency,{
        [classes.converter]: activeF,
        [classes.active] : activeF
    })
    const currencyClassS = cn(classes.currency,{
        [classes.converter]: activeS,
        [classes.active] : activeS
    })

    const lastSelect = (setActive, active, func, setData, data, lastValute, setValute) => (event) =>{
        setData([...data.filter(item => item.CharCode.localeCompare(lastValute) !== 0),
            {CharCode: event.target.innerText}])
        dispatch(func(event.target.innerText));
        setValute(event.target.innerText)
        setActive(!active)
    }
    return (
        <form className={classes.currencyFormCl}>
            <div className={classes.currencyBlock}>
                <ConverterBlock name={currencyClassF} data={dataF} fullData={fullData}
                                select={selectHandlerFirst} activeValute={firstCurrency}
                                openModal={openModal(setActiveF, activeF)} active={activeF}
                                lastSelect={lastSelect(setActiveF, activeF, changeFirstValuteName,
                                    setDataF, dataF, lastValuteF, setLastValuteF)}
                                placeholder={placeholder} onClickBlock={firstBlockValueHandle} secondCourse={secondCourse}
                                firstCourse={firstCourse} firstCurrency={firstCurrency} secondCurrency={secondCurrency}
                                value={Service.calcValueForInput(firstValue, firstBlockState,
                                    Service.convertation(secondValue, secondCourse, firstCourse)
                )}
                />
                <div className={classes.logoDiv} onClick={swap}>
                    <img src={require('../../152360.png')} alt='swap' className={classes.logoCl}/>
                </div>
                <ConverterBlock name={currencyClassS}  fullData={fullData} data={dataS}
                select={selectHandlerSecond} activeValute={secondCurrency} openModal={openModal(setActiveS, activeS)}
                active={activeS} lastSelect={lastSelect(setActiveS, activeS, changeSecondValuteName,
                    setDataS, dataS, lastValuteS, setLastValuteS)} placeholder={placeholder}
                                onClickBlock={secondBlockValueHandle} value={Service.calcValueForInput(secondValue,
                                        secondBlockState, Service.convertation(firstValue, firstCourse, secondCourse))}
                firstCourse={secondCourse} secondCourse={firstCourse} firstCurrency={secondCurrency}
                                secondCurrency={firstCurrency}
                />
            </div>
        </form>
    );
};

export default CurrencyForm;