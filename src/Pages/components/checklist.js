import React from 'react';

const Checklist = () =>{
    return(
        <div>
            <label class='slabel'>El equipo puede entrar sin problemas</label>
            <input type='checkbox'></input><br/>
            <br></br>
            <label class='slabel'>El equipo queda bien en la posición</label>
            <input type='checkbox'></input><br/>
            <br></br>
            <label class='slabel'>Pasos adicionales para el chofer</label>
            <input type='checkbox'></input><br/>
            <input type='text' placeholder='Pasos'></input>
            <br></br>
            <label class='slabel'>Equipo de trabajo adicional</label>
            <input type='checkbox'></input><br/>
            <input type='text' placeholder='Equipo'></input>
            <br></br>
            <label class='slabel'>Dia y hora preferente para el cliente</label>
            <input type='text'></input><br/>
        </div>
    )
}

export default Checklist;