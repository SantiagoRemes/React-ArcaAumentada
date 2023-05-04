import React, {useEffect, useState} from 'react';
import '../../css/style.css';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Table = (props) =>{
    const {type, item, RefriSolicitud, idSol, disable} = props;
    const CallBack = props.handleCallBack

    const [hidden, setHidden] = useState(true);
    const [refresh, setRefresh] = useState(false);

    const [comentarios, setComentarios] = useState();

    const Movimiento = (event) => {
        if(event.target.value === 'Cambiar'){
            setHidden(false);
        }
        else{
            setHidden(true);
        }
    }


    useEffect(() => {
        setComentarios(item.comentarios)
    }, [])

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
        });
    }

    useEffect(() =>{
        CallBack(refresh)
        setRefresh(false)
    }, [refresh])

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
                    <input type='text' placeholder='Razón' value={comentarios} onChange={(e) => handleonChange(e, item.idRefrigeradorSolicitado)}/>
                </td>
            </tr>
        )
    }else if(type === 'solic'){
        return(                    
            <tr>
                <td>{item.idModelo[0]}</td>
                <td>{item.idRefrigeradorSolicitado}</td> 
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

export default Table