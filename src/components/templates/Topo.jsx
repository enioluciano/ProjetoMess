import React from 'react';
import '../css/Topo.css'
import logo from '../../assets/img/logo.png'
import menuImagem from '../../assets/img/depoimento.png'



function Topo() {
    
  return (
      <div className="container">
          <div className="topo">
              <div id="area-logo">
               <a href="/"><img src={logo} alt='logo' className='logo'/></a>
              </div>

              <div id="area-menu">
                  <div className="conteudo-menu">
                      <div className="menu-locais">
                          <span className="locais">Parnaíba - Teresina - Fortaleza </span>

                          <a href="/" className="reserva">Reservar</a>
                          <div style={{ clear: 'both' }}></div>

                      </div>

                      <div className="menu-links">
                         
                          <a href="/" >HOME</a> <br />
                          <a href="/" >HISTÓRIA</a> <br />
                          <a href="/" >IMPRENSA</a> <br />
                          <a href="/" >GASTRONOMIA</a> <br />
                          <a href="/" >CONTATO</a> <br />

                          <img src={menuImagem} alt='menuImagem' className='menu-imagem'/>
                      </div>         

                  </div>

              </div>

          </div>

      </div>
      
    
  );} export default Topo;