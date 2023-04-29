import React, {useEffect, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import AdminMetrics from './admin_metrics';
import Recenthist from './recenthistory';
import TopContainer from './topcontainer';
import Menu from './Menu.js'
import Nav from 'react-bootstrap/Nav';
import Metrics from './metrics'

function Dashbrd_mobile(props) {
  const { id }  = props;

  const [Desarrollador, setDesarrollador] = useState();

  useEffect(() => {
    fetch(`http://localhost:2000/administrador/${id}`)
    .then( (res) => res.json())
    .then((data)=> setDesarrollador(data));
  }, []);
  console.log(Desarrollador && Desarrollador[0])
  console.log(id)
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
            <center>
                <AdminMetrics id = {id} type='Mobile'/>
                <Recenthist id = {id} rol = 'Admin'/>
            </center>
        </div>
    </div>
</div>
  )
}

export default Dashbrd_mobile