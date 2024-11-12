import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Visitor/Home';
import Login from '../pages/Visitor/Login';
import Singup from '../pages/Visitor/Signup';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
