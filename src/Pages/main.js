import Main_Des from "./components/Main_Des";
import Admin_Dashboard from "./components/Admin_dashboard";
import Main_Chofer from "./components/Main_Chofer";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Main() {
  const navigate = useNavigate();

  var id = '';
  var rol = '';
  try{
    var { id, rol }  = JSON.parse(localStorage.getItem('dataKey'));
  }
  catch{
    var id = '';
    var rol = '';
  }
  useEffect(() => {
    if(id === ''){
      navigate('/')
    }
  }, [])

  if(rol === "Des"){
    return(
      <Main_Des id={id}/>
    )
  }

  else if(rol === "Admin"){
    return(
      <Admin_Dashboard id={id}/>
    )
  }

  else if(rol === "Chofer"){
    return(
      <Main_Chofer id={id}/>
    )
  }
  else{
    navigate('/')
  }

}

export default Main