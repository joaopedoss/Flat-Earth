import { Allcons, Efinal, NovoBotaoTres, NovoBotaodois, Amem, Cabeca, Intero, Final, ImgHeaderUm, BotaoUm, BotaoDois, Espaco, Espacodois } from "./Guia_de_como_utilizar.js";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import imgtres from '../assets/pagtres.png'
import menu from '../assets/menu.svg'
import fola from '../assets/fola.png'
import MyMenu from '../assets/Mymenu.png'

export function Guia() {

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
      <Espaco>
        <p>Como Utilizar o Terrário Automatizado com Arduino Uno:</p>
      </Espaco>
      <Espacodois>
        <p>1. Ligar o Terrário:</p>
      </Espacodois>

      <li>Certifique-se de que o terrário esteja conectado à energia.</li>
      <li>O Arduino Uno deve estar ligado.</li>
      <Espacodois>
        <p>2. Controle das Funções:</p>
      </Espacodois>
      
      <li>Iluminação Automática:</li>
      <li>Durante o dia, a luz será ativada automaticamente.</li>
      <li>À noite, a luz será desligada.</li>
      <li>Isso ajuda a simular o ciclo natural de luz para as plantas e animais.</li>

      <li>Aquecimento Automático:</li>
      <li>O relé de calor liga a manta térmica para manter a temperatura adequada.</li>
      <li>O Arduino Uno monitora a temperatura e ativa o relé conforme necessário.</li>
      
      <Espacodois>
        <p>3. Controle via Aplicativo:</p>
      </Espacodois>

      <li>Instale um aplicativo para controlar o terrário.</li>
      <li>O aplicativo se comunica com o Arduino Uno via Wi-Fi.</li>
      
      <Espacodois>
        <p>4. Instruções para os Usuários:</p>
      </Espacodois>

      <li>Conecte-se ao terrário via Wi-Fi.</li>
      <li>Use os botões no aplicativo para ativar/desativar as funções conforme necessário.</li>
      <Espacodois>
        <p>5. Manutenção Regular:</p>
      </Espacodois>
      <li>Verifique se todos os componentes estão funcionando corretamente.</li>
      <li>Monitore os níveis de umidade e temperatura.</li>
      <li>Substitua a água da bomba de chuva conforme necessário.</li>
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
      <BotaoUm>
        <img src={fola} alt="" />
      </BotaoUm>
    
      <BotaoDois>
        <img src={MyMenu} alt="" />
      </BotaoDois>
      {/*<button >Página inicial</button>
      <button >Peças Usadas</button>
      <button >Guia de Utilização</button>
      <button >Referências</button>
      <button >Integrantes</button>
    <div>
      <button>Log in</button>
      <button>Sign up</button>
    </div>
    */}
    </header>
    </ImgHeaderUm>
    
    <Allcons>
      <h1>Guia de Como Utilizar </h1>

      <img src={imgtres} alt="" />
      <Espaco>
        <p>Como Utilizar o Terrário Automatizado com Arduino Uno:</p>
      </Espaco>
      <Espacodois>
        <p>1. Ligar o Terrário:</p>
      </Espacodois>

      <li>Certifique-se de que o terrário esteja conectado à energia.</li>
      <li>O Arduino Uno deve estar ligado.</li>
      <Espacodois>
        <p>2. Controle das Funções:</p>
      </Espacodois>
      
      <li>Iluminação Automática:</li>
      <li>Durante o dia, a luz será ativada automaticamente.</li>
      <li>À noite, a luz será desligada.</li>
      <li>Isso ajuda a simular o ciclo natural de luz para as plantas e animais.</li>

      <li>Aquecimento Automático:</li>
      <li>O relé de calor liga a manta térmica para manter a temperatura adequada.</li>
      <li>O Arduino Uno monitora a temperatura e ativa o relé conforme necessário.</li>
      
      <Espacodois>
        <p>3. Controle via Aplicativo:</p>
      </Espacodois>

      <li>Instale um aplicativo para controlar o terrário.</li>
      <li>O aplicativo se comunica com o Arduino Uno via Wi-Fi.</li>
      
      <Espacodois>
        <p>4. Instruções para os Usuários:</p>
      </Espacodois>

      <li>Conecte-se ao terrário via Wi-Fi.</li>
      <li>Use os botões no aplicativo para ativar/desativar as funções conforme necessário.</li>
      <Espacodois>
        <p>5. Manutenção Regular:</p>
      </Espacodois>
      <li>Verifique se todos os componentes estão funcionando corretamente.</li>
      <li>Monitore os níveis de umidade e temperatura.</li>
      <li>Substitua a água da bomba de chuva conforme necessário.</li>
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
