import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
      <ErrorBoundary>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/404" element={<div>404</div>}/>
          </Routes>
      </BrowserRouter>
      </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
