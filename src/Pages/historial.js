import React from 'react'
import style from '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackArrow from '../images/backarrow.png';
import Search from '../images/search.png';
import { useState, useEffect } from "react";
import { useParams  } from 'react-router-dom';

function Historial() {

    let { idDes } = new useParams()
    const [Solicitudes, setSolicitudes] = useState(null);

    useEffect(() => {
            fetch(`http://localhost:2000/solicitud/bydes/${idDes}`)
            .then( (res) => res.json())
            .then((data)=> setSolicitudes(data));
        }, []);

  return (
    <div>
        <div class='redbg'>
            <Nav.Link href="/main"><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
            <h1 class='header'>Historial</h1>
            <img class='imageflex2' src={Search} alt='backarrow' width='40px' height='40px'/>
        </div>
        <br></br>
        {Solicitudes && Solicitudes.map((item) => 
        <Nav.Link href={`/solcheck/${item.idSolicitud}`}>
            <div className='sep'>
                <div className='twop'>
                    <p>{item.idSolicitud}</p>
                    <p class='red'>{item.estatus}</p>
                </div>
                <div className='twop'>
                    <p>[NOMBRE]</p>
                    <p>[MODELO]</p>
                </div>
                <div className='twop'>
                    <p>[DIRECCIÓN]</p>
                </div>
                <div className='twop'>
                    <p>[CONTACTO]</p>
                    <p>[NO. DE CLIENTE]</p>
                </div>
            </div>
        </Nav.Link>
        )}

    </div>
  )
}

export default Historial