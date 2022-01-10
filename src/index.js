import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/articles/:id" element={<div>articles</div>}/>
              <Route path="/article" element={<div>new article</div>}/>
              <Route path="/test/*" element={<div>404</div>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
