import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Visitor/Home';
import SignIn from '../pages/Visitor/Signin';
import Myspace from '../pages/Visitor/Myspace';
import HomeEmpleados from '../pages/Employee/HomeEmpleados';
import TablaLibros from '../pages/Employee/TablaLibros';
import HomeAdmin from '../pages/Admin/HomeAdmin';
import Error from '../components/Error404';
import Verlibros from '../pages/User/ViewBooks';
import TablaUsuarios from '../pages/Admin/TablaUsuarios';
import CatalogoLibros from '../pages/User/BooksCatalog';
import Nosotros from '../pages/Admin/NosotrosEJ';
import ProtectedRoute from '../components/ProtectedRoute';
import GestionCategorias from '../pages/Employee/TablaCategoria';
import { AuthProvider } from '../contexts/AuthContext';
import TablaEstudiantes from '../pages/Admin/TablaEstudiantes';

function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<SignIn />} />

          {/* Rutas para Admin */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/HomeAdmin" element={<HomeAdmin />} />
            <Route path="/TablaUsuarios" element={<TablaUsuarios />} />
            <Route path="/TablaEstudiantes" element={<TablaEstudiantes/>}/>
            <Route path="/TablaLibros" element={<TablaLibros />} />
            <Route path="/GestionCategorias" element={<GestionCategorias />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Route>

          {/* Rutas para Employee */}
          <Route element={<ProtectedRoute allowedRoles={['employee']} />}>
            <Route path="/homee" element={<HomeEmpleados />} />
            <Route path="/TablaLibros" element={<TablaLibros />} />
            <Route path="/GestionCategorias" element={<GestionCategorias />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Route>

          {/* Rutas para Student */}
          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="/CatalogoLibros" element={<CatalogoLibros />} />
            <Route path="/myspace" element={<Myspace />} />
            <Route path="/verlibro/:id" element={<Verlibros />} />
          </Route>

          {/* Rutas comunes para Admin y Employee */}
          <Route element={<ProtectedRoute allowedRoles={['admin', 'employee']} />}>
            <Route path="/TablaLibros" element={<TablaLibros />} />
          </Route>

          {/* Rutas comunes para Admin, Employee y Student */}
          <Route element={<ProtectedRoute allowedRoles={['admin', 'employee', 'student']} />}>
            <Route path="/nosotros" element={<Nosotros />} />
          </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;
