import React from 'react';
import QRcode from '../images/qricon.png';
import BackArrow from '../images/backarrow.png';
import style from '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from './components/tabla';

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
            <label class='slabel'>Fecha</label>
            <input type='text' placeholder='[Fecha]'></input><br></br>
            <br></br><br></br>
            <label class='slabel'>País</label>
            <input type='text' placeholder='[País]'></input><br/>
            <br></br><br></br><br></br>
            <label class='slabel'>Región</label>
            <input type='text' placeholder='[Región]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>CEDI</label>
            <input type='text' placeholder='[CEDI]'></input><br/>
            <br></br><br></br>
            <h2 class='header2'>Datos del Desarrollador</h2>
            <label class='slabel'>Número de empleado</label>
            <input type='text' placeholder='[Num Empleado]'></input><br></br>
            <br></br><br></br>
            <label class='slabel'>Nombre del desarrollador</label>
            <input type='text' placeholder='[Juan Pérez]'></input>
            <br></br><br></br><br></br>
            <label class='slabel'>Celular del desarrollador</label>
            <input type='text' placeholder='[Celular]'></input>
            <br></br><br></br>
            <h2 class='header2'>Datos del Cliente</h2>
            <label class='slabel'>Nombre del cliente</label>
            <input type='text' placeholder='[Nombre del cliente]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Domicilio (Calle y Número)</label>
            <input type='text' placeholder='[Domicilio]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Colonia</label>
            <input type='text' placeholder='[Colonia]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Ciudad</label>
            <input type='text' placeholder='[Ciudad]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Estado</label>
            <input type='text' placeholder='[Estado]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Celular</label>
            <input type='text' placeholder='[Celular]'></input><br/>
            <br></br><br></br>
            <h2 class='header2'>Datos del Negocio</h2>
            <label class='slabel'>Nombre del negocio</label>
            <input type='text' placeholder='[Nombre del negocio]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Dirección (Calle y Número)</label>
            <input type='text' placeholder='[Dirección]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Colonia</label>
            <input type='text' placeholder='[Colonia]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Ciudad</label>
            <input type='text' placeholder='[Ciudad]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Estado</label>
            <input type='text' placeholder='[Estado]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Celular</label>
            <input type='text' placeholder='[Celular]'></input><br/>
            <br></br><br></br>
            <h2 class='header2'>Datos de factibilidad</h2>
            <label class='slabel'>Número de Cliente</label>
            <input type='text' placeholder='[Número de Cliente]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Tamaño</label>
            <input type='text' placeholder='[Tamaño]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Ventas Actuales</label>
            <input type='text' placeholder='[Ventas Actuales]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Número actual de puertas</label>
            <input type='text' placeholder='[Número actual de puertas]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Número de puertas a solicitar</label>
            <input type='text' placeholder='[Número de puertas a solicitar]'></input><br/>
            <br></br><br></br>
            <label class='slabel'>Listado de EDF actual</label>
            <Table type='curr' /><br/>
            <br></br><br></br>
            <label class='slabel'>Listado de EDF a solicitar</label>
            <Table type='solic' /><br/>
            <br></br><br></br>
            <label class='slabel'>Evidencia</label>
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