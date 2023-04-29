import React from "react";
import Main_Admin_mobile from "./Main_admin_mobile";
import Main_Admin_computer from "./Main_Admin_computer";

const Dashboard = (props) =>{
    const {id} = props;
    const userAgent = navigator.userAgent;

    const isComputer = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    const isIPhone = /iPhone/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);

    if(isComputer){
        return(
            <div>
                <Main_Admin_computer id={id}/>
            </div>
        )
    }else if(isIPhone || isAndroid){
        return(
            <div>
                <Main_Admin_mobile id={id} />
            </div>
            
        )
    }
    

}

export default Dashboard;