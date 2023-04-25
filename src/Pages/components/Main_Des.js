import { useState, useEffect } from "react";
import {ReactComponent as Bars} from '../../images/bars.svg'
import Nav from 'react-bootstrap/Nav';
import Metrics from './metrics';
import Recenthist from './recenthistory';
import Menu from './Menu.js'

function Main_Des(props) {
    const { id }  = props;

    const [Desarrollador, setDesarrollador] = useState();

    useEffect(() => {
      fetch(`http://localhost:2000/desarrollador/${id}`)
      .then( (res) => res.json())
      .then((data)=> setDesarrollador(data));
    }, []);
  
    return (
        <div id='outer-container'>
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            <div id="page-wrap">
                <div className="container">

                    <div className='topContainer'>
                        <center>
                            <h1 className='topText'>Hola, {Desarrollador && Desarrollador[0].nombre}</h1>
                        </center>
                    </div> 
                    <center>
                        <Metrics id = {id}/>
                        <Recenthist id = {id} rol = 'Des'/>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <Nav.Link href={`/visita`}><button className='botmain'>Registrar Visita</button></Nav.Link><br></br><br></br>
                        <Nav.Link href={`/unity`}><button className='botmain'>Nueva Orden</button></Nav.Link>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Main_Des