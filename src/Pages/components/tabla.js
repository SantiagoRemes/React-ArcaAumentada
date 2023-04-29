import React, {useEffect, useState} from 'react';
import '../../css/style.css';
import Nav from 'react-bootstrap/Nav';

const Table = (props) =>{
    const {type, item, RefriSolicitud} = props;

    const [hidden, setHidden] = useState(true);
    const [updatecheck, setUpdateCheck] = useState(false);

    const Movimiento = (event) => {
        if(event.target.value === 'Cambiar'){
            setHidden(false);
        }
        else{
            setHidden(true);
        }
    }

    useEffect(() => {
        
    }, [])

    useEffect(() => {

        setUpdateCheck(false)
    }, [updatecheck])

    const MovimientoAct = (e, idRefri) => {
        const url = `http://localhost:2000/refrisolicitado/updatemovimiento/${idRefri}`;
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
            setUpdateCheck(true)
            console.log(respPost);
        })
        .catch((err) => {
            setUpdateCheck(false)
        });
    }

    if(type === 'curr'){
        return(
            <tr>
                <td>1</td>
                <td>{item.idModelo[0]}</td>
                <td>{item.idRefrigeradorSolicitado}</td>
                <td>{item.puertas}</td>
                <td>
                    <select onChange={(e) => MovimientoAct(e, item.idRefrigeradorSolicitado)}>
                        <option value='Mantener'>Mantener</option>
                            <option value='Cambiar'>Cambiar</option>
                        <option value='Remover'>Remover</option>
                    </select>
                </td>
                <td>
                    <input type='text' placeholder='Razón' value={item.comentarios} />
                </td>
            </tr>
        )
    }else if(type === 'solic'){
        return(                    
            <tr>
                <td>1</td>
                <td>{item.idModelo[0]}</td>
                <td>{item.idRefrigeradorSolicitado}</td> 
                <td>{item.puertas}</td>
                <td>
                    <select onChange={Movimiento}>
                        <option value='Agregar'>Agregar</option>
                        <option value='Cambiar'>Cambiar</option>
                    </select>
                </td>
                <td>
                    <select hidden={hidden}>
                        {RefriSolicitud && RefriSolicitud.map((refri) => (
                            <option value={refri.idRefrigeradorSolicitado}>{refri.idRefrigeradorSolicitado}</option>
                        ))}
                    </select>
                </td>
                <td>
                    <input type='text' placeholder='Razón' value={item.comentarios} />
                </td>
                <td>
                    <Nav.Link href={`/checklist/${item.idChecklist}`}><div class='bot' id='Checklist'>Checklist</div></Nav.Link>
                </td>
                <td>
                <Nav.Link href={item.imageurl}><div class='bot'>Foto</div></Nav.Link>

                </td>
            </tr>
        )
    }
    
}

export default Table