import React, {useState} from "react";
import "../../css/Menu.css";
import "../../css/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as Bars} from '../../images/bars.svg'

const Menu = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <div className="menu-icon" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} className="menu_button" />
            </div>
            <div className="menu-content">
                <h1>fuck</h1>
            </div>
        </div>
    )
}

export default Menu