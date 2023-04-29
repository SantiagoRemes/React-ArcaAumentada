import React from "react";
import { useState, useEffect } from "react";

const Metrics = (props) =>{

  const { id,rol } = props

  const [solicitudpendiente, setSolicitudpendiente] = useState("");
  const [solicitudterminada, setSolicitudterminada] = useState("");
  const [solicitudcreadas, setSolicitudcreadas] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  useEffect(() => {
    setLoading(true);
    const url = `http://localhost:2000/solicitud/byestado`;
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
    .then((data) => {setLoading(false); setSolicitudpendiente(data)})
      .catch((err) => {
        setLoading(false);
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
    .then((data) => {setLoading(false); setSolicitudterminada(data)})
      .catch((err) => {
        setLoading(false);
      }
    );

    fetch(`http://localhost:2000/solicitud/idesdate/${id}`)
      .then( (res) => res.json())
      .then((data)=> setSolicitudcreadas(data));


  }, [])
  
  if(rol == 'Chofer'){
    return(
      <div>
        <div className='percentage'>
          <h1>{Math.round(((solicitudcreadas && solicitudcreadas.length) / 30) * 100)}%</h1>
          <p>De la meta mensual alcanzado</p>
        </div>
        <div className='metrics'>
          <div className='pending_sol'>
            <b><p className='amnt'>{solicitudpendiente && solicitudpendiente.length}</p></b>
            <p className='lbl'>Solicitudes pendientes</p>
          </div>
          <div className='compl_sol'>
            <b><p className='amnt'>{solicitudterminada && solicitudterminada.length}</p></b>
            <p className='lbl'>Solicitudes completadas</p>
          </div>
        </div>
      </div>
    )
  }else{
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