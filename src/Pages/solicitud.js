import React from 'react';
import QRcode from '../images/qricon.png';
import BackArrow from '../images/backarrow.png';
import style from '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Solicitud() {
  let {id} = useParams();
  return (
    <div>
      <div class='redbg'>
            <Nav.Link href="/unity"><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
            <h1 class='header'>Registrar solicitud</h1>
      </div>
      <br></br><br></br><br></br>
      <h2 class='header2'>Datos de la solicitud</h2>
      <div>
          <form>
            <label class='slabel'>Número de serie</label>
            <input type='text' placeholder='[Num Cliente]'></input><br></br>
            <img src={QRcode} class='imageqr' width='25px' height='25spx' />
            <br></br><br></br>
            <label class='slabel'>Unidad</label>
            <input type='text' placeholder='[Modelo]'></input>
            <br></br><br></br><br></br>
            <label class='slabel'>Dirección del cliente</label>
            <input type='text' placeholder='[Dirección y número]'></input>
            <br></br><br></br>
          </form>
      </div>
      <div>
        <img src='a.jpg' width='200px' height='200px'></img>
      </div>
      <br></br><br></br>
      <div>
        <Nav.Link href="/unity" class='navinline'><button class='botspace'>Agregar</button></Nav.Link><br></br>
        <Nav.Link href={`/${id}/main`} class='navinline'><button class='botspace'>Terminar</button></Nav.Link>
      </div>
    </div>
  )
}

export default Solicitud