import React from "react";
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Sol_prev from "./Sol_preview";
import { useState, useEffect } from "react";

const Recenthist = (props) =>{
    const id = props.data;
    const [Solicitud, setSolicitud] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:2000/solicitud/tienda/${id}`)
        .then( (res) => res.json())
        .then((data)=> setSolicitud(data));
    }, []);


    return(
        <div className='recent_sol'>
                <div className='sol_toolbar'>
                <p className='lbl'>Solicitudes recientes</p>
                <Nav.Link href={`/${props.data}/historial`}><p className='atag'>Ver más</p></Nav.Link>
                </div>
                {Solicitud && Solicitud.slice(0, 2).map((item) => (
                    <Sol_prev item={item}/>
                ))}
        </div>
    )
}

export default Recenthist