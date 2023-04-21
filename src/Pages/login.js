import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate = useNavigate();
  const [Usuario, setUsuario] = useState("");
  const [Contrasena, setContrasena] = useState("");
  const [exito, setExito] = useState(false);
  const [error, setError] = useState("");
  const [Desarrollador, setDesarrollador] = useState("");
  const [Chofer, setChofer] = useState("");
  const [Administrador, setAdministrador] = useState("");

  const LogIn = () => {
    const urlDes = `http://localhost:2000/desarrollador/login`;
    const urlAdm = `http://localhost:2000/administrador/login`;
    const urlChf = `http://localhost:2000/chofer/login`;
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
    fetch(urlDes, options)
    .then((res) => res.json())
    .then((data) => setDesarrollador(data))
      .catch((err) => {

        setError(err);
        setExito(false);
    });
    fetch(urlAdm, options)
    .then((res) => res.json())
    .then((data) => setAdministrador(data))
      .catch((err) => {

        setError(err);
        setExito(false);
    });
    fetch(urlChf, options)
    .then((res) => res.json())
    .then((data) => setChofer(data))
      .catch((err) => {

        setError(err);
        setExito(false);
    });
      console.log(Desarrollador)
      if(Desarrollador.length != 0){
        alert('Desarrollador')
        navigate(`${Desarrollador[0].idDesarrollador}/main`);
      }
      else if(Administrador.length != 0){
        alert('Administrador')
      }
      else if(Chofer.length != 0){
        alert('Chofer')
      }
    
  };

  
  return (
    <div className='contlogin'>
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Arca_Continental_logo.svg/1200px-Arca_Continental_logo.svg.png" alt="Arca Continental" />
        <br></br><br></br>
        <h1 class='head1'>Inicio de Sesión</h1>
        <br></br>
        <form>
          <input type="text" placeholder="Usuario" controlId="usuario" onChange={(e) => setUsuario(e.target.value)}/><br></br><br></br>
          <input type="password" placeholder="Contraseña" controlId="contrasena" onChange={(e) => setContrasena(e.target.value)}/><br></br><br></br>
          <button class="bot" type="submit" onClick={(e) => {e.preventDefault(); LogIn();}}>Ingresar</button>
        </form>
    </div>
  )
}

export default Login