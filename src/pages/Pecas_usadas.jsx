import { Allcons, Aaum, Aadois, Aatres, Pekinhas, Fiodofio, Batres, Badois, Baum, Caum, Cadois, Catres, Praaa, Flra, NovoBotaodois, Amem, NovoBotaoTres, Cabeca, Impofort, Icone, Indra, Ashura, Pretumm, MobileMenu, Intero, Final, ImgHeaderUm, BotaoUm, BotaoDois, Rato } from "./Pecas_usadas.style.js";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import placa from '../assets/placa.png'
import servo from '../assets/servo.png'
import utrassonico from '../assets/ultrassonico.png'
import led from '../assets/led.png'
import micromicro from '../assets/micromicro.png'
import modulorele from '../assets/modulorele.png'
import modulowifi from '../assets/modulowifi.png'
import umidade from '../assets/umidade.png'
import temperatura from '../assets/temperatura.png'
import dht22 from '../assets/dht22-1.png'
import resistores from '../assets/resistores.png'
import fios from '../assets/fios.png'
import MyMenu from '../assets/Mymenu.png'

import menu from '../assets/menu.svg'
import fola from '../assets/fola.png'

export function Pecas() {
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
          <Amem> <Link to="/Jogo">Jogo</Link></Amem>
        </NovoBotaoTres>
        </NovoBotaodois>





      
    </Cabeca>
    
    <Allcons>

      <h1>Peças Usadas</h1>


      <Rato>
      <Pekinhas>
       <img src={placa} alt="Arduino Uno" />
        <img src={servo} alt="Servo" />
        <img src={utrassonico} alt="Sensor ultrassônico" />
      </Pekinhas>


        <Fiodofio>
        <a href="https://docs.arduino.cc/hardware/uno-rev3/"><Aaum>Arduino Uno</Aaum></a>
        <a href="https://docs.arduino.cc/learn/electronics/servo-motors/"><Aadois>Servo Motor</Aadois></a>
        <a href="https://www.makerhero.com/blog/sensor-ultrassonico-hc-sr04-ao-arduino/"><Aatres>Sen. Ultrassônico</Aatres></a>
        </Fiodofio>
      





        <Pekinhas>
        <img src={micromicro} alt="Bomba D'água" />
        <img src={modulorele} alt="Modulo Relé Dulpo" />
        <img src={modulowifi} alt="Módulo de Bluetooth" />
      </Pekinhas>


        <Flra>
        <a href="https://blog.zerokol.com/2013/03/bomba-dagua-com-arduino.html"><Baum>Bomba D'água</Baum></a>
        <a href="https://blogmasterwalkershop.com.br/arduino/como-usar-com-arduino-modulo-rele-5v-de-2-canais"><Badois>Relé Duplo</Badois></a>
        <a href="https://blogmasterwalkershop.com.br/arduino/como-usar-com-arduino-modulo-bluetooth-hc-05-hc-06"><Batres>Módulo Bluetooth</Batres></a>
        </Flra>
      





      
        <Pekinhas>
        <img src={umidade} alt="Sensor de Umidade" />
        <img src={temperatura} alt="Sensor de Temperatura" />
        <img src={dht22} alt="DHT22" />
      </Pekinhas>


        <Praaa>
        <a href="https://blog.eletrogate.com/guia-do-sensor-de-umidade-do-solo-e-sensor-de-chuva/"><Caum>Sensor de Umid.</Caum></a>
        <a href="https://blog.eletrogate.com/guia-completo-sobre-sensor-de-temperatura-ds18b20-a-prova-dagua/"><Cadois>Sensor de Temp.</Cadois></a>
        <a href="https://blogmasterwalkershop.com.br/arduino/como-usar-com-arduino-sensor-de-umidade-e-temperatura-dht22-am2302"><Catres>Sensor DHT22</Catres></a>
        </Praaa>
        </Rato>

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
          <li><Link to="/Guia">Guia</Link></li>
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
      <h1>Peças Usadas</h1>
      <img src={placa} alt="Arduino Uno" />
      <a href="https://docs.arduino.cc/hardware/uno-rev3/"><h2>Arduino Uno</h2></a>



      <img src={servo} alt="Servo" />
      <a href="https://docs.arduino.cc/learn/electronics/servo-motors/"><h2>Servo Motor</h2></a>



      <img src={utrassonico} alt="Sensor ultrassônico" />
      <a href="https://www.makerhero.com/blog/sensor-ultrassonico-hc-sr04-ao-arduino/"><h2>Sen. Ultrassônico</h2></a>
 
 

      <img src={micromicro} alt="Bomba D'água" />
      <a href="https://blog.zerokol.com/2013/03/bomba-dagua-com-arduino.html"><h2>Bomba D'água</h2></a>
 


      <img src={modulorele} alt="Modulo Relé Dulpo" />
      <a href="https://blogmasterwalkershop.com.br/arduino/como-usar-com-arduino-modulo-rele-5v-de-2-canais"><h2>Relé Duplo</h2></a>
 


      <img src={modulowifi} alt="Módulo de Wifi" />
      <a href="https://blogmasterwalkershop.com.br/arduino/como-usar-com-arduino-modulo-bluetooth-hc-05-hc-06"><h2>Módulo de Bluetooth</h2></a>
      


      <img src={umidade} alt="Sensor de Umidade" />
      <a href="https://blog.eletrogate.com/guia-do-sensor-de-umidade-do-solo-e-sensor-de-chuva/"><h2>Sensor de Umid.</h2></a>
  


      <img src={temperatura} alt="Sensor de Temperatura" />
      <a href="https://blog.eletrogate.com/guia-completo-sobre-sensor-de-temperatura-ds18b20-a-prova-dagua/"><h2>Sensor de Temp.</h2></a>
      

      
      <img src={dht22} alt="DHT22" />
      <a href="https://blogmasterwalkershop.com.br/arduino/como-usar-com-arduino-sensor-de-umidade-e-temperatura-dht22-am2302"><h2>Sensor DHT22</h2></a>
      
   

    </Allcons>
    
    <Final>

    </Final>

    </Intero>
  )
}
</div>
  )
}
