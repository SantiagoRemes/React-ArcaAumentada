import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function login() {
  return (
    <div className='contlogin'>
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Arca_Continental_logo.svg/1200px-Arca_Continental_logo.svg.png" alt="Arca Continental" />
        <br></br><br></br>
        <h1 class='head1'>Inicio de Sesión</h1>
        <br></br>
        <form>
            <input type="text" placeholder="Usuario" /><br></br><br></br>
            <input type="password" placeholder="Contraseña" /><br></br><br></br>
        </form>
        <Nav.Link href='/main'><button class="bot">Ingresar</button></Nav.Link>
    </div>
  )
}

export default login