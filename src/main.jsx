import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Toaster />
  </>
);
