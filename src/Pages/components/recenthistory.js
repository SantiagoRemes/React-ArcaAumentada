import React from "react";
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Sol_prev from "./Sol_preview";
import { useState, useEffect } from "react";

const Recenthist = (props) =>{
    const { id, rol,type } = props;
    
    const [Solicitud, setSolicitud] = useState([]);

    useEffect(() => {
        if(rol === 'Des'){
            fetch(`http://localhost:2000/solicitud/tiendades/${id}`)
        .then( (res) => res.json())
        .then((data)=> setSolicitud(data));  
        }
        else if(rol === 'Admin'){
            fetch(`http://localhost:2000/solicitud/tiendaadmin`)
            .then( (res) => res.json())
            .then((data)=> setSolicitud(data));
        }
        else if(rol === 'Chofer'){
            fetch(`http://localhost:2000/solicitud/chofer/${id}`)
            .then( (res) => res.json())
            .then((data)=> setSolicitud(data));
        }
        
        
        
    }, []);

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

export default Recenthist