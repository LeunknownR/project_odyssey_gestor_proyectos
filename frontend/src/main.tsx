import ReactDOM from 'react-dom/client'
import "./normalize.css";
import App from './App.tsx'
import './config/api.ts';
import { APIHandler, CancelServiceRequest } from './config/api.ts';

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
APIHandler.init();
CancelServiceRequest.cancelWhenLeavePage();
root.render(
    <App />
);