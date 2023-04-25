import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from "react";
import { useParams  } from 'react-router-dom';

function Sol_card(props) {
    const item = props.item;
    const id = props.id;
    return(
        <Nav.Link href={`/${id}/solcheckadmin/${item.idSolicitud}`}>
        <div className='sep'>
            <div className='twop'>
                <p>{item.idSolicitud}</p>
                <p class='red'>{item.estatus}</p>
            </div>
            <div className='twop'>
                <p>{item.nombre}</p>
                <p>{item.idDesarrollador}</p>
            </div>
            <div className='twop'>
                <p>{item.estado + ', ' + item.ciudad + ', ' + item.colonia + ', ' + item.calle_no}</p>
            </div>
            <div className='twop'>
                <p>{item.celular}</p>
                <p>{item.idTienda[0]}</p>
            </div>
        </div>
    </Nav.Link>
    )
}

export default Sol_card