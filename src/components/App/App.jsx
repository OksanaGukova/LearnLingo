

import './App.css'
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from '../Layout/Layout';

const Home = lazy(() => import ('../../pages/Home/Home'));
const RegistrationPage = lazy(() => import ('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import ('../../pages/LoginPage/LoginPage'));
const Favorites = lazy(() => import ('../../pages/Favorites/Favorites'));
const Teachers = lazy(() => import ('../../pages/Teachers/Teachers'));
const NotFoundPage = lazy(() => import ('../../pages/NotFoundPage/NotFoundPage'));

function App() {


  return (
    <>
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </Layout>
    </>
  )
}

export default App
