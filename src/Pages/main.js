import React from 'react'
import {ReactComponent as Bars} from './bars.svg'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Metrics from './components/metrics';
import Recenthist from './components/recenthistory';

function main(props) {
  return (
    <div className="container">
        <div className='topContainer'>
          <center>
            <h1 className='topText'>Hola, ${props.user}</h1>
          </center>
          <Bars className="menu_btn"/>
        </div> 
        <div className='percentage'>
          <center>
            <h1>0%</h1>
            <p>De la meta mensual alcanzado</p>
          </center>
        </div>
        <center>
          <Metrics />
          <Recenthist />
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <Nav.Link href="/visita"><button className='botmain'>Registrar Visita</button></Nav.Link><br></br><br></br>
          <Nav.Link href="/unity"><button className='botmain'>Nueva Orden</button></Nav.Link>
        </center>
    </div>
  )
}

export default main