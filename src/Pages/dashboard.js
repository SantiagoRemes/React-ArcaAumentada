import React from "react";
import Dashbrd_mobile from "./dashbrd_mobile";
import Dashbrd_computer from "./dashbrd_computer";

const dashboard = () =>{
    const userAgent = navigator.userAgent;

    const isComputer = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    const isIPhone = /iPhone/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);

    if(isComputer){
        return(
            <div>
                <h1>the identifier recognized you</h1>
                <Dashbrd_computer/>
            </div>
        )
    }else if(isIPhone || isAndroid){
        return(
            <div>
                <Dashbrd_mobile />
            </div>
            
        )
    }
    

}

export default dashboard;