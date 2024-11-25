import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Importe a barra de navegação
import './App.css';
import HomePage from './Components/HomePage'; // Sua página inicial
import ProductPage from './Components/ProductPage'; // Outra página, exemplo de produto

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Barra de navegação que será mostrada em todas as páginas */}
        <Navbar />

        {/* Define o conteúdo das rotas */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Página inicial */}
          <Route path="/product" element={<ProductPage />} /> {/* Página de produto */}

          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
