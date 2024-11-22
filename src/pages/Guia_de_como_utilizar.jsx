import { Allcons, Efinal, NovoBotaoTres, NovoBotaodois, Amem, Cabeca, Intero, Final, ImgHeaderUm, BotaoUm, BotaoDois, Espaco, Espacodois, Impofort, Icone, Indra, Ashura, Pretumm, MobileMenu, } from "./Guia_de_como_utilizar.js";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import imgtres from '../assets/pagtres.jpg'
import menu from '../assets/menu.svg'
import fola from '../assets/fola.png'
import MyMenu from '../assets/Mymenu.png'

export function Guia() {
  const [ abrirMenu, setAbrirMenu ] = useState(false)
  function moises() {
    setAbrirMenu(true)
  }
  function satamm() {
    setAbrirMenu(false)
  }

  const [ tamanho, setTamanho] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTamanho(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
    {tamanho > 1023 ? (
    <Intero>
    <Cabeca>
    <NovoBotaodois>



      
        <img src={fola} alt="" />
      
    
      
        <Amem ><Link to="/">Flat-Earth</Link></Amem>
        
        <NovoBotaoTres>
          <Amem> <Link to="/Guia">Vídeos</Link></Amem>
          <Amem> <Link to="/Pecas">Peças</Link></Amem>
          <Amem> <Link to="/Integrantes">Integrantes</Link></Amem>
          <Amem> <Link to="/Referencias">Referências</Link></Amem>
          <Amem> <Link to="/Jogo">Jogo</Link></Amem>
        </NovoBotaoTres>
        </NovoBotaodois>





      
    </Cabeca>
    
    <Allcons>
      
      
      
      <h1>Vídeos</h1>

      <div>
      <iframe
        width="850"
        height="520"
        src="https://www.youtube.com/embed/MVsXJPLvlYg?feature=share"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ display: 'block', margin: '0 auto', marginBlock: '4%' }} // Aqui o estilo está no formato correto
      ></iframe>
      </div>




      <Espacodois>
        <p></p>
      </Espacodois>


    </Allcons>

    <Efinal>
      
    </Efinal>
    
    <Final>

    </Final>

    </Intero>
  ) : (
    <Intero>
      <ImgHeaderUm>
    <header>


    <MobileMenu  abrir={abrirMenu}>

    <Impofort>
    <BotaoDois>
        <img src={fola} alt="" />
    </BotaoDois>
    
        <BotaoUm>
        <button onClick={moises}>
        <img src={MyMenu} alt="" />
        </button>
        </BotaoUm>
        </Impofort>
     


      <nav>
        <Icone onClick={satamm}>
            <Indra></Indra>
            <Ashura></Ashura>
        </Icone>
      <ul>
          
          <li><Link to="/">Página inicial</Link></li>
          <Pretumm></Pretumm>
          <li><Link to="/Guia">Vídeos</Link></li>
          <Pretumm></Pretumm>
          <li><Link to="/Pecas">Peças</Link></li>
          <Pretumm></Pretumm>
          <li><Link to="/Integrantes">Integrantes</Link></li>
          <Pretumm></Pretumm>
          <li><Link to="/Referencias">Referências</Link></li>
          <Pretumm></Pretumm>
          <li><Link to="/Jogo">Jogo</Link></li>
          <Pretumm></Pretumm>

        </ul>
      </nav>


      </MobileMenu>





    </header>
    </ImgHeaderUm>
    
    <Allcons>
      
      
      <h1>Vídeos</h1>

      <div>
      <iframe
        width="70%"
        height="400"
        src="https://www.youtube.com/embed/MVsXJPLvlYg?feature=share"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ display: 'block', margin: '0 auto', marginBlock: '4%'  }} // Aqui o estilo está no formato correto
      ></iframe>
    </div>

    <Espacodois>
        <p></p>
      </Espacodois>

    </Allcons>
    
    <Efinal>
      
      </Efinal>
      
    <Final>

    </Final>

    </Intero>
  )
}
</div>
  )
}
