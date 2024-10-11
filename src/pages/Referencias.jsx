import { Allcons, NovoBotaodois, MobileMenu, Efinal, Amem, NovoBotaoTres, Cabeca, Intero, Final, BotaoUm, Indra, Ashura, ImgHeaderUm, Pretumm, Icone, Impofort, BotaoDois, Aga, Clarencio } from "./Referencias.styles.js";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import imgdois from '../assets/pagdois.png'
import menu from '../assets/menu.svg'
import fola from '../assets/fola.png'
import MyMenu from '../assets/Mymenu.png'

export function Referencias() {
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
          <Amem> <Link to="/Guia">Guia</Link></Amem>
          <Amem> <Link to="/Pecas">Peças</Link></Amem>
          <Amem> <Link to="/Integrantes">Integrantes</Link></Amem>
          <Amem> <Link to="/Referencias">Referências</Link></Amem>
        </NovoBotaoTres>
        </NovoBotaodois>





      
    </Cabeca>
    
    <Allcons>
      
      <img src={imgdois} alt="" />
      <h1>Referências</h1>
      <Clarencio>Referências de Plantas:</Clarencio>
      <Aga><a href="https://www.researchgate.net/publication/336533688_A_FORMACAO_INICIAL_E_CONTINUADA_DE_PROFESSORES_DE_CIENCIAS_NATURAIS_E_A_EXTENSAO_UNIVERSITARIA_DA_FACULDADE_UnB_DE_PLANALTINA">Atividade do PIBID</a></Aga>
          
      <Clarencio>Referências sobre terrário na escola:</Clarencio>
      <Aga><a href="https://www.researc-hgate.net/prof-ile/Maria-Ribeiro-Ferreira/publication/350383387-Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema/links/605cb25392-851cd8ce691f51/Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema.pdf">Instrumento didático</a></Aga>

      <Clarencio>Referências sobre animais:</Clarencio>
      <Aga><a href="https://repositorio-aberto.up.pt/bitstream/10216/44939/2/Clia%20Angelina%20da%20Mota%20TavaresTESE.pdf">Centro de hospedagem</a></Aga>
      
      <Clarencio>Referências de inovação:</Clarencio>
      <Aga><a href="https://repositorio-aberto.up.pt/handle/10216/148298#:~:text=Format-,596448.pdf,-150.42%20kB">Políticas de inovação</a></Aga>

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
          <li><Link to="/Guia">Guia</Link></li>
          <Pretumm></Pretumm>
          <li><Link to="/Pecas">Peças</Link></li>
          <Pretumm></Pretumm>
          <li><Link to="/Integrantes">Integrantes</Link></li>
          <Pretumm></Pretumm>
          <li><Link to="/Referencias">Referências</Link></li>
          <Pretumm></Pretumm>

        </ul>
      </nav>


      </MobileMenu>





    </header>
    </ImgHeaderUm>
    
    <Allcons>
      
      <img src={imgdois} alt="" />
      <h1>Referências</h1>
      <Clarencio>Referências de Plantas:</Clarencio>
      <Aga><a href="https://www.researchgate.net/publication/336533688_A_FORMACAO_INICIAL_E_CONTINUADA_DE_PROFESSORES_DE_CIENCIAS_NATURAIS_E_A_EXTENSAO_UNIVERSITARIA_DA_FACULDADE_UnB_DE_PLANALTINA">Atividade do PIBID</a></Aga>
          
      <Clarencio>Referências sobre terrário na escola:</Clarencio>
      <Aga><a href="https://www.researc-hgate.net/prof-ile/Maria-Ribeiro-Ferreira/publication/350383387-Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema/links/605cb25392-851cd8ce691f51/Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema.pdf">Instrumento didático</a></Aga>

      <Clarencio>Referências sobre animais:</Clarencio>
      <Aga><a href="https://repositorio-aberto.up.pt/bitstream/10216/44939/2/Clia%20Angelina%20da%20Mota%20TavaresTESE.pdf">Centro de hospedagem</a></Aga>
      
      <Clarencio>Referências de inovação:</Clarencio>
      <Aga><a href="https://repositorio-aberto.up.pt/handle/10216/148298#:~:text=Format-,596448.pdf,-150.42%20kB">Políticas de inovação</a></Aga>

    </Allcons>

    <Efinal>

</Efinal>
    
    <Final>

    </Final>

    </Intero>
  ) }
  </div>
  )
}
