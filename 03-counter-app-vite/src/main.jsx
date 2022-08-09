import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CounterApp } from './components/CounterApp';
import { FirstApp } from './FirstApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp initValue={0} />
        {/* <FirstApp title='Hola'/> */}
    </React.StrictMode>
);