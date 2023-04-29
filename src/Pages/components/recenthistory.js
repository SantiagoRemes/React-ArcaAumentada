import React from "react";
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Sol_prev from "./Sol_preview";
import { useState, useEffect } from "react";

const Recenthist = (props) =>{
    const { id, rol,type } = props;
    
    const [Solicitud, setSolicitud] = useState([]);
    const [SolicitudAdmin, setSolicitudAdmin] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:2000/solicitud/tiendades/${id}`)
        .then( (res) => res.json())
        .then((data)=> setSolicitud(data));  
        
        fetch(`http://localhost:2000/solicitud/tiendaadmin`)
            .then( (res) => res.json())
            .then((data)=> setSolicitudAdmin(data));
    }, []);

    if(rol === 'Des'){

        return(
            <div className='recent_sol'>
                <Nav.Link href={`/historial`}>
                    <div className='sol_toolbar'>
                    <p className='lbl'>Solicitudes recientes</p>
                    <p className='atag'>Ver más</p>
                    </div>
                    <div className='sol_toolbar'>
                        <p className='lbl'>Fecha</p>
                        <p className='lbl'>Tienda</p>
                        <p className='lbl'>Estado</p>
                    </div>
                    {Solicitud && Solicitud.slice(0, 3).map((item) => (
                        <Sol_prev item={item}/>
                    ))}
                </Nav.Link>
            </div>
        )
    }
    else if(rol === 'Admin'){

        if(type == 'desktop'){
            return(
                <div className='recent_sol_desk'>
                    <div className='sol_toolbar'>
                    <p className='lbl'>Solicitudes recientes</p>
                    <Nav.Link href={`/historialadmin`}><p className='atag'>Ver más</p></Nav.Link>
                    </div>
                    {SolicitudAdmin && SolicitudAdmin.slice(0, 3).map((item) => (
                        <Sol_prev item={item}/>
                    ))}
                </div>
            )
        }else{
            return(
                <div className='recent_sol'>
                        <div className='sol_toolbar'>
                        <p className='lbl'>Solicitudes recientes</p>
                        <Nav.Link href={`/historialadmin`}><p className='atag'>Ver más</p></Nav.Link>
                        </div>
                        {SolicitudAdmin && SolicitudAdmin.slice(0, 3).map((item) => (
                            <Sol_prev item={item}/>
                        ))}
                </div>
            )
        }
    }
    else if(rol === 'Chofer'){
        
        return(
            <div className='recent_sol'>
                    <div className='sol_toolbar'>
                    <p className='lbl'>Solicitudes recientes</p>
                    <Nav.Link href={`/historialadmin`}><p className='atag'>Ver más</p></Nav.Link>
                    </div>
                    {SolicitudAdmin && SolicitudAdmin.slice(0, 3).map((item) => (
                        <Sol_prev item={item}/>
                    ))}
            </div>
        )
    }
}

export default Recenthist