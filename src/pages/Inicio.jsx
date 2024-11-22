import { Allcons, NovoBotaoTres, NovoBotaodois, Amem, Cabeca, Intero, Final, ImgHeaderUm, BotaoUm, Impofort, Icone, Indra, Ashura, Pretumm, MobileMenu, BotaoDois } from "./Inicio.styles.js";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import imgum from '../assets/Pagumm.jpg'
import fola from '../assets/fola.png'
import MyMenu from '../assets/Mymenu.png'

export function Inicio() {
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
      
      <img src={imgum} alt="" />
      <h1>Flat-Earth</h1>
      <p>Um projeto de terrário de répteis de pequeno porte promove interação educativa e terapêutica com a natureza, incentivando a conservação ambiental. A montagem e observação do terrário oferecem uma experiência prática e imersiva, facilitando o aprendizado de conceitos ecológicos e o desenvolvimento de habilidades como responsabilidade e investigação. Ao criar um ambiente seguro para interagir com os répteis, o projeto fortalece a conexão emocional com a vida selvagem, despertando uma maior consciência sobre a importância da biodiversidade e da preservação dos ecossistemas.</p>
    </Allcons>
    
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
        
        <img src={imgum} alt="" />
        <h1>Flat-Earth</h1>
        <p>Um projeto de terrário de répteis de pequeno porte promove interação educativa e terapêutica com a natureza, incentivando a conservação ambiental. A montagem e observação do terrário oferecem uma experiência prática e imersiva, facilitando o aprendizado de conceitos ecológicos e o desenvolvimento de habilidades como responsabilidade e investigação. Ao criar um ambiente seguro para interagir com os répteis, o projeto fortalece a conexão emocional com a vida selvagem, despertando uma maior consciência sobre a importância da biodiversidade e da preservação dos ecossistemas.</p>
      </Allcons>
      
      <Final>
  
      </Final>
  
      </Intero>      
    )
  }
  </div>
  
  )
}
