import React from 'react';
import BackArrow from '../images/backarrow.png';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  const [fecha_solicitud, setFechasolicitud] = useState();
  const [CEDI, setCEDI] = useState([]);
  const [paiscedi, setCedipais] = useState();
  const [regioncedi, setCediregion] = useState();
  const [ceditext, setCeditext] = useState();
  
  const [Desarrollador, setDesarrollador] = useState();
  const [numdesarrollador, setDesarrolladornum] = useState();
  const [nombredesarrollador, setDesarrolladornombre] = useState();
  const [celdesarrollador, setDesarrolladorcel] = useState();
  

  const [cliente, setCliente] = useState([]);
  const [nombrecliente, setClientenombre] = useState();
  const [domiciliocliente, setClientedomicilio] = useState();
  const [coloniacliente, setClientecolonia] = useState();
  const [ciudadcliente, setClienteciudad] = useState();
  const [estadocliente, setClienteestado] = useState();
  const [celularcliente, setClientecelular] = useState();

  const [negocio, setNegocio] = useState([]);
  const [nombrenegocio, setNegocionombre] = useState();
  const [direccionnegocio, setNegociodireccion] = useState();
  const [colonianegocio, setNegociocolonia] = useState();
  const [ciudadnegocio, setNegociociudad] = useState();
  const [estadonegocio, setNegocioestado] = useState();
  const [celularnegocio, setNegociocelular] = useState();

  const [numeroclientenegocio, setNegocionumerocliente] = useState('');
  const [tamanonegocio, setNegociotamano] = useState();

  const [puertasnegocio, setNegociopuertas] = useState([]);
  const [puertasact, setNegociopuertasact] = useState();

  const [RefriPorTienda, setRefriporTienda] = useState();

  const [classtable, setClasstable] = useState();

  const CallBack = () => {

  }

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIPhone = /iPhone/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);
    if(isIPhone || isAndroid){
      setClasstable('mobiletable')
    }
    else{
      setClasstable('table')
    }
  }, [])

  useEffect(() => {
    setFechasolicitud(new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate())

    fetch(`http://192.168.1.131:2000/desarrollador/${id}`)
    .then( (res) => res.json())
    .then((data)=> {setDesarrollador(data)});
  }, []);

  useEffect(() => {
    setDesarrolladornum(Desarrollador && Desarrollador[0].idDesarrollador);
    setDesarrolladorcel(Desarrollador && Desarrollador[0].contacto);
    setDesarrolladornombre(Desarrollador && Desarrollador[0].nombre);
  }, [Desarrollador])

  

////////////////////
  const handleCEDIChange = (e) => {
    setCeditext(e.target.value)
  }

  useEffect(() => {
    var nombre = ceditext
    if(nombre === ''){
      nombre = 'a'
    }
    fetch(`http://192.168.1.131:2000/CEDI/${nombre}`)
    .then( (res) => res.json())
    .then((data)=> setCEDI(data));
  }, [ceditext])

  useEffect(() => {
    if(CEDI.length !== 0){
      setCedipais(CEDI && CEDI[0].pais)
      setCediregion(CEDI && CEDI[0].region)
    }
    else{
      setCedipais('')
      setCediregion('')
    }
  }, [CEDI])
////////////////////


////////////////////
const handleClienteChange = (e) => {
  setClientenombre(e.target.value)
}

  useEffect(() => {
    var nombre = nombrecliente
    if(nombre === ''){
      nombre = 'a'
    }
    fetch(`http://192.168.1.131:2000/dueno/${nombre}`)
    .then( (res) => res.json())
    .then((data)=> setCliente(data));
  }, [nombrecliente])

useEffect(() => {
  if(cliente.length !== 0){
    setClientedomicilio(cliente && cliente[0].calle_no);
    setClientecolonia(cliente && cliente[0].colonia);
    setClienteciudad(cliente && cliente[0].ciudad);
    setClienteestado(cliente && cliente[0].estado);
    setClientecelular(cliente && cliente[0].celular);
  }
  else{
    setClientedomicilio('');
    setClientecolonia('');
    setClienteciudad('');
    setClienteestado('');
    setClientecelular('');
  }
}, [cliente])
////////////////////


////////////////////
const handleNegocioChange = (e) => {
  setNegocionombre(e.target.value)
}

useEffect(() => {
  var nombre = nombrenegocio
    if(nombre === ''){
      nombre = 'a'
    }
  fetch(`http://192.168.1.131:2000/tienda/${nombre}`)
  .then( (res) => res.json())
  .then((data)=> setNegocio(data));
}, [nombrenegocio])

useEffect(() => {
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
}, [negocio])
////////////////////
useEffect(() => {
  if(numeroclientenegocio !== ''){
    fetch(`http://192.168.1.131:2000/refrisolicitado/sum/${numeroclientenegocio}`)
    .then( (res) => res.json())
    .then((data)=> setNegociopuertas(data));
  }
}, [numeroclientenegocio])

useEffect(() => {
  if(numeroclientenegocio !== ''){
    setNegociopuertasact(puertasnegocio && puertasnegocio[0].puertastot);
    const url = `http://192.168.1.131:2000/refrisolicitado/refriportienda`;
    const data = {
      idTienda: `${numeroclientenegocio}`,
      idSolicitud: `0`,
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
      }, []);
  }
}, [puertasnegocio])

////////////////////

  const CrearSolicitud = () => {
    const url = `http://192.168.1.131:2000/solicitud/add`;
    const data = {
      idDesarrollador: `${numdesarrollador}`,
      CEDINombre: `${ceditext}`,
      idTienda: `${numeroclientenegocio}`,
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
    .then((data) => {
      alert('Solicitud creada exitosamente')
      navigate('main/')
    })
      .catch((err) => {
        alert('Solicitud no creada')
        alert(err)
      }, []);
  }
 
    return (
      <div>
        <div class='redbg'>
          <Nav.Link href="/main"><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
          <h1 class='header'>Datos de la Solicitud</h1>
        </div>
        <br></br><br></br><br></br>
        <div>          
          <form>
            <div class='form-group'>
              <div>
                <h2 class='header2'>Datos de la solicitud</h2>
                <label class='slabel'>Fecha</label>
                <input type='text' placeholder='[Fecha]' id='Fecha' value={fecha_solicitud}></input><br></br>
                <br></br>
                <label class='slabel'>CEDI</label>
                <input type='text' placeholder='[CEDI]' value={ceditext} onChange={handleCEDIChange}></input><br/>
                <br></br>
                <label class='slabel'>País</label>
                <input type='text' placeholder='[País]' value={paiscedi}></input><br/>
                <br></br>
                <label class='slabel'>Región</label>
                <input type='text' placeholder='[Región]' value={regioncedi} ></input><br/>
                <br></br>
              </div>   
              <div> 
                <h2 class='header2'>Datos del Desarrollador</h2>
                <label class='slabel'>Número de empleado</label>
                <input type='text' placeholder='[Num Empleado]' value={numdesarrollador}></input><br></br>
                <br></br>
                <label class='slabel'>Nombre del desarrollador</label>
                <input type='text' placeholder='[Juan Pérez]' value={nombredesarrollador}></input><br/>
                <br></br>
                <label class='slabel'>Celular del desarrollador</label>
                <input type='text' placeholder='[Celular]' value={celdesarrollador}></input>
              </div>
            </div>
            <br></br><br></br>
            <div className='form-group'>
              <div>
                <h2 class='header2'>Datos del Cliente</h2>
                <label class='slabel'>Nombre del cliente</label>
                <input type='text' placeholder='[Nombre del cliente]' value={nombrecliente} onChange={handleClienteChange}></input><br/>
                <br></br>
                <label class='slabel'>Domicilio (Calle y Número)</label>
                <input type='text' placeholder='[Domicilio]' value={domiciliocliente}></input><br/>
                <br></br>
                <label class='slabel'>Colonia</label>
                <input type='text' placeholder='[Colonia]' value={coloniacliente}></input><br/>
                <br></br>
                <label class='slabel'>Ciudad</label>
                <input type='text' placeholder='[Ciudad]' value={ciudadcliente}></input><br/>
                <br></br>
                <label class='slabel'>Estado</label>
                <input type='text' placeholder='[Estado]' value={estadocliente}></input><br/>
                <br></br>
                <label class='slabel'>Celular</label>
                <input type='text' placeholder='[Celular]' value={celularcliente}></input><br/>
              </div>
              <div>
                <h2 class='header2'>Datos del Negocio</h2>
                <label class='slabel'>Nombre del negocio</label>
                <input type='text' placeholder='[Nombre del negocio]' value={nombrenegocio} onChange={handleNegocioChange}></input><br/>
                <br></br>
                <label class='slabel'>Dirección (Calle y Número)</label>
                <input type='text' placeholder='[Dirección]' value={direccionnegocio}></input><br/>
                <br></br>
                <label class='slabel'>Colonia</label>
                <input type='text' placeholder='[Colonia]' value={colonianegocio}></input><br/>
                <br></br>
                <label class='slabel'>Ciudad</label>
                <input type='text' placeholder='[Ciudad]' value={ciudadnegocio}></input><br/>
                <br></br>
                <label class='slabel'>Estado</label>
                <input type='text' placeholder='[Estado]' value={estadonegocio}></input><br/>
                <br></br>
                <label class='slabel'>Celular</label>
                <input type='text' placeholder='[Celular]' value={celularnegocio}></input><br/>
              </div>
            </div>
            <br></br><br></br>
            <div className='inner_from_group'>
            <h2 class='header2'>Datos de factibilidad</h2>
            <label class='slabel'>Número de Cliente</label>
            <input type='text' placeholder='[Número de Cliente]' value={numeroclientenegocio}></input><br/>
            <br></br>
            <label class='slabel'>Tamaño</label>
            <input type='text' placeholder='[Tamaño]' value={tamanonegocio}></input><br/>
            <br></br>
            <label class='slabel'>Número actual de puertas</label>
            <input type='text' placeholder='[Número actual de puertas]' value={puertasact}></input><br/>
            <br></br>
            </div>
            <br /><br /><br /><br />
            <label class='header2'>Listado de EDF actual</label>
            <table class={classtable}>
              <thead class='tableheader'> 
                <tr>
                  <th>Modelo</th>
                  <th>Código único EDF</th>
                  <th># de puertas</th>
                  <th> Movimiento</th>
                  <th>Razón</th>
                </tr>
              </thead>
              <tbody>
                {RefriPorTienda && RefriPorTienda.map((item) => (
                  <Table key={item.idRefrigeradorSolicitado} type='curr' item={item} handleCallBack={CallBack} disable={true} disable2={true}/>
                ))}
              </tbody>
            </table>
            <br></br><br></br>
            <button class='bot' onClick={CrearSolicitud}>Crear Solicitud</button>
            <br /><br />
          </form>
        </div>
      </div>
    )
}

export default Solicitud