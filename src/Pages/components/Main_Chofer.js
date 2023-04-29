import { useState, useEffect } from "react";
import {ReactComponent as Bars} from '../../images/bars.svg'
import Nav from 'react-bootstrap/Nav';
import Metrics from './metrics';
import Recenthist from './recenthistory';
import Menu from './Menu'

function Main_Des(props) {
    const { id }  = props;

    const [Desarrollador, setDesarrollador] = useState();

    useEffect(() => {
      fetch(`http://localhost:2000/chofer/${id}`)
      .then( (res) => res.json())
      .then((data)=> setDesarrollador(data));
    }, []);
  
    return (
        <div id='outer-container'>
            <Menu outerContainerId={'outer-container'} pageWrapId={'page-wrap'} id={id} rol={'Chofer'} />
            <div className="container" id='page-wrap'>
                <div className='topContainer'>
                    <center>
                    <h1 className='topText'>Hola, {Desarrollador && Desarrollador[0].nombre}</h1>
                    </center>
                </div> 
                <center>
                    <Metrics id={id} rol={'Chofer'}/>
                    <Recenthist  id= {id} rol= 'Chofer'/>
                </center>
            </div>
        </div>
    )
}

export default Main_Des