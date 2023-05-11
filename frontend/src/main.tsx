import ReactDOM from 'react-dom/client'
import "./normalize.css";
import App from './App.tsx'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <App />
);
