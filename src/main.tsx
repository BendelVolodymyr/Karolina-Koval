import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
// basename="/Karolina-Koval" тест
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Karolina-Koval">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
