import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import Ingresses from './Pages/Ingresses/Ingresses';
import Pods from './Pages/Pods/Pods';
import Services from './Pages/Services/Services';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Settings from './Pages/Settings/Settings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route path='/home' element={<Home />} />
          <Route path='/pods' element={<Pods />} />
          <Route path='/services' element={<Services />} />
          <Route path='/ingress' element={<Ingresses />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
