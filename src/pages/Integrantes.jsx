import { Allcons, BotaoDois, Afre, NovoBotaoTres, Sfre, Impofort, Icone, Pessoa, Indra, Ashura, Pretumm, MobileMenu, Nicolas, Giovanny, Joao, Santini, Pessoas, NovoBotaodois, Amem, Cabeca, Intero, Final, ImgHeaderUm, Espaco, BotaoUm } from "./Integrantes.styles.js";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import nicolas from '../assets/Nicolas2.png'
import giovanny from "../assets/Giovanny.png"
import santini from "../assets/Santini.png"
import joao from "../assets/Joao.png"
import menu from '../assets/menu.svg'
import fola from '../assets/fola.png'
import MyMenu from '../assets/Mymenu.png'
import bebo from '../assets/Bebado.png'

export function Integrantes() {
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
      <h1>Integrantes</h1>




      <Pessoas>


      <Nicolas>
      <img src={nicolas} alt="" />
      </Nicolas>

      <Giovanny>
      <img src={bebo} alt="" />
      </Giovanny>

      <Santini>
      <img src={santini} alt="" />
      </Santini>

      <Joao>
        <img src={joao} alt="" />
      </Joao>



      </Pessoas>






      <Pessoa>




      <Espaco>
        <Afre>Nicolas Domingues Martins </Afre>
        <Sfre>Designer do Projeto </Sfre>
      </Espaco>


      <Espaco>
        <Afre>Giovanny Biguinati Jardim </Afre>
        <Sfre>Engenheiro do Projeto Físico </Sfre>
      </Espaco>

      <Espaco>
        <Afre>Gabriel Santini Martins </Afre>
        <Sfre>Divulgador do Projeto</Sfre>
      </Espaco>


      <Espaco>
        <Afre>João Pedro Silveira Santos</Afre>
        <Sfre> Desenvolvedor de Código do Site </Sfre>
      </Espaco>




      </Pessoa>

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
      <h1>Integrantes</h1>


      <img src={nicolas} alt="" />


      <Espaco>
        <Afre>Nicolas Domingues Martins </Afre>
        <Sfre>Designer do Projeto </Sfre>
      </Espaco>



      <img src={bebo} alt="" />

      
      <Espaco>
        <Afre>Giovanny Biguinati Jardim </Afre>
        <Sfre>Engenheiro do Projeto Físico </Sfre>
      </Espaco>
      



      <img src={santini} alt="" />


      <Espaco>
        <Afre>Gabriel Santini Martins </Afre>
        <Sfre>Divulgador do Projeto</Sfre>
      </Espaco>
      



      <img src={joao} alt="" />


      <Espaco>
        <Afre>João Pedro Silveira Santos</Afre>
        <Sfre> Desenvolvedor de Código do Site </Sfre>
      </Espaco>


    </Allcons>
    
    <Final>

    </Final>

    </Intero>
  )
}
</div>
  )
}
