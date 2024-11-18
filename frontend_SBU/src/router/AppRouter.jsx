import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Visitor/Home';
import SignIn from '../pages/Visitor/Signin';
import Myspace from '../pages/Visitor/Myspace';
import HomeE from '../pages/Employee/homeEmpleados';
import HomeEmpleados from '../pages/Employee/homeEmpleados';
import TablaEmpleados from '../pages/Employee/TablaEmpleados';
import HomeAdmin from '../pages/Admin/HomeAdmin';
import Error from '../components/Error404';
import Verlibros from '../pages/User/ViewBooks';
import TablaUsuarios from '../pages/Admin/TablaUsuarios';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn/>} />
        <Route path="/myspace" element={<Myspace />} />
        <Route path="/homee" element={<HomeEmpleados />} />
        <Route path="/TablaEmpleados" element={<TablaEmpleados />} />
        <Route path="/TablaUsuarios" element={<TablaUsuarios />} />
        <Route path='/HomeAdmin' element={<HomeAdmin/>} />
        <Route path="*" element={<Error />} />
        <Route path='/Verlibro' element={<Verlibros/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
