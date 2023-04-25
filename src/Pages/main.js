import Main_Des from "./components/Main_Des";
import Main_Admin from "./components/Main_Admin";
import Main_Chofer from "./components/Main_Chofer";
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const {id, rol} = JSON.parse(localStorage.getItem('dataKey'));
  

  if(rol === "Des"){
    return(
      <Main_Des id={id}/>
    )
  }

  else if(rol === "Admin"){
    return(
      <Main_Admin id={id}/>
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