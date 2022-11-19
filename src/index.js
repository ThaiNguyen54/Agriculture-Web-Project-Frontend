import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/main.css'
import './styles/util.css'
import './styles/animate/animate.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import NotificationProvider from 'use-toast-notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <NotificationProvider 	
                config={{
                position: 'top-right',
                isCloseable: false,
                showTitle: true,
                showIcon: true,
                duration: 5,
            }}>
                <App />
            </NotificationProvider>
        </Provider>
    </BrowserRouter>
);