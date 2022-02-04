import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Content";
import s from "./HW5.module.css"


function Header() {
    const [visible, setVisible] = useState(false);

    return (
        <div className={s.headerContainer}  onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}>
            <ul className={`${s.headerList} ${visible ? s.active: ''}`}>
                <li><NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></li>
                <li><NavLink to={PATH.PRE_JUNIOR}>Junior</NavLink></li>
                <li><NavLink to={PATH.PRE_JUNIOR}>Junior+</NavLink></li>
                <li><NavLink to="not-found">NOT FOUND</NavLink></li>
            </ul>
        </div>


    )
}

export default Header
