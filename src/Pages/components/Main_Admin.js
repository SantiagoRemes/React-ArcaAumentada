import { useState, useEffect } from "react";
import {ReactComponent as Bars} from '../../images/bars.svg'
import Nav from 'react-bootstrap/Nav';
import Metrics from './metrics';
import Recenthist from './recenthistory';
import Admin_dashboard from './Admin_dashboard'

function Main_Admin(props) {
    let { id } = props
    const [administrador, setadministrador] = useState();
  
    useEffect(() => {
      fetch(`http://localhost:2000/administrador/${id}`)
      .then( (res) => res.json())
      .then((data)=> setadministrador(data));
  }, []);
  
  console.log(administrador && administrador[0].nombre)
  
    return (
      <div className="container">
  
          {/* <div className='topContainer'>
            <center>
              <h1 className='topText'>Hola, {administrador && administrador[0].nombre}</h1>
            </center>
            <Bars className="menu_btn"/>
          </div> 
          <div className='percentage'>
          </div>
          <center>
            <Recenthist data = {id} level='admin'/>
          </center> */}
      </div>
    )
  }

export default Main_Admin