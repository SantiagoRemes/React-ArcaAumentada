import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function Sol_card(props) {
    const item = props.item;
    const id = props.id;
    return(
        <Nav.Link href={`/solcheck/${item.idSolicitud}`}>
        <div className='sep'>
            <div className='twop'>
                <p>IdSolicitud: {item.idSolicitud}</p>
                <p class='red'>{item.estatus}</p>
            </div>
            <div className='twop'>
                <p>{item.nombre}</p>
                <p>Desarrollador: {item.idDesarrollador}</p>
            </div>
            <div className='twop'>
                <p>{item.estado + ', ' + item.ciudad + ', ' + item.colonia + ', ' + item.calle_no}</p>
            </div>
            <div className='twop'>
                <p>Celular: {item.celular}</p>
                <p>{item.fecha_solicitud.substring(0, 10)}</p>
            </div>
        </div>
    </Nav.Link>
    )
}

export default Sol_card