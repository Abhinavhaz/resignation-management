

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';  // Import the Provider
import store from "./redux/store.jsx" // Import your Redux store
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
    <h1>Hello, React!</h1>
      <App />
    </Provider>
  </StrictMode>
);
