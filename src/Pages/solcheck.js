import React from 'react'
import style from '../css/style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackArrow from '../images/backarrow.png';
import { useParams  } from 'react-router-dom';

function solcheck() {
    let { id } = new useParams()
  return (
    <div>
        <div class='redbg'>
            <Nav.Link href={`/${id}/historial`}><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
            <h1 class='header'>Editar Solicitud</h1>
        </div>
        <br></br>
        <form>
            <label class='slabel'>Número de serie</label>
            <input type='text' placeholder='[Num Cliente]'></input>
            <br></br><br></br>
            <label class='slabel'>Unidad</label>
            <input type='text' placeholder='[Modelo]'></input>
            <br></br><br></br>
            <label class='slabel'>Dirección del cliente</label>
            <input type='text' placeholder='[Dirección y número]'></input>
            <br></br><br></br>
            <label class='slabel'>Comentarios</label>
            <input type='text' placeholder='[Comentarios]'></input>
            <br></br><br></br>
            <p class='slabel2'>Vista Previa de la orden</p>
            <div className='sep2'>
                <div className='twop'>
                    <p>[REFERENCIA]</p>
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
        </form>
    </div>
  )
}

export default solcheck