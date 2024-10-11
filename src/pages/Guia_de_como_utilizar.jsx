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
          <Amem> <Link to="/Guia">Guia</Link></Amem>
          <Amem> <Link to="/Pecas">Peças</Link></Amem>
          <Amem> <Link to="/Integrantes">Integrantes</Link></Amem>
          <Amem> <Link to="/Referencias">Referências</Link></Amem>
        </NovoBotaoTres>
        </NovoBotaodois>





      
    </Cabeca>
    
    <Allcons>
      
      
      <img src={imgtres} alt="" />
      <h1>Guia de Como Utilizar </h1>

      <Espacodois>
        <p>Para utilizar o terrário automatizado com Arduino Uno, o primeiro passo é garantir que o terrário esteja conectado à energia e que o Arduino esteja ligado corretamente. O controle das funções ocorre automaticamente. Durante o dia, a iluminação é ativada de forma automática, simulando a luz solar natural. À noite, a luz é desligada, criando um ciclo de luz adequado para as plantas e os animais. O aquecimento também é controlado automaticamente, com o relé de calor ativando a manta térmica para manter a temperatura ideal. O Arduino Uno monitora a temperatura constantemente, acionando o aquecimento sempre que necessário.</p>
      </Espacodois>

      <Espacodois>
        <p>O terrário pode ser controlado por um aplicativo que se comunica com o Arduino Uno via conexão Bluetooth. Através do aplicativo, o usuário pode ajustar as funções remotamente, ativando ou desativando conforme necessário. Para utilizar essa funcionalidade, basta se conectar ao terrário via Bluetooth e usar o aplicativo para gerenciar as condições internas.</p>
      </Espacodois>
      
      
      <Espacodois>
        <p>A manutenção regular é essencial para o bom funcionamento do terrário. É importante verificar se todos os componentes estão operando corretamente, monitorar os níveis de umidade e temperatura e substituir a água da bomba de chuva sempre que necessário, garantindo o funcionamento contínuo e eficiente do sistema.</p>
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
      
      
      <img src={imgtres} alt="" />
      <h1>Guia de Como Utilizar </h1>

      <Espacodois>
        <p>Para utilizar o terrário automatizado com Arduino Uno, o primeiro passo é garantir que o terrário esteja conectado à energia e que o Arduino esteja ligado corretamente. O controle das funções ocorre automaticamente. Durante o dia, a iluminação é ativada de forma automática, simulando a luz solar natural. À noite, a luz é desligada, criando um ciclo de luz adequado para as plantas e os animais. O aquecimento também é controlado automaticamente, com o relé de calor ativando a manta térmica para manter a temperatura ideal. O Arduino Uno monitora a temperatura constantemente, acionando o aquecimento sempre que necessário.</p>
      </Espacodois>

      <Espacodois>
        <p>O terrário pode ser controlado por um aplicativo que se comunica com o Arduino Uno via conexão Bluetooth. Através do aplicativo, o usuário pode ajustar as funções remotamente, ativando ou desativando conforme necessário. Para utilizar essa funcionalidade, basta se conectar ao terrário via Bluetooth e usar o aplicativo para gerenciar as condições internas.</p>
      </Espacodois>
      
      
      <Espacodois>
        <p>A manutenção regular é essencial para o bom funcionamento do terrário. É importante verificar se todos os componentes estão operando corretamente, monitorar os níveis de umidade e temperatura e substituir a água da bomba de chuva sempre que necessário, garantindo o funcionamento contínuo e eficiente do sistema.</p>
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
