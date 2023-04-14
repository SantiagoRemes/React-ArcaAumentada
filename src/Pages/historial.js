import React from 'react'
import style from '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackArrow from '../images/backarrow.png';
import Search from '../images/search.png';

function historial() {
  return (
    <div>
        <div class='redbg'>
            <Nav.Link href="/main"><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
            <h1 class='header'>Historial</h1>
            <img class='imageflex2' src={Search} alt='backarrow' width='40px' height='40px'/>
        </div>
        <br></br>
        <Nav.Link href="/solcheck">
            <div className='sep'>
                <div className='twop'>
                    <p>[REFERENCIA]</p>
                    <p class='red'>[STATUS]</p>
                </div>
                <div className='twop'>
                    <p>[NOMBRE]</p>
                    <p>[MODELO]</p>
                </div>
                <div className='twop'>
                    <p>[DIRECCIÓN]</p>
                </div>
                <div className='twop'>
                    <p>[CONTACTO]</p>
                    <p>[NO. DE CLIENTE]</p>
                </div>
            </div>
        </Nav.Link>
        <Nav.Link href="/solcheck">
            <div className='sep'>
                <div className='twop'>
                    <p>[REFERENCIA]</p>
                    <p class='red'>[STATUS]</p>
                </div>
                <div className='twop'>
                    <p>[NOMBRE]</p>
                    <p>[MODELO]</p>
                </div>
                <div className='twop'>
                    <p>[DIRECCIÓN]</p>
                </div>
                <div className='twop'>
                    <p>[CONTACTO]</p>
                    <p>[NO. DE CLIENTE]</p>
                </div>
            </div>
        </Nav.Link>
        <Nav.Link href="/solcheck">
            <div className='sep'>
                <div className='twop'>
                    <p>[REFERENCIA]</p>
                    <p class='red'>[STATUS]</p>
                </div>
                <div className='twop'>
                    <p>[NOMBRE]</p>
                    <p>[MODELO]</p>
                </div>
                <div className='twop'>
                    <p>[DIRECCIÓN]</p>
                </div>
                <div className='twop'>
                    <p>[CONTACTO]</p>
                    <p>[NO. DE CLIENTE]</p>
                </div>
            </div>
        </Nav.Link>
        <Nav.Link href="/solcheck">
            <div className='sep'>
                <div className='twop'>
                    <p>[REFERENCIA]</p>
                    <p class='red'>[STATUS]</p>
                </div>
                <div className='twop'>
                    <p>[NOMBRE]</p>
                    <p>[MODELO]</p>
                </div>
                <div className='twop'>
                    <p>[DIRECCIÓN]</p>
                </div>
                <div className='twop'>
                    <p>[CONTACTO]</p>
                    <p>[NO. DE CLIENTE]</p>
                </div>
            </div>
        </Nav.Link>
        <Nav.Link href="/solcheck">
            <div className='sep'>
                <div className='twop'>
                    <p>[REFERENCIA]</p>
                    <p class='red'>[STATUS]</p>
                </div>
                <div className='twop'>
                    <p>[NOMBRE]</p>
                    <p>[MODELO]</p>
                </div>
                <div className='twop'>
                    <p>[DIRECCIÓN]</p>
                </div>
                <div className='twop'>
                    <p>[CONTACTO]</p>
                    <p>[NO. DE CLIENTE]</p>
                </div>
            </div>
        </Nav.Link>
        <Nav.Link href="/solcheck">
            <div className='sep'>
                <div className='twop'>
                    <p>[REFERENCIA]</p>
                    <p class='red'>[STATUS]</p>
                </div>
                <div className='twop'>
                    <p>[NOMBRE]</p>
                    <p>[MODELO]</p>
                </div>
                <div className='twop'>
                    <p>[DIRECCIÓN]</p>
                </div>
                <div className='twop'>
                    <p>[CONTACTO]</p>
                    <p>[NO. DE CLIENTE]</p>
                </div>
            </div>
        </Nav.Link>
        <Nav.Link href="/solcheck">
            <div className='sep'>
                <div className='twop'>
                    <p>[REFERENCIA]</p>
                    <p class='red'>[STATUS]</p>
                </div>
                <div className='twop'>
                    <p>[NOMBRE]</p>
                    <p>[MODELO]</p>
                </div>
                <div className='twop'>
                    <p>[DIRECCIÓN]</p>
                </div>
                <div className='twop'>
                    <p>[CONTACTO]</p>
                    <p>[NO. DE CLIENTE]</p>
                </div>
            </div>
        </Nav.Link>

    </div>
  )
}

export default historial