import { useState, useEffect } from "react";
import {ReactComponent as Bars} from '../bars.svg'
import Nav from 'react-bootstrap/Nav';
import Metrics from './metrics';
import Recenthist from './recenthistory';

function Main_Des(props) {
    const { id }  = props;

    const [Desarrollador, setDesarrollador] = useState();

    useEffect(() => {
      fetch(`http://localhost:2000/desarrollador/${id}`)
      .then( (res) => res.json())
      .then((data)=> setDesarrollador(data));
    }, []);
  
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
                <Recenthist data = {id} level = 'desarrollador'/>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Nav.Link href={`/visita`}><button className='botmain'>Registrar Visita</button></Nav.Link><br></br><br></br>
                <Nav.Link href={`/unity`}><button className='botmain'>Nueva Orden</button></Nav.Link>
            </center>
        </div>
    )
}

export default Main_Des