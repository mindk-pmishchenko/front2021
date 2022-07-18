import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
              <App />
          </ErrorBoundary>
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
