import ReactDOM from 'react-dom/client';
import "./normalize.css";
import './config/api.ts';
import "./customize.css";
import App from './App.tsx'
import { APIHandler, CancelServiceRequest } from './config/api.ts';

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
APIHandler.init();
CancelServiceRequest.cancelWhenLeavePage();
root.render(
    <App />
);