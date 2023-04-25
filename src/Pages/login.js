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
      navigate('/main', { state: { id: logincheck[0].id, rol: rol } });
    } else if(logincheck){
      setErrorMsg('Usuario o Contraseña son incorrectos');
    }
    
  }, [logincheck])

  const ButtonPress = () => {
    setLoading(true);
    const url = `http://localhost:2000/desarrollador/login`;
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
            <input type="text" placeholder="Usuario" controlId="usuario" value={Usuario} onChange={(e) => setUsuario(e.target.value)}/><br></br><br></br>
            <input type="password" placeholder="Contraseña" controlId="contrasena" value={Contrasena} onChange={(e) => setContrasena(e.target.value)}/><br></br><br></br>
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            <button class="bot" type="submit" onClick={(e) => {e.preventDefault(); ButtonPress();}}>Ingresar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login