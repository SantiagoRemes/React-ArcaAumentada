import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';



function Login() {
  const navigate = useNavigate();
  const [Usuario, setUsuario] = useState("");
  const [Contrasena, setContrasena] = useState("");
  const [logincheck, setLogincheck] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  var id = '';
  var rol = '';
  try{
    var { id, rol }  = JSON.parse(localStorage.getItem('dataKey'));
  }
  catch{
    var id = '';
    var rol = '';
  }
  useEffect(() => {
    if(id !== ''){
      navigate('/main')
    }
  }, [])

  useEffect(() => {
    let rol = '';
    if (logincheck && logincheck[0]) {
      if (logincheck[0].Desarrollador === 1) {
        rol = 'Des';
      } else if (logincheck[0].Administrador === 1) {
        rol = 'Admin';
      } else if (logincheck[0].Chofer === 1) {
        rol = 'Chofer';
      }
    }

    if (rol !== '') {
      localStorage.setItem('dataKey', JSON.stringify({ id: logincheck[0].id, rol: rol }));
      navigate('/main');
    } else if(logincheck){
      setErrorMsg('Usuario o Contraseña son incorrectos');
    }
    
  }, [logincheck])

  const ButtonPress = () => {
    setLoading(true);
    const url = `http://192.168.1.131:2000/desarrollador/login`;
    const data = {
      usuario: `${Usuario}`,
      contrasena: `${Contrasena}`,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
    .then((res) => res.json())
    .then((data) => {setLoading(false); setLogincheck(data)})
      .catch((err) => {
        setLoading(false);
      }
    );
  };

  
  return (
    <div className='contlogin'>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>  
      ) : (
        <div>
          <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Arca_Continental_logo.svg/1200px-Arca_Continental_logo.svg.png" alt="Arca Continental" />
          <br></br><br></br>
          <h1 class='head1'>Inicio de Sesión</h1>
          <br></br>
          <div>
            <label>Usuario</label><br/>
            <input type="text" placeholder="Usuario" controlId="usuario" value={Usuario} onChange={(e) => setUsuario(e.target.value)}/><br></br><br></br>
            <label>Contraseña</label><br/>
            <input type="password" placeholder="Contraseña" controlId="contrasena" value={Contrasena} onChange={(e) => setContrasena(e.target.value)}/><br></br><br></br>
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            <button class="widebot" type="submit" onClick={(e) => {e.preventDefault(); ButtonPress();}}>Ingresar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login