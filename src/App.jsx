import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Inicio from './componentes/inicio';
import Cursos from './componentes/cursos/cursos';
import Noticias from './componentes/noticias';


function App() {
  return (
    <div>
    <div className='headerNavegacao'>
      <BrowserRouter>
        <ul>
      <img src="./images/logo3.png" alt="" />
          <li className='menu-item'><Link to="/inicio">Inicio</Link></li>
          <li className='menu-item'><Link to="/cursos">Cursos</Link></li>
          <li className='menu-item'><Link to="/vagas">Vagas</Link></li>
          <li className='menu-item'><Link to="/noticias">Noticías</Link></li>
          <li className='menu-item'><Link to="/contato">Contato</Link></li>
          <img className="menu-icones" src="./images/FacebookLogo.png" alt="" />
        <img className="menu-icones" src="./images/InstagramLogo.png" alt="" />
        <img className="menu-icones" src="./images/LinkedinLogo.png" alt="" />
        </ul>
        
        <Routes>
          <Route path="/" element={<Inicio/>} />     
          <Route path="/inicio" element={<Inicio/>} />    
          <Route path="/cursos" element={<Cursos/>} /> 
          <Route path="/noticias" element={<Noticias/>}/>
        </Routes>
      </BrowserRouter>
      </div>
      </div>
  );
}

export default App;