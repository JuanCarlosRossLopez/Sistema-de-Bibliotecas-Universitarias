import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Visitor/Home';
import Login from '../pages/Visitor/Login';
import Signup from '../pages/Visitor/Signup';

import Myspace from '../pages/Visitor/Myspace';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/myspace" element={<Myspace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
