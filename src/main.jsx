import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'modern-normalize';
import AuthProvider from './context/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import LangProvider from './context/LangProvider.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <LangProvider>
      <App />
    </LangProvider>
    <Toaster />
  </AuthProvider>
);
