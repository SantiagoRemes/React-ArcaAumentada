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
import Test from './Pages/Test/Test';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LogIn />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/visita' element={<Visita />}/>
          <Route path='/unity' element={<Unity />}/>
          <Route path='/solicitud' element={<Solicitud />}/>
          <Route path='/historial' element={<Historial />}/>
          <Route path='/solcheck' element={<Solcheck />}/>
          <Route path='/Test' element={<Test />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
