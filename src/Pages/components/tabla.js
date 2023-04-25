import React, {useEffect, useState} from 'react';
import style from '../../css/style.css';
import Checklist from './checklist';

const Table = (props) =>{
    const type = props.type;
    const item = props.item;



    if(type === 'curr'){
        return(
                    <tr>
                        <td>1</td>
                        <td>{item.idModelo[0]}</td>
                        <td>{item.idRefrigeradorSolicitado}</td>
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
        )
    }else if(type === 'solic'){
        return(                    
                            <tr>
                            {/* //     <td>{item.cantidad}</td>
                            //     <td>
                            //         <select>
                            //             <option value={item.modelo}>{item.modelo}</option>
                            //         </select>
                            //     </td>
                            //     <td>
                            //         <select>
                            //             <option value={item.codigo}>{item.codigo}</option>
                            //         </select>
                            //     </td>
                            //     <td>{item.puertas}</td>
                            //     <td>
                            //         <select>
                            //             <option value='1'>Agregar</option>
                            //             <option value='2'>Cambiar</option>
                            //         </select>
                            //     </td>
                            //     <td>
                            //         <input type='text' placeholder='Código'/>
                            //     </td>
                            //     <td>
                            //         <input type='text' placeholder='Razón'/>
                            //     </td>
                            //     <td>
                            //         <Checklist />
                            //     </td> */}
                            </tr>
        )
    }
    
}

export default Table