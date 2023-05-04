import React from "react";
import { useState, useEffect } from "react";

const Metrics = (props) =>{

  const { id,rol } = props

  const [solicitudpendiente, setSolicitudpendiente] = useState("");
  const [solicitudterminada, setSolicitudterminada] = useState("");
  const [solicitudcreadas, setSolicitudcreadas] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [solicitudesadmintaprobadas, setSolicitudadmintaprobadas] = useState([]);

  const [solicitudeschoferpendientes, setSolicitudeschoferpendientes] = useState([]);
  const [solicitudeschoferterminada, setSolicitudchoferterminada] = useState([]);

  useEffect(() => {
    if(rol === 'Des'){
      const url = `http://192.168.1.131:2000/solicitud/byestado`;
      const datapendiente = {
        idDes: `${id}`,
        estatus: `Pendiente`,
      };
      const optionspendiente = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datapendiente),
      };
      fetch(url, optionspendiente)
      .then((res) => res.json())
      .then((data) => {setSolicitudpendiente(data)})
        .catch((err) => {
        }
      );


      const dataterminada = {
        idDes: `${id}`,
        estatus: `Terminada`,
      };
      const optionsterminada = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataterminada),
      };

      fetch(url, optionsterminada)
      .then((res) => res.json())
      .then((data) => {setSolicitudterminada(data)})
        .catch((err) => {
        }
      );

      fetch(`http://192.168.1.131:2000/solicitud/idesdate/${id}`)
        .then( (res) => res.json())
        .then((data)=>setSolicitudcreadas(data));
    }
    else if(rol === 'Admin'){
      const urladmin = `http://192.168.1.131:2000/solicitud/byestadoadmin`;
      const dataadmin = {
        idAdmin: `${id}`,
      };
      const optionsadmin = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataadmin),
      };
      fetch(urladmin, optionsadmin)
      .then((res) => res.json())
      .then((data) => {setSolicitudadmintaprobadas(data)})
        .catch((err) => {
        }
        
      );
    }
    else if(rol === 'Chofer'){
      fetch(`http://localhost:2000/solicitud/chofer/${id}`)
            .then( (res) => res.json())
            .then((data)=> setSolicitudeschoferpendientes(data));

      const url = `http://192.168.1.131:2000/solicitud/byestadochofer`;
      const data = {
        idChofer: `${id}`,
        estatus: `Terminada`,
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
      .then((data) => {setSolicitudchoferterminada(data)})
        .catch((err) => {
        }
      );
    }
  }, [])
  
  if(rol === 'Chofer'){
    return(
      <div>
        <div className='percentage'>
          <h1>{Math.round((solicitudeschoferterminada && solicitudeschoferterminada.length / 30) * 100)}%</h1>
          <p>De la meta mensual alcanzado</p>
        </div>
        <div className='metrics'>
          <div className='pending_sol'>
            <b><p className='amnt'>{solicitudeschoferpendientes && solicitudeschoferpendientes.length}</p></b>
            <p className='lbl'>Solicitudes pendientes</p>
          </div>
          <div className='compl_sol'>
            <b><p className='amnt'>{solicitudeschoferterminada && solicitudeschoferterminada.length}</p></b>
            <p className='lbl'>Solicitudes completadas</p>
          </div>
        </div>
      </div>
    )
  }
  else if(rol === 'Admin'){
    return(
      <div className='metrics'>
          <div className='admin_sol'>
          <b><p className='amnt'>{solicitudesadmintaprobadas && solicitudesadmintaprobadas.length}</p></b>
          <p className='lbl'>Ordenes Aprobadas</p>
          </div>
      </div>
  )
  }
  else if(rol === 'Des'){
    return(
      <div>
        <div className='percentage'>
          <h1>{Math.round(((solicitudcreadas && solicitudcreadas.length) / 30) * 100)}%</h1>
          <p>De la meta mensual alcanzado</p>
        </div>
        <div className='metrics'>
          <div className='created_sol'>
            <b><p className='amnt'>{solicitudcreadas && solicitudcreadas.length}</p></b>
            <p className='lbl'>Solicitudes creadas</p>
          </div>
          <div className='pending_sol'>
            <b><p className='amnt'>{solicitudpendiente && solicitudpendiente.length}</p></b>
            <p className='lbl'>Solicitudes en proceso</p>
          </div>
          <div className='compl_sol'>
            <b><p className='amnt'>{solicitudterminada && solicitudterminada.length}</p></b>
            <p className='lbl'>Solicitudes completadas</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Metrics