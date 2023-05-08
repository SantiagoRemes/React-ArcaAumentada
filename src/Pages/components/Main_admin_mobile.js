import React, {useEffect, useState} from 'react'
import Recenthist from './recenthistory';
import Menu from './Menu.js'
import Metrics from './metrics'
import Top3Des from './Top_Des';

function Dashbrd_mobile(props) {
  const { id }  = props;

  const [Desarrollador, setDesarrollador] = useState();

  useEffect(() => {
    fetch(`http://192.168.1.131:2000/administrador/${id}`)
    .then( (res) => res.json())
    .then((data)=> setDesarrollador(data));
  }, []);
  return (
    <div id='outer-container'>
    <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} id={id} rol={'Administrador'}/>
    <div id="page-wrap">
        <div className="container">
          <title>Admin_Dashboard</title>
            <div className='topContainer'>
            <br></br>
                <center>
                    <h1 className='topText'>Hola, {Desarrollador && Desarrollador[0].nombre}</h1>
                </center>
            </div>
            <Top3Des type='Mobile' />
            <center>
                <Metrics id = {id} type='Mobile' rol='Admin'/>
                <Recenthist id = {id} type='Mobile' rol='Admin'/>
                
            </center>
        </div>
    </div>
</div>
  )
}

export default Dashbrd_mobile