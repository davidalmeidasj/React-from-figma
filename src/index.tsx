import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import './index.css';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
