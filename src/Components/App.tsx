import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Drawings = lazy(() => import('../pages/Drawings'));
const Homework = lazy(() => import('../pages/Homeworks'));
const Works = lazy(() => import('../pages/Projects'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <Routes>
        <Route path="home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="drawings" element={<Drawings />} />
          <Route path="homework" element={<Homework />} />
          <Route path="works" element={<Works />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
