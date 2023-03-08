import React from 'react';
import classes from "./ConverterInfo.module.scss";
const ConverterInfo = () => {
    return (
        <div className={classes.mainDivCl}>
            <div className={classes.convertInfoCl}>
                Конвертер валют онлайн — инструмент,
                который позволит вам рассчитать соотношения актуальных курсов денежных средств всего мира на сегодня.
            </div>
        </div>
    );
};

export default ConverterInfo;