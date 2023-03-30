import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Auth from './utils/auth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={Auth.getUser() ? <Navigate to='/dogs' replace /> : <Login />} />
      <Route path='/dogs' element={<Layout />}>
        <Route index={true} element={<Home />} />
      </Route>
    </>
  )
);

export default router;
