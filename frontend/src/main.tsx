import ReactDOM from 'react-dom/client'
import "./normalize.css";
import App from './App.tsx'
import { initAxiosInterceptors } from './interceptors/axios.interceptors.ts';
import './config/api.ts';
import { APIHandler } from './config/api.ts';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
APIHandler.init();
initAxiosInterceptors();
root.render(
  <App />
);