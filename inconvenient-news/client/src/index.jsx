import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.jsx';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)