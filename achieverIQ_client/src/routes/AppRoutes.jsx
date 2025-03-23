import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Results from '../pages/Results';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ContactPage from '../pages/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="results" element={<Results />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
