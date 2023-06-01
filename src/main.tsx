// React dependencies
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

// Miscellaneous dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Project dependencies
import { App } from './presentation';
import { store } from './core/shared/infrastructure';

// Styles
import './index.scss';

// React query client reference
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
