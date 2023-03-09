import React from 'react';
import classes from "./TextAndData.module.scss";
import ConverterInfo from "../ConverterInfoBlock/ConverterInfo";
const TextAndData = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date()
    return (
        <div className={classes.mainDiv}>
            <ConverterInfo/>
            <div className={classes.dateDiv}>
              Данные за {today.toLocaleDateString("ru-Ru", options)}
            </div>
        </div>
    );
};

export default TextAndData;