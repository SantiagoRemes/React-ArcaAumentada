import { useState, useEffect } from "react";
import {ReactComponent as Bars} from './bars.svg'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Metrics from './components/metrics';
import Recenthist from './components/recenthistory';
import { useParams  } from 'react-router-dom';

function Main() {
  let { id } = new useParams()
  const [administrador, setadministrador] = useState();

  useEffect(() => {
    fetch(`http://localhost:2000/administrador/${id}`)
    .then( (res) => res.json())
    .then((data)=> setadministrador(data));
}, []);

console.log(administrador && administrador[0].nombre)

  return (
    <div className="container">

        <div className='topContainer'>
          <center>
            <h1 className='topText'>Hola, {administrador && administrador[0].nombre}</h1>
          </center>
          <Bars className="menu_btn"/>
        </div> 
        <div className='percentage'>
        </div>
        <center>
          <Recenthist data = {id} level='admin'/>
        </center>
    </div>
  )
}

export default Main