import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
