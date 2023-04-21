import React from 'react'

function Tablasolicitado() {
  return (
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
  )
}

export default Tablasolicitado