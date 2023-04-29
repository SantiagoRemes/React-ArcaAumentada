import React from 'react';
import BackArrow from '../images/backarrow.png';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from "react";
import Table from './components/tabla';
import { useNavigate } from 'react-router-dom';

function Solicitud() {

  const navigate = useNavigate();
  var id = '';
  var rol = '';
  try{
    var { id, rol }  = JSON.parse(localStorage.getItem('dataKey'));
  }
  catch{
    var id = '';
    var rol = '';
  }
  useEffect(() => {
    if(id === ''){
      navigate('/')
    }
  }, [])

  let {idSolicitud} = useParams();

  const [Solicituddatos, setSolicituddatos] = useState()

  const [fecha_solicitud, setFechasolicitud] = useState();
  const [paiscedi, setCedipais] = useState();
  const [regioncedi, setCediregion] = useState();
  const [ceditext, setCeditext] = useState();
  
  const [numdesarrollador, setNumdesarrollador] = useState();
  const [nombredesarrollador, setNombredesarrollador] = useState();
  const [descontacto, setDescontacto] = useState();

  const [nombrecliente, setClientenombre] = useState();
  const [domiciliocliente, setClientedomicilio] = useState();
  const [coloniacliente, setClientecolonia] = useState();
  const [ciudadcliente, setClienteciudad] = useState();
  const [estadocliente, setClienteestado] = useState();
  const [celularcliente, setClientecelular] = useState();

  const [nombrenegocio, setNegocionombre] = useState();
  const [direccionnegocio, setNegociodireccion] = useState();
  const [colonianegocio, setNegociocolonia] = useState();
  const [ciudadnegocio, setNegociociudad] = useState();
  const [estadonegocio, setNegocioestado] = useState();
  const [celularnegocio, setNegociocelular] = useState();

  const [numeroclientenegocio, setNegocionumerocliente] = useState();
  const [tamanonegocio, setNegociotamano] = useState();
  //const [ventasactualesnegocio, setNegocioventasactuales] = useState();
  const [puertasact, setNegociopuertasact] = useState();
  const [puertassolicitarnegocio, setNegociopuertassolicitar] = useState();

  const [RefriporTienda, setRefriporTienda] = useState();
  const [RefriporTiendaMov, setRefriporTiendaMov] = useState();
  const [puertasnegocio, setNegociopuertas] = useState();
  const [solicitudrefris, setRefriSolicitud] = useState();
  const [solicitudrefrispuertas, setRefriSolicitudpuertas] = useState();

  useEffect(() => {
    setNegociopuertasact(puertasnegocio && puertasnegocio[0].puertastot);
  }, [puertasnegocio])

  useEffect(() => {
    const url = `http://localhost:2000/refrisolicitado/refriportienda`;
    const data = {
      idTienda: `${numeroclientenegocio}`,
      idSolicitud: `${idSolicitud}`,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
    .then((res) => res.json())
    .then((data) => {setRefriporTienda(data)})
      .catch((err) => {
      }
    );

    const url2 = `http://localhost:2000/refrisolicitado/refriportiendamov`;
    const data2 = {
      idTienda: `${numeroclientenegocio}`,
      idSolicitud: `${idSolicitud}`,
      movimiento: `Cambiar`
    };
    const options2 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2),
    };
    fetch(url2, options2)
    .then((res) => res.json())
    .then((data) => {setRefriporTiendaMov(data)})
      .catch((err) => {
      }
    );

    fetch(`http://localhost:2000/refrisolicitado/sum/${numeroclientenegocio}`)
    .then( (res) => res.json())
    .then((data)=> setNegociopuertas(data));

  }, [numeroclientenegocio])

  useEffect(() => {
    setFechasolicitud(Solicituddatos && Solicituddatos[0].fecha_solicitud.substring(0, 10))
    setCeditext(Solicituddatos && Solicituddatos[0].CEDINombre[0]);
    setCediregion(Solicituddatos && Solicituddatos[0].region);
    setCedipais(Solicituddatos && Solicituddatos[0].pais);

    setNumdesarrollador(Solicituddatos && Solicituddatos[0].idDesarrollador[0])
    setNombredesarrollador(Solicituddatos && Solicituddatos[0].nombre[3])
    setDescontacto(Solicituddatos && Solicituddatos[0].contacto[2])

    setClientenombre(Solicituddatos && Solicituddatos[0].nombre_Completo);
    setClientedomicilio(Solicituddatos && Solicituddatos[0].calle_no[1]);
    setClientecolonia(Solicituddatos && Solicituddatos[0].colonia[1]);
    setClienteciudad(Solicituddatos && Solicituddatos[0].ciudad[1]);
    setClienteestado(Solicituddatos && Solicituddatos[0].estado[1]);
    setClientecelular(Solicituddatos && Solicituddatos[0].celular[1]);

    setNegocionombre(Solicituddatos && Solicituddatos[0].nombre[0]);
    setNegociodireccion(Solicituddatos && Solicituddatos[0].calle_no[0]);
    setNegociocolonia(Solicituddatos && Solicituddatos[0].colonia[0]);
    setNegociociudad(Solicituddatos && Solicituddatos[0].ciudad[0]);
    setNegocioestado(Solicituddatos && Solicituddatos[0].estado[0]);
    setNegociocelular(Solicituddatos && Solicituddatos[0].celular[0]);

    setNegocionumerocliente(Solicituddatos && Solicituddatos[0].idTienda[0])
    setNegociotamano(Solicituddatos && Solicituddatos[0].tamaño)
    //
    if(solicitudrefrispuertas && solicitudrefrispuertas.length !== 0){
      setNegociopuertassolicitar(solicitudrefrispuertas && solicitudrefrispuertas[0].puertas)
    }
    else{
      setNegociopuertassolicitar(0)
    }
  }, [Solicituddatos])

  useEffect(() => {
    fetch(`http://localhost:2000/solicitud/solicitudall/${idSolicitud}`)
    .then( (res) => res.json())
    .then((data)=> setSolicituddatos(data));

    fetch(`http://localhost:2000/refrisolicitado/refrisolicitud/${idSolicitud}`)
    .then( (res) => res.json())
    .then((data)=> setRefriSolicitud(data));

    fetch(`http://localhost:2000/refrisolicitado/refrisolicitudpuertas/${idSolicitud}`)
    .then( (res) => res.json())
    .then((data)=> setRefriSolicitudpuertas(data));
  }, []);

  return (
    <div>
      <div class='redbg'>
        <Nav.Link href="/historial"><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
        <h1 class='header'>Datos de la Solicitud</h1>
      </div>
      <br></br><br></br><br></br>
      <h2 class='header2'>Datos de la solicitud</h2>
      <div>
        <form>
          <label class='slabel'>Fecha</label>
          <input type='text' placeholder='[Fecha]' id='Fecha' value={fecha_solicitud}></input><br></br>
          <br></br><br></br>
          <label class='slabel'>CEDI</label>
          <input type='text' placeholder='[CEDI]' value={ceditext}></input><br/>
          <br></br><br></br>
          <label class='slabel'>País</label>
          <input type='text' placeholder='[País]' value={paiscedi}></input><br/>
          <br></br><br></br><br></br>
          <label class='slabel'>Región</label>
          <input type='text' placeholder='[Región]' value={regioncedi} ></input><br/>
          <br></br><br></br>
            
          <h2 class='header2'>Datos del Desarrollador</h2>
          <label class='slabel'>Número de empleado</label>
          <input type='text' placeholder='[Num Empleado]' value={numdesarrollador}></input><br></br>
          <br></br><br></br>
          <label class='slabel'>Nombre del desarrollador</label>
          <input type='text' placeholder='[Juan Pérez]' value={nombredesarrollador}></input>
          <br></br><br></br><br></br>
          <label class='slabel'>Celular del desarrollador</label>
          <input type='text' placeholder='[Celular]' value={descontacto}></input>
          <br></br><br></br>

          <h2 class='header2'>Datos del Cliente</h2>
          <label class='slabel'>Nombre del cliente</label>
          <input type='text' placeholder='[Nombre del cliente]' value={nombrecliente}></input><br/>
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
          <input type='text' placeholder='[Nombre del negocio]' value={nombrenegocio}></input><br/>
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
          <input type='text' placeholder='[Número de puertas a solicitar]' value={puertassolicitarnegocio}></input><br/>
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
          <table class='table'>
            <thead class='tableheader'> 
              <tr>
                <th>Cantidad</th>
                <th>Modelo</th>
                <th>Código único EDF</th>
                <th># de puertas</th>
                <th>Movimiento</th>
                <th>Remplaza</th>
                <th>Razón</th>
                <th>Checklist</th>
                <th>Evidencia</th>
              </tr>
            </thead>
            <tbody>
              {solicitudrefris && solicitudrefris.map((item) => (
                <Table type='solic' item={item} RefriSolicitud={RefriporTiendaMov}/>
              ))}
            </tbody>
          </table>
          <br></br><br></br>
        </form>
      </div>
      <br></br><br></br>
      <div>
        <button class='botspace'>Aceptar cambios</button>
        <button class='botspace'>Borrar solicitud</button>
      </div>
    </div>
  )
}

export default Solicitud