import React from 'react';
import classes from "./Navigation.module.scss";
import {Link} from "react-router-dom";
const Navigation = ({data}) => {
    return (
        <div className={classes.navCl}>
            {data.map((item, i)=>
                <Link to={'/' + item.href} key={i} className={classes.linkCl}>{item.text} </Link>
            )}
        </div>
    );
};

export default Navigation;