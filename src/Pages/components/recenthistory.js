import React from "react";
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Sol_prev from "./Sol_preview";
const Recenthist = (props) =>{
    return(
        <div className='recent_sol'>
                <div className='sol_toolbar'>
                <p className='lbl'>Solicitudes recientes</p>
                <Nav.Link href={`/${props.data}/historial`}><p className='atag'>Ver más</p></Nav.Link>
                </div>
                <Sol_prev />
                <Sol_prev />
                <Sol_prev />
        </div>
    )
}

export default Recenthist