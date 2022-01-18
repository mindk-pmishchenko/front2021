import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import PostsContainer from './containers/posts';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<App />}/>
                      <Route path="/posts" element={<PostsContainer />}/>
                      <Route path="/404" element={<div>404</div>}/>
                  </Routes>
              </BrowserRouter>
          </ErrorBoundary>
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
