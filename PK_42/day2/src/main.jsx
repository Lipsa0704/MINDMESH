import React from 'react'
import ReactDOM from 'react-dom/client'
// Import App2 instead of App
import App from './App' 
import CounterEffect from './App2' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App /> 
    <CounterEffect />
    </>
  </React.StrictMode>
)