import { Allcons, NovoBotaoTres, NovoBotaodois, Amem, Cabeca, Intero, Final, ImgHeaderUm, BotaoUm, BotaoDois } from "./Inicio.styles.js";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import imgum from '../assets/Pagumm.png'
import fola from '../assets/fola.png'
import MyMenu from '../assets/Mymenu.png'

export function Inicio() {

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
      
      <img src={imgum} alt="" />
      <h1>Flat-Earth</h1>
      <p>Um projeto de terrário de répteis de baixo porte apresenta uma abordagem inovadora e educativa para o envolvimento com a natureza. Similar com iniciativas como a Cinoterapia e o Terrário-Macaquices, nosso projeto oferece uma oportunidade única de interação terapêutica e educacional, contribuindo para uma compreensão mais profunda dos ecossistemas e incentivando a conservação ambiental. A participação ativa na montagem e manutenção do terrário não apenas despertam o interesse e a curiosidade dos envolvidos, mas também promove o desenvolvimento de habilidades práticas e cognitivas essenciais.</p>
      <p>A construção e a observação do terrário proporcionam uma experiência prática e imersiva, simulando um ecossistema natural de maneira controlada. Essa vivência tangível facilita o entendimento de conceitos ecológicos, ao mesmo tempo em que promove o desenvolvimento de competências de observação, investigação e responsabilidade. Além disso, ao criar um ambiente seguro para interação com os répteis, o projeto estimula a conexão emocional com a vida selvagem e instiga uma apreciação mais profunda pela biodiversidade.</p>
      <p>A interação direta com os répteis dentro de um terrário não apenas fascina os participantes, mas também oferece uma oportunidade para aprender sobre suas características e necessidades. Observar o comportamento dos animais e contribuir para seu bem-estar promove uma conexão mais significativa com a natureza e desperta uma consciência sobre a importância da preservação dos ecossistemas. Assim, o projeto de um terrário de répteis não apenas melhora o aprendizado, mas também promove valores de conservação e respeito pelo meio ambiente.</p>
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
        
        <img src={imgum} alt="" />
        <h1>Flat-Earth</h1>
        <p>Um projeto de terrário de répteis de baixo porte apresenta uma abordagem inovadora e educativa para o envolvimento com a natureza. Similar com iniciativas como a Cinoterapia e o Terrário-Macaquices, nosso projeto oferece uma oportunidade única de interação terapêutica e educacional, contribuindo para uma compreensão mais profunda dos ecossistemas e incentivando a conservação ambiental. A participação ativa na montagem e manutenção do terrário não apenas despertam o interesse e a curiosidade dos envolvidos, mas também promove o desenvolvimento de habilidades práticas e cognitivas essenciais.</p>
        <p>A construção e a observação do terrário proporcionam uma experiência prática e imersiva, simulando um ecossistema natural de maneira controlada. Essa vivência tangível facilita o entendimento de conceitos ecológicos, ao mesmo tempo em que promove o desenvolvimento de competências de observação, investigação e responsabilidade. Além disso, ao criar um ambiente seguro para interação com os répteis, o projeto estimula a conexão emocional com a vida selvagem e instiga uma apreciação mais profunda pela biodiversidade.</p>
        <p>A interação direta com os répteis dentro de um terrário não apenas fascina os participantes, mas também oferece uma oportunidade para aprender sobre suas características e necessidades. Observar o comportamento dos animais e contribuir para seu bem-estar promove uma conexão mais significativa com a natureza e desperta uma consciência sobre a importância da preservação dos ecossistemas. Assim, o projeto de um terrário de répteis não apenas melhora o aprendizado, mas também promove valores de conservação e respeito pelo meio ambiente.</p>
      </Allcons>
      
      <Final>
  
      </Final>
  
      </Intero>      
    )
  }
  </div>
  
  )
}
