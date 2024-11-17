import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Visitor/Home';
import Login from '../pages/Visitor/Signin';
import Signup from '../pages/Visitor/Signup';
import Myspace from '../pages/Visitor/Myspace';
import HomeE from '../pages/Employee/homeEmpleados';
import HomeEmpleados from '../pages/Employee/homeEmpleados';
import HomeAdmin from '../pages/Admin/HomeAdmin';
import Error from '../components/Error404';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/myspace" element={<Myspace />} />
        <Route path="/homee" element={<HomeEmpleados />} />
        <Route path="*" element={<Error />} />
        <Route path='/HomeA' element={<HomeAdmin/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
