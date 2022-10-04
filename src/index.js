import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/main.css'
import './styles/util.css'
import './styles/animate/animate.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

