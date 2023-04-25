import React from "react";
import {ReactComponent as Bars} from '../../images/bars.svg'
import Menu from "./Menu";

const TopContainer = () =>{
    return(
        <div className='topContainer'>
          <center>
            <h1 className='topText'>Hola, [USER]</h1>
          </center>
          <Menu />
        </div> 
    )
}

export default TopContainer