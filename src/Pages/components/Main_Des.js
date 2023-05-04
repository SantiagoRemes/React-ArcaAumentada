import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Metrics from './metrics';
import Recenthist from './recenthistory';
import Menu from './Menu.js'

function Main_Des(props) {
    const { id }  = props;

    const [Desarrollador, setDesarrollador] = useState();

    useEffect(() => {
      fetch(`http://192.168.1.131:2000/desarrollador/${id}`)
      .then( (res) => res.json())
      .then((data)=> setDesarrollador(data));
    }, []);
  
    return (
        <div id='outer-container'>
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} id={id} rol={'Desarrollador'}/>
            <div id="page-wrap">
                <div className="container">

                    <div className='topContainer'>
                    <br></br>
                        <center>
                            <h1 className='topText'>Hola, {Desarrollador && Desarrollador[0].nombre}</h1>
                        </center>
                    </div> 
                    <center>
                        <Metrics id = {id}/>
                        <Recenthist id = {id} rol = 'Des'/>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <Nav.Link href={`/unity`}><button className='botmain'>Nueva Orden</button></Nav.Link>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Main_Des