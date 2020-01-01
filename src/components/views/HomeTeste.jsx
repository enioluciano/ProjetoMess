import React from 'react';
import '../css/Tela.css'
import Img1 from '../templates/Img1'
import Img2 from '../templates/Img2'
import Img3 from '../templates/Img3'


function Home() {
    
  return (
      <div className="container">
          <div className="borda-redonda">
              <span id='fonte'><strong>YOUR MESSAGE</strong></span>
              <p id='post'>I will be there in 30 <br/> minutes. I am Sorry</p>
              
              <div className='botao-container'>

                  <div id='botao2'>
                    <Img1 />
                  </div>
                 

              </div> 

              <div className='botao-container2'>
                  <div id='botao3'>
                      <Img2 />
                  </div>

              </div>

              <div className='botao-container3'>
                  <div id='botao4'>
                      <Img3 />
                  </div>                  

              </div>
              
              <div className="botao-container4">
              <p>Hey Peter! <br/>
                  Where are you?</p>

              </div>

              
          </div>        


      </div>
    
  );
}

export default Home;