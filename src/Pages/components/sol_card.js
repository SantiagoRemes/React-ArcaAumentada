import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from "react";
import { useParams  } from 'react-router-dom';

function Sol_card(props) {
    const item = props.item;
    return(
        <Nav.Link href={`/solcheck/${item.idSolicitud}`}>
        <div className='sep'>
            <div className='twop'>
                <p>{item.idSolicitud}</p>
                <p class='red'>{item.estatus}</p>
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
    )
}

export default Sol_card