import {useState, useEffect} from "react";
import Menu from './Menu'
import Recenthist from './recenthistory'
import Metrics from './metrics'
import Top3Des from "./Top_Des";

const Dashbrd_computer = (props) =>{
    const { id }  = props;

    const [Administrador, setAdministrador] = useState();
    const [top3desarrolladores, setTop3desarrolladores] = useState();

    useEffect(() => {
        fetch(`http://192.168.1.131:2000/administrador/${id}`)
        .then( (res) => res.json())
        .then((data)=> setAdministrador(data));
    }, []);
    return(
        <div id='outer-container'>
            <Menu id={id} pageWrapID={'page-wrap'} outerContainerID={'outer-container'} rol={'Administrador'} />
            <div id='page-wrap'>
                <div className='desktopbar'>
                    <div className='topText'>
                        <h1>Hola, {Administrador && Administrador[0].nombre}</h1>
                    </div>
                </div>
                <title>Admin_Dashboard</title>

                <div className='topContainer'>
                <br></br>
                    <center>
                        <h1 className='topText'>Hola, {Administrador && Administrador[0].nombre}</h1>
                    </center>
                </div> 
                <center>
                    <Metrics id = {id} type='Desktop' rol='Admin'/>
                    <Recenthist id = {id} rol = 'Admin' type='Desktop'/>
                    <Top3Des type='Desktop'/>
                </center>
            </div>
        </div>
    )
}

export default Dashbrd_computer