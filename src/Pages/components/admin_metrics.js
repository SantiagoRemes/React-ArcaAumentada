import React from "react";

const AdminMetrics = () =>{
    return(
        <div className='metrics'>
            <div className='created_sol'>
            <b><p className='amnt'>0</p></b>
            <p className='lbl'>Comodatos enviados</p>
            </div>
            <div className='pending_sol'>
            <b><p className='amnt'>0</p></b>
            <p className='lbl'>Ordenes Aprobadas</p>
            </div>
            <div className='compl_sol'>
            <b><p className='amnt'>0</p></b>
            <p className='lbl'>Ordenes Denegadas</p>
            </div>
        </div>
    )
}

export default AdminMetrics