import React from 'react'
import {ReactComponent as Bars} from './bars.svg'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function main() {
  return (
    <div className="container">
        <div className='topContainer'>
          <center>
            <h1 className='topText'>Hola, [USER]</h1>
          </center>
          <Bars className="menu_btn"/>
        </div> 
        <div className='percentage'>
          <center>
            <h1>0%</h1>
            <p>De la meta [PERIODO] alcanzado</p>
          </center>
        </div>
        <center>
          <div className='metrics'>
            <div className='created_sol'>
              <b><p className='amnt'>0</p></b>
              <p className='lbl'>Solicitudes creadas</p>
            </div>
            <div className='pending_sol'>
              <b><p className='amnt'>0</p></b>
              <p className='lbl'>Solicitudes en proceso</p>
            </div>
            <div className='compl_sol'>
              <b><p className='amnt'>0</p></b>
              <p className='lbl'>Solicitudes completadas</p>
            </div>
          </div>
          <div className='recent_sol'>
            <div className='sol_toolbar'>
              <p className='lbl'>Solicitudes recientes</p>
              <Nav.Link href='/historial'><p className='atag'>Ver más</p></Nav.Link>
            </div>
            <div className='order'>
              <p className='ref'>[REFERENCIA]</p>
              <p>[NOMBRE]</p>
              <p>[STATUS]</p>
            </div>
            <div className='order'>
              <p className='ref'>[REFERENCIA]</p>
              <p>[NOMBRE]</p>
              <p>[STATUS]</p>
            </div>
            <div className='order'>
              <p className='ref'>[REFERENCIA]</p>
              <p>[NOMBRE]</p>
              <p>[STATUS]</p>
            </div>
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <Nav.Link href="/visita"><button className='botmain'>Registrar Visita</button></Nav.Link><br></br><br></br>
          <Nav.Link href="/unity"><button className='botmain'>Nueva Orden</button></Nav.Link>
        </center>
    </div>
  )
}

export default main