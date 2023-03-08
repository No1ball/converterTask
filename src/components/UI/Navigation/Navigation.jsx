import React from 'react';
import classes from "./Navigation.module.scss";
const Navigation = ({data}) => {
    return (
        <div className={classes.navCl}>
            {data.map((item, i)=>
                <span key={i}>{item}</span>
            )}
        </div>
    );
};

export default Navigation;