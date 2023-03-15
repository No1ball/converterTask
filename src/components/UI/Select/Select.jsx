import React from 'react';
import classes from './Select.module.scss'

const Select = ({data}) => {

    return (
        <div className={classes.selectCl}>
            {data.map((item, i) =>
                <div key={i} className={classes.optionCl}> <span>{item}</span> </div>
            )}
            <div className={classes.lastDiv}><span>⋁</span></div>
        </div>
    );
};

export default Select;