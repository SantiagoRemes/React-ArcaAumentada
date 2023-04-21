import './App.css';
import LogIn from './Pages/login';
import Main from './Pages/main';
import Solicitud from './Pages/solicitud';
import Unity from './Pages/unity';
import Visita from './Pages/visita';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Historial from './Pages/historial';
import Solcheck from './Pages/solcheck';
import Dashboard from './Pages/dashboard';
//import Test from './Pages/Test/Test';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LogIn />}/>
          <Route path=':idDes/main' element={<Main />}/>
          <Route path=':idDes/visita' element={<Visita />}/>
          <Route path='/unity' element={<Unity />}/>
          <Route path=':idDes/solicitud' element={<Solicitud />}/>
          <Route path=':idDes/historial' element={<Historial />}/>
          <Route path=':idDes/solcheck/:idSolicitud' element={<Solcheck />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}
//<Route path='/Test' element={<Test />}/>

export default App;
