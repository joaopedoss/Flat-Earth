import { Allcons, BotaoDois, Texto, Nicolas, Giovanny, Joao, Santini, Pessoas, NovoBotaodois, Amem, Cabeca, Intero, Final, ImgHeaderUm, Espaco, BotaoUm, Espacodois } from "./Integrantes.styles.js";
import React, { useState, useEffect } from 'react';

import nicolas from '../assets/Nicolas2.png'
import giovanny from "../assets/Giovanny.png"
import santini from "../assets/Santini.png"
import joao from "../assets/Joao.png"
import menu from '../assets/menu.svg'
import fola from '../assets/fola.png'
import MyMenu from '../assets/Mymenu.png'
import bebo from '../assets/Bebado.png'

export function Integrantes() {

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
    <header>
    <NovoBotaodois>



      
        <img src={fola} alt="" />
      
    
      
        <Amem >Flat-Earth</Amem>



        <img src={MyMenu} alt="" />





      </NovoBotaodois>
    </header>
    </Cabeca>
    
    <Allcons>
      <h1>Integrantes</h1>




      <Pessoas>
      <Nicolas>
      <img src={nicolas} alt="" />
      </Nicolas>
      
      <Espaco>
        <p>1. Nicolas Domingues Martins Designer do Projeto (Designer Gráfico/UI/UX):</p>
      
      
      <li>Este integrante é o cérebro por trás da estética do projeto. Ele têm uma visão artística e compreensão profunda de design gráfico e de experiência do usuário (UI/UX). Seu objetivo é criar layouts atraentes, intuitivos e funcionais que proporcionem uma excelente experiência para os usuários do site.</li>
      </Espaco>
      </Pessoas>






      <Pessoas>
        <Giovanny>
      <img src={bebo} alt="" />
      </Giovanny>
      
      <Espaco>
      <Texto>
      <p>2. Giovanny Biguinati Jardim Engenheiro do Projeto Físico (Engenheiro/Arquiteto):</p>
      
      
        <li>Este integrante é responsável por transformar as ideias digitais em realidade física, se necessário. Eles possuem conhecimentos técnicos em engenharia ou arquitetura, dependendo das necessidades do projeto. Seu papel é coordenar a construção física do projeto, garantindo que seja viável, seguro e funcional. Isso pode envolver desde a construção de estruturas físicas até a integração de tecnologias físicas, dependendo da natureza do projeto.</li>
        </Texto>
      </Espaco>
      </Pessoas>











      <Pessoas>
        <Santini>
      <img src={santini} alt="" />
        </Santini>
      
      <Espaco>
        <p>3. Gabriel Santini Martins Divulgador do Projeto (Marketing/Comunicação):</p>
      
      
        <li>Este membro é encarregado de promover o projeto e atrair usuários ou clientes. Eles possuem habilidades em marketing digital, incluindo SEO, mídia social, email marketing, entre outros. Sua função é criar estratégias para aumentar a visibilidade do projeto, gerar engajamento e atrair um público-alvo relevante.</li>
      </Espaco>
      </Pessoas>













      <Pessoas>
      <Joao>
        <img src={joao} alt="" />
      </Joao>
      
      <Espaco>
      <p>4. João Pedro Silveira Santos Desenvolvedor de Código do Site (Programador):</p>
      
      
      <li>Este membro é responsável por transformar as ideias e designs em um site funcional. Eles possuem habilidades sólidas de programação e conhecimento em linguagens como HTML, CSS, JavaScript, e talvez até mesmo frameworks como React ou Angular. Sua função é garantir que o site seja responsivo, rápido e seguro.</li>
      </Espaco>
      </Pessoas>
    </Allcons>
    











    
    <Final>

    </Final>

    </Intero>














  ) : (


    <Intero>
    <ImgHeaderUm>
    <header>
      <BotaoUm>
        <img src={fola} alt="" />
      </BotaoUm>
    
      <BotaoDois>
        <img src={MyMenu} alt="" />
      </BotaoDois>

    </header>
    </ImgHeaderUm>
    
    <Allcons>
      <h1>Integrantes</h1>


      <img src={nicolas} alt="" />


      <Espaco>
        <p>1. Nicolas Domingues Martins Designer do Projeto (Designer Gráfico/UI/UX):</p>
      </Espaco>
      <Espacodois>
        <li>Este integrante é o cérebro por trás da estética do projeto. Ele têm uma visão artística e compreensão profunda de design gráfico e de experiência do usuário (UI/UX). Seu objetivo é criar layouts atraentes, intuitivos e funcionais que proporcionem uma excelente experiência para os usuários do site.</li>
      </Espacodois>


      <img src={bebo} alt="" />

      
      <Espaco>
        <p>2. Giovanny Biguinati Jardim Engenheiro do Projeto Físico (Engenheiro/Arquiteto):</p>
      </Espaco>
      
      <Espacodois>
      <li>Este integrante é responsável por transformar as ideias digitais em realidade física, se necessário. Eles possuem conhecimentos técnicos em engenharia ou arquitetura, dependendo das necessidades do projeto. Seu papel é coordenar a construção física do projeto, garantindo que seja viável, seguro e funcional. Isso pode envolver desde a construção de estruturas físicas até a integração de tecnologias físicas, dependendo da natureza do projeto.</li>
      </Espacodois>


      <img src={santini} alt="" />


      <Espaco>
        <p>3. Gabriel Santini Martins Divulgador do Projeto (Marketing/Comunicação):</p>
      </Espaco>
      
      <Espacodois>
      <li>Este membro é encarregado de promover o projeto e atrair usuários ou clientes. Eles possuem habilidades em marketing digital, incluindo SEO, mídia social, email marketing, entre outros. Sua função é criar estratégias para aumentar a visibilidade do projeto, gerar engajamento e atrair um público-alvo relevante.</li>
      </Espacodois>


      <img src={joao} alt="" />


      <Espaco>
        <p>4. João Pedro Silveira Santos Desenvolvedor de Código do Site (Programador):</p>
      </Espaco>

      <Espacodois>
      <li>Este membro é responsável por transformar as ideias e designs em um site funcional. Eles possuem habilidades sólidas de programação e conhecimento em linguagens como HTML, CSS, JavaScript, e talvez até mesmo frameworks como React ou Angular. Sua função é garantir que o site seja responsivo, rápido e seguro.</li>
      </Espacodois>
    </Allcons>
    
    <Final>

    </Final>

    </Intero>
  )
}
</div>
  )
}
