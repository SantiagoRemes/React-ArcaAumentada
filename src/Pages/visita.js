import React from 'react'
import BackArrow from '../images/backarrow.png';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function visita() {
  return (
    <div>
        <div class='redbg'>
            <Nav.Link href="/main"><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
            <h1 class='header'>Registrar visita</h1>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h2 class="header2">Datos de la visita</h2>
        <br></br>
        <form>
            <label class="slabel">Número de cliente:</label>
            <input type="text" placeholder="No. Cliente" />
            <br></br><br></br>
            <label class="slabel">Comentarios:</label>
            <input type="password" placeholder="Comentarios" />
        </form>
        <br></br><br></br>
        <Nav.Link href="/main"><button class="bot">Terminar</button></Nav.Link>
        
    </div>
  )
}

export default visita