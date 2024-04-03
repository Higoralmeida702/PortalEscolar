import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Inicio from './componentes/inicio';


function App() {
  return (
    <div>
      <header className='headerNavegacao'>

      <BrowserRouter>
      <img src="./images/logo3.png" alt="" />
        <ul>
          <li className='menu-item'><Link to="/inicio">Inicio</Link></li>
          <li className='menu-item'><Link to="/cursos">Cursos</Link></li>
          <li className='menu-item'><Link to="/vagas">Vagas</Link></li>
          <li className='menu-item'><Link to="/noticias">Noticías</Link></li>
          <li className='menu-item'><Link to="/contato">Contato</Link></li>
        </ul>
        <img className="menu-icones" src="./images/FacebookLogo.png" alt="" />
        <img className="menu-icones" src="./images/InstagramLogo.png" alt="" />
        <img className="menu-icones" src="./images/LinkedinLogo.png" alt="" />
        <Routes>
          <Route path="/" element={<Inicio/>} />      
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
