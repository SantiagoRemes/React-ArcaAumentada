import React, {useState} from "react";
import "../../css/Menu.css";
import "../../css/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as Bars} from '../../images/bars.svg'
import {push as Menu1} from 'react-burger-menu'

const Menu = () =>{
    return (
        <div className='menu'>
            <Menu1 right mountOnEnter unmountOnExit>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/salads">
                Salads
            </a>
            <a className="menu-item" href="/pizzas">
                Pizzas
            </a>
            <a className="menu-item" href="/desserts">
                Desserts
            </a>
            </Menu1>
        </div>
    )
}

export default Menu