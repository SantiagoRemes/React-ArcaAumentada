import React from 'react';
import BackArrow from '../images/backarrow.png';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from "react";
import Table from './components/tabla';
import { useNavigate } from 'react-router-dom';

function Solcheck() {

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

  const [classtable, setClasstable] = useState();
  const [disable, setDisable] = useState(false);

  const [isdes, setIsdes] = useState(false);
  const [isadmin, setIsadmin] = useState(false);
  const [ischofer, setIschofer] = useState(false);

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
    if(rol === 'Des'){
      setIsdes(true);
    }
    else if(rol === 'Admin'){
      setDisable(true)
      setIsadmin(true);
    }
    else if(rol === 'Chofer'){
      setIschofer(true);
      setDisable(true)
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
  const [refresh2, setRefresh2]= useState(false);

  const [isnotpendiente, setIsnotpendiente]= useState(false);

  const [admin, setAdmin] = useState(false);

  const CallBack= (refresh) => {
    setRefresh2(refresh)
  }
  
  useEffect(() =>{
    const url = `http://192.168.1.131:2000/refrisolicitado/refriportiendamov`;
    const data = {
      idTienda: `${numeroclientenegocio}`,
      idSolicitud: `${idSolicitud}`,
      movimiento: `Cambiar`
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
    .then((data) => {setRefriporTiendaMov(data); setRefresh2(false)})
      .catch((err) => {
      }
    );
  }, [refresh2])
  
  useEffect(() => {
    setNegociopuertasact(puertasnegocio && puertasnegocio[0].puertastot);
  }, [puertasnegocio])

  useEffect(() => {
    const url = `http://192.168.1.131:2000/refrisolicitado/refriportienda`;
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

    const url2 = `http://192.168.1.131:2000/refrisolicitado/refriportiendamov`;
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

    fetch(`http://192.168.1.131:2000/refrisolicitado/sum/${numeroclientenegocio}`)
    .then( (res) => res.json())
    .then((data)=> setNegociopuertas(data));

  }, [numeroclientenegocio])

  useEffect(() => {
    if(Solicituddatos && Solicituddatos[0].estatus === 'Aprobada' || Solicituddatos && Solicituddatos[0].estatus === 'Negada'){
      setIsnotpendiente(true);
    }
    if(Solicituddatos && Solicituddatos[0].idAdministrador !== 'null'){
      fetch(`http://192.168.1.131:2000/administrador/${Solicituddatos[0].idAdministrador}`)
        .then( (res) => res.json())
        .then((data)=> setAdmin(data));
    }

    setFechasolicitud(Solicituddatos && Solicituddatos[0].fecha_solicitud.substring(0, 10))
    setCeditext(Solicituddatos && Solicituddatos[0].CEDINombre[0]);
    setCediregion(Solicituddatos && Solicituddatos[0].region);
    setCedipais(Solicituddatos && Solicituddatos[0].pais);

    setNumdesarrollador(Solicituddatos && Solicituddatos[0].idDesarrollador[0])
    setNombredesarrollador(Solicituddatos && Solicituddatos[0].nombre[1])
    setDescontacto(Solicituddatos && Solicituddatos[0].contacto)

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
    fetch(`http://192.168.1.131:2000/solicitud/solicitudall/${idSolicitud}`)
    .then( (res) => res.json())
    .then((data)=> setSolicituddatos(data));

    fetch(`http://192.168.1.131:2000/refrisolicitado/refrisolicitud/${idSolicitud}`)
    .then( (res) => res.json())
    .then((data)=> setRefriSolicitud(data));

    fetch(`http://192.168.1.131:2000/refrisolicitado/refrisolicitudpuertas/${idSolicitud}`)
    .then( (res) => res.json())
    .then((data)=> setRefriSolicitudpuertas(data));
  }, []);

  const AceptarCambios = () => {
    const url = `http://192.168.1.131:2000/solicitud/aceptarcambios`;
    const data = {
      id: `${idSolicitud}`
    }
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
    .then((res) => res.json())
    .then((data) => {setRefriporTiendaMov(data); alert('Solicitud actualizada correctamente'); navigate('/historial')})
      .catch((err) => {
        alert('Solicitud no actualizada')
        alert(err)
      }
    );
  }

  const BorrarSolicitud = () => {
    const url = `http://192.168.1.131:2000/solicitud/borrarsolicitud/${idSolicitud}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, options)
    .then((res) => res.json())
    .then((data) => {setRefriporTiendaMov(data); alert('Solicitud borrada correctamente'); navigate('/historial')})
      .catch((err) => {
        alert('Solicitud no borrada')
        alert(err)
      }
    );
  }

  const NegarSolicitud = () => {
    const url = `http://192.168.1.131:2000/solicitud/update/${idSolicitud}`;
    const data = {
    estatus: `Negada`,
    fecha: `null`,
    idAdministrador: `${id}`
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
      .then((data) => {setRefriporTiendaMov(data); alert('Solicitud negada correctamente'); navigate('/historial')})
        .catch((err) => {
          alert('Solicitud no negada')
          alert(err)
        }
      );
    }

    const [idchoferseleccionado, setIdchoferSeleccionado] = useState();
    const [aprobarmedia, setAprobarmedia] = useState(true);
    const [choferes, setChoferes] = useState();

    useEffect(() => {
      setIdchoferSeleccionado(choferes && choferes[0].idChofer)
    }, [choferes])

    const AprobarMedia = () => {
      setAprobarmedia(false);
      fetch(`http://192.168.1.131:2000/chofer`)
      .then( (res) => res.json())
      .then((data)=> setChoferes(data));
    }

    const AprobarSolicitud = () => {
      const url = `http://192.168.1.131:2000/solicitud/chofer/${idSolicitud}`;
      const data = {
      idChofer: `${idchoferseleccionado}`
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
        .then((data) => {setRefriporTiendaMov(data); alert('Chofer actualizado correctamente')})
          .catch((err) => {
            alert('Chofer no actualizado')
            alert(err)
          }
        );

      const url2 = `http://192.168.1.131:2000/solicitud/update/${idSolicitud}`;
      const data2 = {
      estatus: `Aprobada`,
      fecha: `${new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()}`,
      idAdministrador: `${id}`
    };
    const options2 = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2),
    };
        fetch(url2, options2)
        .then((res) => res.json())
        .then((data) => {setRefriporTiendaMov(data); alert('Solicitud aprobada correctamente'); navigate('/historial')})
          .catch((err) => {
            alert('Solicitud no aprobada')
            alert(err)
          }
        );
      }
    const ChoferChange = (e) => {
      setIdchoferSeleccionado(e.target.value);
    }

    const TerminarSolicitud = () => {
      const url = `http://192.168.1.131:2000/solicitud/terminar/${idSolicitud}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {setRefriporTiendaMov(data); alert('Solicitud terminada correctamente'); navigate('/historial')})
          .catch((err) => {
            alert('Solicitud no terminada')
            alert(err)
          }
        );
      }

  return (
    <div>
      <div class='redbg'>
        <Nav.Link href="/historial"><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
        <h1 class='header'>Datos de la Solicitud</h1>
      </div>
      <br></br><br></br><br></br>
      <div>
        {isnotpendiente ? (
          <div>
          <h2 class='header2'>{Solicituddatos && Solicituddatos[0].estatus} por {admin && admin[0].nombre}</h2>
          <br /><br />
        </div>
        ) : (
          <div></div>
        )
        }
        
        <form>
          <div class='form-group'>
            <div>
              <h2 class='header2'>Datos de la solicitud</h2>
              <label class='slabel'>Fecha</label>
              <input type='text' placeholder='[Fecha]' id='Fecha' value={fecha_solicitud}></input><br></br>
              <br></br>
              <label class='slabel'>CEDI</label>
              <input type='text' placeholder='[CEDI]' value={ceditext}></input><br/>
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
              <input type='text' placeholder='[Celular]' value={descontacto}></input>
            </div>
          </div>
          <br></br><br></br>
          <div className='form-group'>
            <div>
              <h2 class='header2'>Datos del Cliente</h2>
              <label class='slabel'>Nombre del cliente</label>
              <input type='text' placeholder='[Nombre del cliente]' value={nombrecliente}></input><br/>
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
              <input type='text' placeholder='[Nombre del negocio]' value={nombrenegocio}></input><br/>
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
          <div className='form-group'>
            <div>
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
            <label class='slabel'>Número de puertas a solicitar</label>
            <input type='text' placeholder='[Número de puertas a solicitar]' value={puertassolicitarnegocio}></input><br/>
            <br></br>
            </div>
          </div>
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
              {RefriporTienda && RefriporTienda.map((item) => (
                <Table type='curr' item={item} handleCallBack={CallBack} disable={disable}/>
              ))}
            </tbody>
          </table>
          <br></br><br></br>
          <label class='header2'>Listado de EDF a solicitar</label>
          <table class={classtable}>
            <thead class='tableheader'> 
              <tr>
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
                <Table type='solic' item={item} RefriSolicitud={RefriporTiendaMov} idSol={idSolicitud} handleCallBack={CallBack} disable={disable}/>
              ))}
            </tbody>
          </table>
          <br></br><br></br>
        </form>
      </div>
      <br></br><br></br>
      <div>
        {isdes ? (
          <div>
            <button class='botspace' onClick={AceptarCambios}>Aceptar cambios</button>
            <button class='botspace' onClick={BorrarSolicitud}>Borrar solicitud</button>
          </div>
        ) : (
          <div></div>
        )}
        {isadmin ? (
          <div>
            <div hidden={aprobarmedia}>
                <label class='header2'>Seleccionar Chofer</label><br/>
                  <select value={idchoferseleccionado} onChange={ChoferChange}>
                    {choferes && choferes.map((item) => (
                    <option value={item.idChofer}>{item.nombre}</option>
                    ))}
                  </select><br/>
                  <button class='botspace' onClick={AprobarSolicitud}>Seleccionar Chofer</button>
              </div>
            <button class='botspace' onClick={NegarSolicitud}>Negar Solicitud</button>
            <button class='botspace' onClick={AprobarMedia} hidden={!aprobarmedia}>Aprobar Solicitud</button>
              
          </div>
        ) : (
          <div></div>
        )}
        {ischofer ? (
          <div>
            <button class='botspace' onClick={NegarSolicitud}>Negar Solicitud</button>
            <button class='botspace' onClick={TerminarSolicitud}>Terminar Solicitud</button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Solcheck