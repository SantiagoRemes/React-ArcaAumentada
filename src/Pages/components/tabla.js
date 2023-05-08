import React, {useEffect, useState} from 'react';
import '../../css/style.css';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Table = (props) =>{
    const {type, item, RefriSolicitud, idSol, disable, disable2} = props;
    const CallBack = props.handleCallBack

    const [hidden, setHidden] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    const [comentarios, setComentarios] = useState();

    const Movimiento = (event) => {
        if(event.target.value === 'Cambiar'){
            setHidden(false);
        }
        else{
            setHidden(true);
        }
    }

    const [currrefriid, setCurrrefriid] = useState();
    const [refrimodelo, setRefrimodelo] = useState();

    /////////////////////////////////////////////////////////
    useEffect(() => {
        setComentarios(item.comentarios)
        setCurrrefriid(item.idRefrigeradorSolicitado);
        if(idSol){
            const url = `http://192.168.1.131:2000/refrisolicitado/edfunico`;
            const data = {
                idModelo: `${item.idModelo[0]}`,
                idSolicitud: `${idSol}`
            };
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(url, options)
            .then( (res) => res.json())
            .then((data)=> setRefrimodelo(data));
        }
    }, [])
    /////////////////////////////////////////////////////////////

    const handleonChange= (e, idRefri) => {
        setComentarios(e.target.value)
        const url = `http://192.168.1.131:2000/refrisolicitado/comentarios/${idRefri}`;
        const data = {
            comentarios: `${e.target.value}`
        };
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(url, options)
        .then((res) => res.json())
        .then((respPost) => {
        })
        .catch((err) => {
            alert(err)
        });
    }

    ///////////////////////////////////////////
    useEffect(() =>{
        if(CallBack){
            CallBack(refresh)
        }
        setRefresh(false)
    }, [refresh])
    ////////////////////////////////////////////

    const MovimientoAct = (e, idRefri) => {
        const url = `http://192.168.1.131:2000/refrisolicitado/updatemovimiento/${idRefri}`;
        const data = {
            movimiento: `${e.target.value}`
        };
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(url, options)
        .then((res) => res.json())
        .then((respPost) => {
            setRefresh(true)
        })
        .catch((err) => {
            setRefresh(false)
        });
    }

    const ChangeRefri = (e) =>{
        setLoading(true)
        const url = `http://192.168.1.131:2000/refrisolicitado/changeedf`;
        const data = {
            idRefri1: `${currrefriid}`,
            idRefri2: `${e.target.value}`
        };
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(url, options)
        .then((res) => res.json())
        .then((respPost) => {
            setLoading(false)
        })
        .catch((err) => {
            alert(err)
            setLoading(false)
        });
        setCurrrefriid(e.target.value)
    }
    if(loading){
        return(
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>  
        )
    }
    else{
        if(type === 'curr'){
            return(
                <tr>
                    <td>{item.idModelo[0]}</td>
                    <td>{item.idRefrigeradorSolicitado}</td>
                    <td>{item.puertas}</td>
                    <td>
                        <select onChange={(e) => MovimientoAct(e, item.idRefrigeradorSolicitado)} disabled={disable}>
                            <option value='Mantener'>Mantener</option>
                                <option value='Cambiar'>Cambiar</option>
                            <option value='Remover'>Remover</option>
                        </select>
                    </td>
                    <td>
                        <input type='text' placeholder='Razón' value={comentarios ? comentarios : ''} onChange={(e) => handleonChange(e, item.idRefrigeradorSolicitado)} disabled={disable2}/>
                    </td>
                </tr>
            )
        }else if(type === 'solic'){
            return(                    
                <tr>
                    <td>{item.idModelo[0]}</td>
                    <td>
                        <select value={currrefriid} disabled={disable} onChange={ChangeRefri}>
                            {refrimodelo && refrimodelo.map((refri) => (
                                <option value={refri.idRefrigeradorSolicitado}>{refri.idRefrigeradorSolicitado}</option>
                            ))}
                        </select>
                    </td>
                    <td>{item.puertas}</td>
                    <td>
                        <select onChange={Movimiento} disabled={disable}>
                            <option value='Agregar'>Agregar</option>
                            <option value='Cambiar'>Cambiar</option>
                        </select>
                    </td>
                    <td>
                        <select hidden={hidden} disabled={disable}>
                            {RefriSolicitud && RefriSolicitud.map((refri) => (
                                <option value={refri.idRefrigeradorSolicitado}>{refri.idRefrigeradorSolicitado}</option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <input type='text' placeholder='Razón' value={comentarios} onChange={(e) => handleonChange(e, item.idRefrigeradorSolicitado)}/>
                    </td>
                    <td>
                    <Nav.Link as={Link} to={`/checklist/${item.idChecklist}`} state={{idSolicitud: idSol}}>
                        <div class='bot' id='Checklist'>Checklist</div>
                    </Nav.Link>

                    </td>
                    <td>
                    <Nav.Link href={item.imageurl}><div class='bot'>Foto</div></Nav.Link>

                    </td>
                </tr>
            )
        }
    }
    
}

export default Table