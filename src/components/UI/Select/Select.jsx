import React from 'react';
import cl from './Select.module.scss'

const Select = ({baseText, data}) => {
    const newClassName = cl.selectCl
    return (
        <select className={newClassName}>
            <option disabled className={cl.optionCl}>
                {baseText}
            </option>
            {data.map(item => <option className={cl.optionCl}>
                {item}
            </option>)
            }
        </select>
    );
};

export default Select;