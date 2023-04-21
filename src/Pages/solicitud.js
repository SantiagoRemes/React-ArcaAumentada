import React from 'react';
import QRcode from '../images/qricon.png';
import BackArrow from '../images/backarrow.png';
import style from '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import Table from './components/tabla';

function Solicitud() {
  let {id} = useParams();

  const [CEDI, setCEDI] = useState();
  const [paiscedi, setCedipais] = useState();
  const [regioncedi, setCediregion] = useState();
  const [ceditext, setCeditext] = useState();
  
  const [Desarrollador, setDesarrollador] = useState();

  const [nombrecliente, setClientenombre] = useState();
  const [cliente, setCliente] = useState();
  const [domiciliocliente, setClientedomicilio] = useState();
  const [coloniacliente, setClientecolonia] = useState();
  const [ciudadcliente, setClienteciudad] = useState();
  const [estadocliente, setClienteestado] = useState();
  const [celularcliente, setClientecelular] = useState();

  const [negocio, setNegocio] = useState();
  const [nombrenegocio, setNegocionombre] = useState();
  const [direccionnegocio, setNegociodireccion] = useState();
  const [colonianegocio, setNegociocolonia] = useState();
  const [ciudadnegocio, setNegociociudad] = useState();
  const [estadonegocio, setNegocioestado] = useState();
  const [celularnegocio, setNegociocelular] = useState();

  const [numeroclientenegocio, setNegocionumerocliente] = useState();
  const [tamanonegocio, setNegociotamano] = useState();
  //const [puertasnegocio, setNegociopuertas] = useState();
  //const [ventasactualesnegocio, setNegocioventasactuales] = useState();
  //const [puertassolicitarnegocio, setNegociopuertassolicitar] = useState();

  useEffect(() => {
    fetch(`http://localhost:2000/desarrollador/${id}`)
    .then( (res) => res.json())
    .then((data)=> setDesarrollador(data));
  }, []);

  const handleCediChange = (event) => {
    let nombre = event.target.value;
    setCeditext(nombre);
    if(nombre === ''){
      nombre = 'a'
    }
    fetch(`http://localhost:2000/CEDI/${nombre}`)
    .then( (res) => res.json())
    .then((data)=> setCEDI(data));
    try{
      if(CEDI.length !== 0){
        setCedipais(CEDI && CEDI[0].pais);
        setCediregion(CEDI && CEDI[0].region);
      }
      else if(paiscedi !== ''){
        setCedipais('')
        setCediregion('')
      }
    }
    catch(err){

    }

  };

  const handleClienteChange = (event) => {
    let nombre = event.target.value;
    setClientenombre(nombre);
    if(nombre === ''){
      nombre = 'a'
    }
    fetch(`http://localhost:2000/dueno/${nombre}`)
    .then( (res) => res.json())
    .then((data)=> setCliente(data));
    try{
      if(cliente.length !== 0){
        setClientedomicilio(cliente && cliente[0].calle_no);
        setClientecolonia(cliente && cliente[0].colonia);
        setClienteciudad(cliente && cliente[0].ciudad);
        setClienteestado(cliente && cliente[0].estado);
        setClientecelular(cliente && cliente[0].celular);
      }
      else if(domiciliocliente !== ''){
        setClientedomicilio('');
        setClientecolonia('');
        setClienteciudad('');
        setClienteestado('');
        setClientecelular('');
      }
    }
    catch(err){

    }

  };

  const handleNegocioChange = (event) => {
    let nombre = event.target.value;
    setNegocionombre(nombre);
    if(nombre === ''){
      nombre = 'a'
    }
    fetch(`http://localhost:2000/tienda/${nombre}`)
    .then( (res) => res.json())
    .then((data)=> setNegocio(data));
    try{
      if(negocio.length !== 0){
        setNegociodireccion(negocio && negocio[0].calle_no);
        setNegociocolonia(negocio && negocio[0].colonia);
        setNegociociudad(negocio && negocio[0].ciudad);
        setNegocioestado(negocio && negocio[0].estado);
        setNegociocelular(negocio && negocio[0].celular);
        setNegocionumerocliente(negocio && negocio[0].idTienda)
        setNegociotamano(negocio && negocio[0].tamaño)
      }
      else if(domiciliocliente !== ''){
        setNegociodireccion('');
        setNegociocolonia('');
        setNegociociudad('');
        setNegocioestado('');
        setNegociocelular('');
        setNegocionumerocliente('')
        setNegociotamano('')
      }
    }
    catch(err){

    }

  };
 
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
            <input type='text' placeholder='[Fecha]' id='Fecha' value={new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()}></input><br></br>
            <br></br><br></br>
            <label class='slabel'>CEDI</label>
            <input type='text' placeholder='[CEDI]' value={ceditext} onChange={handleCediChange}></input><br/>
            <br></br><br></br>
            <label class='slabel'>País</label>
            <input type='text' placeholder='[País]' value={paiscedi} readOnly ></input><br/>
            <br></br><br></br><br></br>
            <label class='slabel'>Región</label>
            <input type='text' placeholder='[Región]' value={regioncedi} readOnly ></input><br/>
            <br></br><br></br>
            
            {Desarrollador && Desarrollador.map((item) => 
              <div>
                <h2 class='header2'>Datos del Desarrollador</h2>
                <label class='slabel'>Número de empleado</label>
                <input type='text' placeholder='[Num Empleado]' value={item.idDesarrollador}></input><br></br>
                <br></br><br></br>
                <label class='slabel'>Nombre del desarrollador</label>
                <input type='text' placeholder='[Juan Pérez]' value={item.nombre}></input>
                <br></br><br></br><br></br>
                <label class='slabel'>Celular del desarrollador</label>
                <input type='text' placeholder='[Celular]' value={item.contacto}></input>
                <br></br><br></br>
              </div>
            )}

            <h2 class='header2'>Datos del Cliente</h2>
            <label class='slabel'>Nombre del cliente</label>
            <input type='text' placeholder='[Nombre del cliente]' value={nombrecliente} onChange={handleClienteChange}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Domicilio (Calle y Número)</label>
            <input type='text' placeholder='[Domicilio]' value={domiciliocliente}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Colonia</label>
            <input type='text' placeholder='[Colonia]' value={coloniacliente}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Ciudad</label>
            <input type='text' placeholder='[Ciudad]' value={ciudadcliente}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Estado</label>
            <input type='text' placeholder='[Estado]' value={estadocliente}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Celular</label>
            <input type='text' placeholder='[Celular]' value={celularcliente}></input><br/>
            <br></br><br></br>

            <h2 class='header2'>Datos del Negocio</h2>
            <label class='slabel'>Nombre del negocio</label>
            <input type='text' placeholder='[Nombre del negocio]' value={nombrenegocio} onChange={handleNegocioChange}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Dirección (Calle y Número)</label>
            <input type='text' placeholder='[Dirección]' value={direccionnegocio}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Colonia</label>
            <input type='text' placeholder='[Colonia]' value={colonianegocio}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Ciudad</label>
            <input type='text' placeholder='[Ciudad]' value={ciudadnegocio}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Estado</label>
            <input type='text' placeholder='[Estado]' value={estadonegocio}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Celular</label>
            <input type='text' placeholder='[Celular]' value={celularnegocio}></input><br/>
            <br></br><br></br>

            <h2 class='header2'>Datos de factibilidad</h2>
            <label class='slabel'>Número de Cliente</label>
            <input type='text' placeholder='[Número de Cliente]' value={numeroclientenegocio}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Tamaño</label>
            <input type='text' placeholder='[Tamaño]' value={tamanonegocio}></input><br/>
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