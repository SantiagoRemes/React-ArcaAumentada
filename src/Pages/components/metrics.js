import React from "react";

const Metrics = () =>{
    <div className='metrics'>
            <div className='created_sol'>
              <b><p className='amnt'>0</p></b>
              <p className='lbl'>Solicitudes creadas</p>
            </div>
            <div className='pending_sol'>
              <b><p className='amnt'>0</p></b>
              <p className='lbl'>Solicitudes en proceso</p>
            </div>
            <div className='compl_sol'>
              <b><p className='amnt'>0</p></b>
              <p className='lbl'>Solicitudes completadas</p>
            </div>
    </div>
}

export default Metrics