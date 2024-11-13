import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Visitor/Home';
import Myspace from '../pages/Visitor/Myspace';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myspace" element={<Myspace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
