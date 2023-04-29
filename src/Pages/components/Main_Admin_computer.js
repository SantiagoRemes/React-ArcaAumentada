import {ReactComponentElement, useState, useEffect} from "react";
import Menu from './Menu'
import AdminMetrics from './admin_metrics'
import Recenthist from './recenthistory'

const Dashbrd_computer = (props) =>{
    const { id }  = props;

    const [Desarrollador, setDesarrollador] = useState();

    useEffect(() => {
        fetch(`http://localhost:2000/administrador/${id}`)
        .then( (res) => res.json())
        .then((data)=> setDesarrollador(data));
    }, []);
    return(
        <div id='outer-container'>
            <Menu id={id} pageWrapID={'page-wrap'} outerContainerID={'outer-container'} rol={'Administrador'} />
            <div id='page-wrap'>
                <div className='desktopbar'>
                    <div className='topText'>
                        <h1>Hola, {Desarrollador && Desarrollador[0].nombre}</h1>
                    </div>
                </div>
                <title>Admin_Dashboard</title>

                <div className='topContainer'>
                <br></br>
                    <center>
                        <h1 className='topText'>Hola, {Desarrollador && Desarrollador[0].nombre}</h1>
                    </center>
                </div> 
                <center>
                    <AdminMetrics id = {id} type='desktop'/>
                    <Recenthist id = {id} rol = 'Admin' type='desktop'/>
                </center>
            </div>
        </div>
    )
}

export default Dashbrd_computer