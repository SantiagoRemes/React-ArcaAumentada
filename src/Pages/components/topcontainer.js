import React from "react";
import {ReactComponent as Bars} from '../../images/bars.svg'
import Menu from "./Menu";

const TopContainer = (props) =>{
    const name = props;
    return(
        <div className='topContainer'>
          <center>
            <h1 className='topText'>Hola, {name}</h1>
          </center>
          <Menu />
        </div> 
    )
}

export default TopContainer