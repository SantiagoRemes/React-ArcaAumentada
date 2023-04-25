import React from "react";

const dashboard = () =>{
    const userAgent = navigator.userAgent;

    const isComputer = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    const isIPhone = /iPhone/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);

    if(isComputer){
        return(
            <div>
                
            </div>
        )
    }else if(isIPhone || isAndroid){
        return(
            <div>
                
            </div>
            
        )
    }
    

}

export default dashboard;