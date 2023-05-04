import React from "react";
import "../../css/Menu.css";
import "../../css/style.css"
import {push as Menu1} from 'react-burger-menu'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Menu = (props) =>{

    const {id, rol} = props;

    const navigate = useNavigate()

    const [usuario, setUsuario] = useState();

    useEffect(() => {
        if(rol === 'Desarrollador'){
            fetch(`http://192.168.1.131:2000/desarrollador/${id}`)
            .then( (res) => res.json())
            .then((data)=> setUsuario(data));
        }
        else if(rol === 'Administrador'){
            fetch(`http://192.168.1.131:2000/administrador/${id}`)
            .then( (res) => res.json())
            .then((data)=> setUsuario(data));
        }
        else if(rol === 'Chofer'){
            fetch(`http://192.168.1.131:2000/chofer/${id}`)
            .then( (res) => res.json())
            .then((data)=> setUsuario(data));
        }
            
    }, []);

    const LogOut = () => {
        localStorage.setItem('dataKey', JSON.stringify({ id: '', rol: '' }));
        navigate('/')
    };

    return (
        <div className='menu'>
            <Menu1 right mountOnEnter unmountOnExit>
                <h5 style={{ fontWeight: 'bold' }}>Detalles de la Cuenta</h5>
                <p className="menu-item">
                    Nombre: {usuario && usuario[0].nombre}
                </p>
                <p className="menu-item">
                    Id: {id}
                </p>
                <p className="menu-item">
                    Rol: {rol}
                </p>
                <p className="menu-item">
                    Contacto: {usuario && usuario[0].contacto}
                </p>
                <p className="menu-item">
                    Usuario: {usuario && usuario[0].usuario}
                </p>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h5 style={{ fontSize: '30px'}} onClick={(e) => {e.preventDefault(); LogOut();}}>
                    Log Out
                </h5>
            </Menu1>
        </div>
    )
}

export default Menu