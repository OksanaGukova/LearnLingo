

import './App.css'
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import ('../../pages/Home/Home'));
const Favorites = lazy(() => import ('../../pages/Favorites/Favorites'));
const Teachers = lazy(() => import ('../../pages/Teachers/Teachers'));
const NotFoundPage = lazy(() => import ('../../pages/NotFoundPage/NotFoundPage'));

function App() {


  return (
    <>
    <Suspense fallback ={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </Suspense>
    </>
  )
}

export default App
