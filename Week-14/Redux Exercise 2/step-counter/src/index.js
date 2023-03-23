import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import StepCounter from './Store/StepCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={StepCounter}>
      <App />
    </Provider>
  </React.StrictMode>
);
