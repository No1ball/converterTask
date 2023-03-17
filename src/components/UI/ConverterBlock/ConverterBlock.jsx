import React from 'react';
import Select from "../Select/Select";
import Modal from "../Modal/Modal";
import InputBlock from "../InputBlock/InputBlock";
import Service from "../../../service";

const ConverterBlock = ({name, data, fullData, select, activeValute, openModal, active,
                        lastSelect, placeholder, onClickBlock, secondCourse, firstCourse,
                            firstCurrency, secondCurrency, value}) => {
    return (
        <div className={name}>
            <Select data={data} fullData={fullData}
                    select={select}
                    activeValute={activeValute}
                    openModal={openModal}/>
            {active ?
                <Modal
                    fullData={fullData}
                    lastSelect={lastSelect}
                />
                :
                <InputBlock placeholder={placeholder}
                            onClick={onClickBlock}
                            value={value}
                            first={firstCurrency}
                            second={secondCurrency}
                            firstCourse={firstCourse}
                            secondCourse={secondCourse}
                />}
        </div>
    );
};

export default ConverterBlock;