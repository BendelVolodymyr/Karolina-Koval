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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="drawings" element={<Drawings />} />
          <Route path="homeworks" element={<Homework />} />
          <Route path="projects" element={<Works />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
