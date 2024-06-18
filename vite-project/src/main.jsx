import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { MyContext } from './component/context/Mycontext.jsx'
import { MyProvider } from './component/context/Mycontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
    <MyProvider>
    <App />
    </MyProvider>
  </React.StrictMode>
)
