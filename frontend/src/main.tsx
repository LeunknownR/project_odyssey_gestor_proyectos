import ReactDOM from 'react-dom/client';
import "./normalize.css";
import './config/api.ts';
import App from './App.tsx'
import { APIHandler, CancelServiceRequest } from './config/api.ts';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
CancelServiceRequest.init();
APIHandler.init();
root.render(
  <App />
);