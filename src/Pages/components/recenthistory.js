import React from "react";
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Sol_prev from "./Sol_preview";
import { useState, useEffect } from "react";

const Recenthist = (props) =>{
    const { id, rol } = props;
    const [Solicitud, setSolicitud] = useState([]);
    const [SolicitudAdmin, setSolicitudAdmin] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:2000/solicitud/tienda/${id}`)
        .then( (res) => res.json())
        .then((data)=> setSolicitud(data));

        fetch(`http://localhost:2000/solicitud/tiendaadmin`)
        .then( (res) => res.json())
        .then((data)=> setSolicitudAdmin(data));

        
    }, []);

    if(rol === 'desarrollador'){
        
        return(
            <div className='recent_sol'>
                    <div className='sol_toolbar'>
                    <p className='lbl'>Solicitudes recientes</p>
                    <Nav.Link href={`/historial`}><p className='atag'>Ver más</p></Nav.Link>
                    </div>
                    {Solicitud && Solicitud.slice(0, 2).map((item) => (
                        <Sol_prev item={item}/>
                    ))}
            </div>
        )
    }
    else if(rol === 'admin'){
        
        return(
            <div className='recent_sol'>
                    <div className='sol_toolbar'>
                    <p className='lbl'>Solicitudes recientes</p>
                    <Nav.Link href={`/historialadmin`}><p className='atag'>Ver más</p></Nav.Link>
                    </div>
                    {SolicitudAdmin && SolicitudAdmin.slice(0, 2).map((item) => (
                        <Sol_prev item={item}/>
                    ))}
            </div>
        )
    }
}

export default Recenthist