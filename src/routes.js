import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Auth from './utils/auth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index={true} element={<Home />} />
      <Route path='login' element={<Login />} />
    </Route>
  )
);

export default router;
