import React, {useState} from 'react';
import classes from "./Modal.module.scss";
const Modal = ({fullData, lastSelect}) => {
    const [data, setData] = useState(fullData.filter(item => item.CharCode.localeCompare('RUB') !== 0
        && item.CharCode.localeCompare('USD') !== 0
        && item.CharCode.localeCompare('EUR') !== 0
        )
    )
    return (
        <div className={classes.modal}>
            <div>
                {data.map( (item ,i)=>
                    <span key={i} className={classes.content} onClick={lastSelect}>
                        {item.CharCode}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Modal;