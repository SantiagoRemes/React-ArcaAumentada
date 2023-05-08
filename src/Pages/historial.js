import React from 'react'
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import BackArrow from '../images/backarrow.png';
import Search from '../images/search.png';
import { useState, useEffect } from "react";
import Sol_card from './components/sol_card';
import { useNavigate } from 'react-router-dom';

function Historial() {

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

    const [Solicitudes, setSolicitudes] = useState(null);

    useEffect(() => {
        if(rol === 'Des'){
            fetch(`http://192.168.1.131:2000/solicitud/tiendades/${id}`)
            .then( (res) => res.json())
            .then((data)=> setSolicitudes(data));
        }
        else if(rol === 'Admin'){
            fetch(`http://192.168.1.131:2000/solicitud/tiendaadmin`)
            .then( (res) => res.json())
            .then((data)=> setSolicitudes(data));
        }
        else if(rol === 'Chofer'){
            fetch(`http://192.168.1.131:2000/solicitud/chofer/${id}`)
            .then( (res) => res.json())
            .then((data)=> setSolicitudes(data));
        }
        }, []);

  return (
    <div>
        <div class='redbg'>
            <Nav.Link href={`/main`}><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
            <h1 class='header'>Historial</h1>
            {/* <img style={{marginTop: '5px'}} class='imageflex2' src={Search} alt='backarrow' width='35px' height='35px'/> */}
        </div>
        <br></br>
        {Solicitudes && Solicitudes.map((item) => 
            <Sol_card item={item} id={id}/>
        )}

    </div>
  )
}

export default Historial