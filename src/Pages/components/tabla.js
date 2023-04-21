import React, {useEffect, useState} from 'react';
import style from '../../css/style.css';
import Checklist from './checklist';

const Table = (props) =>{
    const type = props.type;
    const [list, setList] = useState([])

    useEffect(() =>{
        fetch('')
        .then(response => response.json())
        .then(data => setList(data))
    }, []);

    if(type == 'curr'){
        return(
            <div>
                <table class='table'>
                    <thead class='tableheader'> 
                        <tr>
                            <th>Cantidad</th>
                            <th>Modelo</th>
                            <th>Código único EDF</th>
                            <th># de puertas</th>
                            <th> Movimiento</th>
                            <th>Razón</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr>
                                <td>{item.cantidad}</td>
                                <td>{item.modelo}</td>
                                <td>{item.codigo}</td>
                                <td>{item.puertas}</td>
                                <td>
                                    <select>
                                        <option value='1'>Mantener</option>
                                        <option value='2'>Cambiar</option>
                                        <option value='3'>Remover</option>
                                    </select>
                                </td>
                                <td>
                                    <input type='text' placeholder='Razón'/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }else if(type == 'solic'){
        return(
            <div>
                <table class='table'>
                    <thead class='tableheader'>
                        <tr>
                            <th>Cantidad</th>
                            <th>Modelo</th>
                            <th>Código único EDF</th>
                            <th># de puertas</th>
                            <th> Movimiento</th>
                            <th>Reemplaza a</th>
                            <th>Razón</th>
                            <th>Checklist</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr>
                                <td>{item.cantidad}</td>
                                <td>{item.modelo}</td>
                                <td>{item.codigo}</td>
                                <td>{item.puertas}</td>
                                <td>
                                    <select>
                                        <option value='1'>Agregar</option>
                                        <option value='2'>Cambiar</option>
                                    </select>
                                </td>
                                <td>
                                    <input type='text' placeholder='Código'/>
                                </td>
                                <td>
                                    <input type='text' placeholder='Razón'/>
                                </td>
                                <td>
                                    <Checklist />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default Table