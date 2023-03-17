import React from 'react';
import classes from "./Modal.module.scss";
const Modal = ({fullData, select, active}) => {
    return (
        <div className={classes.modal}>
            <div>
                {fullData.map(item=>
                    <span className={classes.content}>
                        {item.CharCode}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Modal;