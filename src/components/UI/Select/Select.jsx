import React  from 'react';
import classes from './Select.module.scss'
import cn from 'classnames'

const Select = ({data,activeValute, select, fullData, lastSelect}) => {
    const classCalc = (itemCode) =>{
        return cn(classes.optionCl, {
            [classes.activeClass]: itemCode.localeCompare(activeValute) === 0
        })
    }
    return (

            <div className={classes.selectCl}>
                {data.map((item, i) =>
                    <div key={i} className={classCalc(item.CharCode)}> <span onClick={select}>{item.CharCode}</span> </div>
                )}
                <div className={classes.lastDiv}><span onClick={lastSelect}>⋁</span></div>
            </div>


    );
};

export default Select;