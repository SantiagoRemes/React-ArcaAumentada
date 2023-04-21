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
  const [Desarrollador, setDesarrollador] = useState();

  useEffect(() => {
    fetch(`http://localhost:2000/desarrollador/${id}`)
    .then( (res) => res.json())
    .then((data)=> setDesarrollador(data));
}, []);

console.log(Desarrollador && Desarrollador[0].nombre)

  return (
    <div className="container">

        <div className='topContainer'>
          <center>
            <h1 className='topText'>Hola, {Desarrollador && Desarrollador[0].nombre}</h1>
          </center>
          <Bars className="menu_btn"/>
        </div> 
        <div className='percentage'>
          <center>
            <h1>0%</h1>
            <p>De la meta mensual alcanzado</p>
          </center>
        </div>
        <center>
          <Metrics />
          <Recenthist data = {id}/>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <Nav.Link href={`/${id}/visita`}><button className='botmain'>Registrar Visita</button></Nav.Link><br></br><br></br>
          <Nav.Link href={`/${id}/unity`}><button className='botmain'>Nueva Orden</button></Nav.Link>
        </center>
    </div>
  )
}

export default Main