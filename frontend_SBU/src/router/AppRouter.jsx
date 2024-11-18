import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Visitor/Home';
import SignIn from '../pages/Visitor/Signin';
import Myspace from '../pages/Visitor/Myspace';
import HomeE from '../pages/Employee/homeEmpleados';
import HomeEmpleados from '../pages/Employee/homeEmpleados';
import TablaLibros from '../pages/Employee/TablaLibros';
import HomeAdmin from '../pages/Admin/HomeAdmin';
import Error from '../components/Error404';
import Verlibros from '../pages/User/ViewBooks';
import TablaUsuarios from '../pages/Admin/TablaUsuarios';
import Nosotros from '../pages/Admin/nosotrosEJ';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn/>} />
        <Route path="/myspace" element={<Myspace />} />
        <Route path="/homee" element={<HomeEmpleados />} />
        <Route path="/TablaLibros" element={<TablaLibros />} />
        <Route path="/TablaUsuarios" element={<TablaUsuarios />} />
        <Route path='/AdminEJ' element={<HomeAdminEJ/>} />
        <Route path='/Admin' element={<HomeAdmin/>} />
        <Route path="*" element={<Error />} />
        <Route path='/Verlibro' element={<Verlibros/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>

      </Routes>
    </Router>
  );
}

export default AppRoutes;
