import { useState, useEffect } from "react";
import {ReactComponent as Bars} from '../../images/bars.svg'
import Nav from 'react-bootstrap/Nav';
import Metrics from './metrics';
import Recenthist from './recenthistory';
import Admin_dashboard from './Admin_dashboard'
import Dashboard from './Admin_dashboard.js'

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
      <Dashboard id={id} />
    )
  }

export default Main_Admin