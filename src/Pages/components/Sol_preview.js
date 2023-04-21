import React from "react";

const Sol_prev = (props) =>{
    const item = props.item;
    return(
        <div className='order'>
                <p className='ref'>{item.idSolicitud[0]}</p>
                <p>{item.nombre}</p>
                <p>{item.estatus}</p>
        </div>
    )
}

export default Sol_prev