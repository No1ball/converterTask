import React from 'react';
import classes from "./Navigation.module.scss";
import {Link} from "react-router-dom";
import cn from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {changeActive} from "../../../store/currencySlice";

const Navigation = ({data}) => {
    const activeElem = useSelector(state => state.currency.state.activePage)
    const dispath = useDispatch();
    const linkClFunc = (href) => {
        return cn(classes.linkCl, {
            [classes.active]: activeElem === href,
        })
    }
    const changeClass = (href) => () =>{
        dispath(changeActive(href))
    }

    return (
        <div className={classes.navCl}>
            {data.map((item, i)=>
                <Link to={'/' + item.href} key={i} className={linkClFunc(item.href)} onClick={changeClass(item.href)}>{item.text} </Link>
            )}
        </div>
    );
};

export default Navigation;