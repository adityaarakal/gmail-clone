import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import './App.scss'

const element = document.getElementById('app');
const root = ReactDOM.createRoot(element);
root.render(<App />);