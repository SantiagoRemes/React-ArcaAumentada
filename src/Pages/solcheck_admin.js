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
import { handleidChange } from './components/tabla'

function Solicitud() {
  let {id, idSolicitud} = useParams();

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
  const [puertasnegocio, setNegociopuertas] = useState();
  const [puertasact, setNegociopuertasact] = useState();
  //const [ventasactualesnegocio, setNegocioventasactuales] = useState();
  //const [puertassolicitarnegocio, setNegociopuertassolicitar] = useState();

  const [RefriporTienda, setRefriporTienda] = useState('')

  const [Solicituddatos, setSolicituddatos] = useState('')

  useEffect(() => {
    fetch(`http://localhost:2000/solicitud/idsol/${idSolicitud}`)
    .then( (res) => res.json())
    .then((data)=> setSolicituddatos(data));

    fetch(`http://localhost:2000/desarrollador/${id}`)
    .then( (res) => res.json())
    .then((data)=> setDesarrollador(data));
    handleCediChange();
    handleNegocioChange();
    handleClienteChange();
  }, []);

  const handleCediChange = () => {
    let nombre = Solicituddatos && Solicituddatos[0].CEDINombre
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

  const handleClienteChange = () => {
    let nombre = negocio && negocio[0].idDueño
    setClientenombre(nombre);
    if(nombre === ''){
      nombre = 'a'
    }
    fetch(`http://localhost:2000/dueno/id/${nombre}`)
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

  const handleNegocioChange = () => {
    let nombre = Solicituddatos && Solicituddatos[0].idTienda
    setNegocionombre(nombre);
    if(nombre === ''){
      nombre = 'a'
    }
    fetch(`http://localhost:2000/tienda/id/${nombre}`)
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
        setNegocionumerocliente('');
        setNegociotamano('');
      }
    }
    catch(err){

    }
    fetch(`http://localhost:2000/refrisolicitado/refriportienda/${numeroclientenegocio}`)
    .then( (res) => res.json())
    .then((data)=> setRefriporTienda(data));

    fetch(`http://localhost:2000/refrisolicitado/sum/${numeroclientenegocio}`)
    .then( (res) => res.json())
    .then((data)=> setNegociopuertas(data));
    try{
      if(puertasnegocio.length !== 0){
        setNegociopuertasact(puertasnegocio && puertasnegocio[0].puertastot)
      }
      else if(puertasnegocio !== ''){
        setNegociopuertasact('')
      }
    }
    catch(err){
      
    }
  };

  const [exito, setExito] = useState(false);
  const [error, setError] = useState("");
  const [respPost, setRespPost] = useState("");

  const UpdateNoPog = () => {
    const url = `http://localhost:2000/solicitud/update/${idSolicitud}`;
    const data = {
      estatus: `Negada`,
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
        .then((res) => res.json())
        .then((respPost) => {
          setRespPost(respPost);
          console.log(respPost);
          alert(`Rechazado de manera exitosa`);
          setExito(true);
        })
        .catch((err) => {
          setError(err);
          setExito(false);
        });
  }
  const UpdatePog = () => {
    const url = `http://localhost:2000/solicitud/update/${idSolicitud}`;
    const data = {
      estatus: `Aprobada`,
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
        .then((res) => res.json())
        .then((respPost) => {
          setRespPost(respPost);
          console.log(respPost);
          alert(`Aprovado de manera exitosa`);
          setExito(true);
        })
        .catch((err) => {
          setError(err);
          setExito(false);
        });
  }
 
  return (
    <div>
      <div class='redbg'>
            <Nav.Link href={`/${id}/historialadmin`}><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
            <h1 class='header'>Datos de la Solicitud</h1>
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
            <input type='text' placeholder='[Número actual de puertas]' value={puertasact}></input><br/>
            <br></br><br></br>
            <label class='slabel'>Número de puertas a solicitar</label>
            <input type='text' placeholder='[Número de puertas a solicitar]'></input><br/>
            <br></br><br></br>

            <label class='header2'>Listado de EDF actual</label>
            <table class='table'>
                    <thead class='tableheader'> 
                        <tr>
                            <th>Cantidad</th>
                            <th>Modelo</th>
                            <th>Código único EDF</th>
                            <th># de puertas</th>
                            <th> Movimiento</th>
                            <th>Razón</th>
                        </tr>
                    </thead>
                    <tbody>
                    {RefriporTienda && RefriporTienda.map((item) => (
                <Table type='curr' item={item}/>
                ))}
                    </tbody>
                </table>
            <br></br><br></br>
            <label class='header2'>Listado de EDF a solicitar</label>
            <Table type='solic'/><br/>
            <br></br><br></br>
            <label class='slabel'>Evidencia</label>

          </form>
      </div>
      <div>
        <img src='a.jpg' width='200px' height='200px'></img>
      </div>
      <br></br><br></br>
      <button class='bot' type="submit" onClick={(e) => {e.preventDefault(); UpdatePog();}}>Aprovar</button>
      <br></br><br></br>
      <button class='bot' type="submit" onClick={(e) => {e.preventDefault(); UpdateNoPog();}}>Rechazar</button>
    </div>

    
  )
}

export default Solicitud