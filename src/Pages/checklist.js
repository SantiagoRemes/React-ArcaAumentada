import React, { useDebugValue } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import BackArrow from '../images/backarrow.png';
import '../css/style.css'

function Checklist(props) {

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

  const [disable, setDisable] = useState(false)
  useEffect(() => {
    if(rol === 'Admin' || rol === 'Chofer'){
      setDisable(true)
    }
  }, [])

  

  const { idChecklist } = useParams();
  const location = useLocation()
  console.log(location)
  const {idSolicitud} = location.state;
  
  const [checklist, setChecklist] = useState();

  const [puerta, setPuerta] = useState(false);
  const [puertanobool, setPuertanobool] = useState(false);
  const [posicion, setPosicion] = useState();
  const [movimientos, setMovimientos] = useState();
  const [personas, setPersonas] = useState();
  const [horario, setHorario] = useState();

  useEffect(() =>{
    setPuerta(checklist && checklist[0].puerta === 0 ? false : true)
    setPosicion(checklist && checklist[0].posicion)
    setMovimientos(checklist && checklist[0].movimientos)
    setPersonas(checklist && checklist[0].personas)
    setHorario(checklist && checklist[0].horario.substring(0, 10) + ' ' + checklist[0].horario.substring(11, 16))
  }, [checklist])

  useEffect(() =>{
    fetch(`http://192.168.1.131:2000/checklist/${idChecklist}`)
    .then( (res) => res.json())
    .then((data)=> setChecklist(data));
  }, [])

  const handleonChangePuerta = () =>{
    if(puerta === false){
      setPuerta(true)
    }
    else{
      setPuerta(false)
    }
    
  }

  const handleonChangePosicion = (e) =>{
    setPosicion(e.target.value)
  }

  const handleonChangeMovimientos = (e) =>{
    setMovimientos(e.target.value)
  }

  const handleonChangePersonas = (e) =>{
    setPersonas(e.target.value)
  }

  const handleonChangeHorario = (e) =>{
    setHorario(e.target.value)
  }

  const handleonClick = () =>{
    if(puerta === true){
      setPuertanobool(1)
    }
    else{
      setPuertanobool(0)
    }
    const url = `http://192.168.1.131:2000/checklist/update/${idChecklist}`;
    const data = {
      puerta: puertanobool,
      posicion: posicion,
      movimientos: movimientos,
      personas: personas,
      horario: horario
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
          console.log(respPost);
          alert(`Alta de Tema exitosa`);
        })
        .catch((err) => {
          alert(err)
        });
  }

  return (
    <div>
       <div class='redbg'>
        <Nav.Link href={`/solcheck/${idSolicitud}`}><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
        <h1 class='header'>Datos de la Checklist</h1>
      </div>
      <div>
        <label>Pasa por la puerta <input type='checkbox' onChange={handleonChangePuerta} checked={puerta} disabled={disable}/></label>
        
        <br /><br />
        <label for='puerta'>Posición: </label><br/>
        <select value={posicion} onChange={handleonChangePosicion} disabled={disable}>
          <option value='Primera'>Primera</option>
          <option value='Favorable'>Favorable</option>
        </select>
        <br /><br />
        <label>Movimientos: </label><br/>
        <input type='text' value={movimientos} placeholder='[Movimientos necesarios]' onChange={handleonChangeMovimientos} disabled={disable}/>
        <br /><br />
        <label>Personas: </label><br/>
        <input type='number' value={personas} placeholder='[2]' onChange={handleonChangePersonas} disabled={disable}/>
        <br /><br />
        <label>Horario: </label><br/>
        <input type='datetime' value={horario} placeholder='[XXXX-XX-XX XX:XX]' onChange={handleonChangeHorario} disabled={disable}/>
        <br /><br />
        <button class='bot' onClick={handleonClick} hidden={disable}>Actualizar Checklist</button>
      </div>
    </div>
  );
}

export default Checklist