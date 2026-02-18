import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Paginacao from './paginacao.tsx'

function Main() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/funcionarios">Funcionários</Link>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/funcionarios" element={<Paginacao />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)