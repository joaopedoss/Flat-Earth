import { Allcons, Pekinhas, Fiodofio, NovoBotaodois, Amem, NovoBotaoTres, Cabeca, Intero, Final, ImgHeaderUm, BotaoUm, BotaoDois } from "./Pecas_usadas.style.js";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import placa from '../assets/placa.png'
import servo from '../assets/servo.png'
import utrassonico from '../assets/utrassonico.png'
import led from '../assets/led.png'
import micromicro from '../assets/micromicro.jpeg'
import modulorele from '../assets/modulorele.jpg'
import modulowifi from '../assets/modulowifi.jpg'
import umidade from '../assets/umidade.jpg'
import temperatura from '../assets/temperatura.jpeg'
import dht22 from '../assets/dht22-1.jpg'
import resistores from '../assets/resistores.png'
import fios from '../assets/fios.png'
import MyMenu from '../assets/Mymenu.png'

import menu from '../assets/menu.svg'
import fola from '../assets/fola.png'

export function Pecas() {

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

      <h1>Peças Usadas</h1>

      <Pekinhas>
        <img src={placa} alt="Arduino Uno" />
        <Fiodofio>
        <h2>Arduino Uno</h2>
        <p>As placas-mãe Arduino são o coração de muitos projetos eletrônicos. Elas são compactas, fáceis de usar e podem ser programadas para controlar uma variedade de dispositivos. Com uma vasta comunidade de desenvolvedores e recursos disponíveis, as placas Arduino são uma escolha popular para iniciantes e profissionais que desejam criar protótipos e projetos DIY.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={servo} alt="Servo" />
        <Fiodofio>
          <h2>Servo</h2>
          <p>O servo motor do Arduino é um dispositivo usado para controlar o movimento de objetos com precisão. Ele consiste em um motor, engrenagens e um circuito interno. Com o Arduino, podemos enviar sinais PWM para controlar o ângulo de rotação do servo. Isso é útil em uma variedade de projetos, desde robôs até sistemas de automação.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={utrassonico} alt="Sensor ultrassônico" />
        <Fiodofio>
          <h2>Sensor ultrassônico</h2>
          <p>O sensor ultrassônico do Arduino é um dispositivo usado para medir distâncias por meio de ondas sonoras. Ele emite pulsos sonoros e calcula a distância com base no tempo que leva para os ecos retornarem. É útil em projetos de detecção de objetos, sistemas de segurança e robótica, fornecendo uma maneira eficaz de medir distâncias com precisão.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={led} alt="Led" />
        <Fiodofio>
          <h2>Led</h2>
          <p>O LED do Arduino UNO é um pequeno diodo emissor de luz integrado à placa, conectado ao pino digital 13. Ele é identificado pela letra L próxima a esse pino. Este LED é uma ferramenta prática para testes e depuração de projetos sem a necessidade de componentes externos adicionais.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={micromicro} alt="Micro Chave" />
        <Fiodofio>
          <h2>Micro Chave</h2>
          <p>O módulo de chave SS12D00G4 é uma chave deslizante usada em circuitos elétricos para abrir ou fechar conexões, normalmente com 2 posições (on-off ou on-on). É comumente encontrada em dispositivos eletrônicos de baixa corrente e tensão, como brinquedos e pequenos eletrodomésticos, sendo montada em placas de circuito impresso (PCB).</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={modulorele} alt="Modulo Relé Dulpo" />
        <Fiodofio>
          <h2>Módulo Relé Duplo</h2>
          <p>O Módulo Relé Duplo é um dispositivo eletrônico usado para controlar dois circuitos de alta potência ou tensão a partir de sinais de baixa potência, como os gerados por um microcontrolador. Cada relé no módulo pode ser ativado ou desativado independentemente, permitindo o controle de dois dispositivos ou cargas diferentes. É comum em projetos de automação, como controle de lâmpadas, motores, e outros aparelhos elétricos. O módulo é frequentemente utilizado em sistemas que requerem isolamento elétrico entre o circuito de controle e a carga.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={modulowifi} alt="Módulo de Wifi" />
        <Fiodofio>
          <h2>Módulo de Wifi</h2>
          <p>O Módulo de Wi-Fi é um dispositivo que permite a conexão de equipamentos eletrônicos à rede sem fio (Wi-Fi), permitindo a comunicação e controle remoto via internet. Esses módulos são amplamente usados em projetos de Internet das Coisas (IoT), como em sistemas de automação residencial, dispositivos inteligentes, e aplicações de monitoramento. Eles geralmente se conectam a microcontroladores ou microprocessadores e permitem que os dispositivos troquem dados ou sejam controlados remotamente através de redes Wi-Fi, facilitando a integração de dispositivos comuns ao ambiente digital.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>    
        <img src={umidade} alt="Sensor de Umidade" />
        <Fiodofio>
          <h2>Sensor de Umidade</h2>
          <p>O Sensor de Umidade é um dispositivo usado para medir a quantidade de umidade presente no ar ou em materiais. Esse sensor é amplamente utilizado em aplicações como sistemas de controle de clima, monitoramento ambiental, e agricultura, onde é importante saber o nível de umidade para garantir condições ideais. Ele funciona convertendo a umidade em um sinal elétrico que pode ser interpretado por um microcontrolador ou outro dispositivo eletrônico, permitindo ações automatizadas baseadas nos níveis de umidade detectados.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={temperatura} alt="Sensor de Temperatura" />
        <Fiodofio>
          <h2>Sensor de Temperatura</h2>
          <p>O Sensor de Temperatura é um dispositivo utilizado para medir a temperatura de um ambiente ou objeto. Ele converte a temperatura em um sinal elétrico que pode ser lido por microcontroladores ou sistemas eletrônicos, permitindo a monitoração e controle de processos que dependem de variações térmicas. Esses sensores são comuns em sistemas de climatização, dispositivos eletrônicos, eletrodomésticos, e em aplicações industriais, onde o controle preciso da temperatura é essencial para o funcionamento seguro e eficiente dos equipamentos.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={dht22} alt="DHT22" />
        <Fiodofio>
          <h2>Sensor DHT22</h2>
          <p>O Sensor DHT22 é um dispositivo que mede tanto a temperatura quanto a umidade do ambiente, oferecendo alta precisão e confiabilidade. Ele é amplamente utilizado em projetos de monitoramento ambiental, automação residencial, e sistemas de controle climático. O DHT22 converte as medições de temperatura e umidade em sinais digitais que podem ser facilmente lidos por microcontroladores, permitindo uma integração simples com sistemas eletrônicos. É conhecido por sua faixa ampla de medição e precisão superior em comparação com sensores similares.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={resistores} alt="Resistor" />
        <Fiodofio>
          <h2>Resistor</h2>
          <p>Um resistor é um componente eletrônico passivo fundamental em circuitos elétricos, cuja principal função é limitar ou regular o fluxo de corrente elétrica. Ele faz isso oferecendo uma resistência ao movimento dos elétrons, dissipando energia na forma de calor. Resistores são usados em quase todos os tipos de dispositivos eletrônicos, desempenhando papéis cruciais em controlar tensões, proteger componentes e ajustar níveis de sinal.</p>
        </Fiodofio>
      </Pekinhas>




      <Pekinhas>
        <img src={fios} alt="Jumpers e Fios" />
        <Fiodofio>
          <h2>Jumpers e Fios</h2>
          <p>Os jumpers são fios condutores com conectores em ambas as extremidades. Eles desempenham um papel fundamental na montagem de circuitos eletrônicos e sistemas temporários. Aqui estão os principais pontos:</p>
        </Fiodofio>
      </Pekinhas>

            

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
      <h1>Peças Usadas</h1>
      <img src={placa} alt="Arduino Uno" />
      <h2>Arduino Uno</h2>
      <p>As placas-mãe Arduino são o coração de muitos projetos eletrônicos. Elas são compactas, fáceis de usar e podem ser programadas para controlar uma variedade de dispositivos. Com uma vasta comunidade de desenvolvedores e recursos disponíveis, as placas Arduino são uma escolha popular para iniciantes e profissionais que desejam criar protótipos e projetos DIY.</p>
      
      <img src={servo} alt="Servo" />
      <h2>Servo</h2>
      <p>O servo motor do Arduino é um dispositivo usado para controlar o movimento de objetos com precisão. Ele consiste em um motor, engrenagens e um circuito interno. Com o Arduino, podemos enviar sinais PWM para controlar o ângulo de rotação do servo. Isso é útil em uma variedade de projetos, desde robôs até sistemas de automação.</p>
      
      <img src={utrassonico} alt="Sensor ultrassônico" />
      <h2>Sensor ultrassônico</h2>
      <p>O sensor ultrassônico do Arduino é um dispositivo usado para medir distâncias por meio de ondas sonoras. Ele emite pulsos sonoros e calcula a distância com base no tempo que leva para os ecos retornarem. É útil em projetos de detecção de objetos, sistemas de segurança e robótica, fornecendo uma maneira eficaz de medir distâncias com precisão.</p>
      
      <img src={led} alt="Led" />
      <h2>Led</h2>
      <p>O LED do Arduino UNO é um pequeno diodo emissor de luz integrado à placa, conectado ao pino digital 13. Ele é identificado pela letra L próxima a esse pino. Este LED é uma ferramenta prática para testes e depuração de projetos sem a necessidade de componentes externos adicionais.</p>
      
      <img src={micromicro} alt="Micro Chave" />
      <h2>Micro Chave</h2>
      <p>O módulo de chave SS12D00G4 é uma chave deslizante usada em circuitos elétricos para abrir ou fechar conexões, normalmente com 2 posições (on-off ou on-on). É comumente encontrada em dispositivos eletrônicos de baixa corrente e tensão, como brinquedos e pequenos eletrodomésticos, sendo montada em placas de circuito impresso (PCB).</p>
      
      <img src={modulorele} alt="Modulo Relé Dulpo" />
      <h2>Módulo Relé Duplo</h2>
      <p>O Módulo Relé Duplo é um dispositivo eletrônico usado para controlar dois circuitos de alta potência ou tensão a partir de sinais de baixa potência, como os gerados por um microcontrolador. Cada relé no módulo pode ser ativado ou desativado independentemente, permitindo o controle de dois dispositivos ou cargas diferentes. É comum em projetos de automação, como controle de lâmpadas, motores, e outros aparelhos elétricos. O módulo é frequentemente utilizado em sistemas que requerem isolamento elétrico entre o circuito de controle e a carga.</p>
      
      <img src={modulowifi} alt="Módulo de Wifi" />
      <h2>Módulo de Wifi</h2>
      <p>O Módulo de Wi-Fi é um dispositivo que permite a conexão de equipamentos eletrônicos à rede sem fio (Wi-Fi), permitindo a comunicação e controle remoto via internet. Esses módulos são amplamente usados em projetos de Internet das Coisas (IoT), como em sistemas de automação residencial, dispositivos inteligentes, e aplicações de monitoramento. Eles geralmente se conectam a microcontroladores ou microprocessadores e permitem que os dispositivos troquem dados ou sejam controlados remotamente através de redes Wi-Fi, facilitando a integração de dispositivos comuns ao ambiente digital.</p>
      
      <img src={umidade} alt="Sensor de Umidade" />
      <h2>Sensor de Umidade</h2>
      <p>O Sensor de Umidade é um dispositivo usado para medir a quantidade de umidade presente no ar ou em materiais. Esse sensor é amplamente utilizado em aplicações como sistemas de controle de clima, monitoramento ambiental, e agricultura, onde é importante saber o nível de umidade para garantir condições ideais. Ele funciona convertendo a umidade em um sinal elétrico que pode ser interpretado por um microcontrolador ou outro dispositivo eletrônico, permitindo ações automatizadas baseadas nos níveis de umidade detectados.</p>
      
      <img src={temperatura} alt="Sensor de Temperatura" />
      <h2>Sensor de Temperatura</h2>
      <p>O Sensor de Temperatura é um dispositivo utilizado para medir a temperatura de um ambiente ou objeto. Ele converte a temperatura em um sinal elétrico que pode ser lido por microcontroladores ou sistemas eletrônicos, permitindo a monitoração e controle de processos que dependem de variações térmicas. Esses sensores são comuns em sistemas de climatização, dispositivos eletrônicos, eletrodomésticos, e em aplicações industriais, onde o controle preciso da temperatura é essencial para o funcionamento seguro e eficiente dos equipamentos.</p>
      
      <img src={dht22} alt="DHT22" />
      <h2>Sensor DHT22</h2>
      <p>O Sensor DHT22 é um dispositivo que mede tanto a temperatura quanto a umidade do ambiente, oferecendo alta precisão e confiabilidade. Ele é amplamente utilizado em projetos de monitoramento ambiental, automação residencial, e sistemas de controle climático. O DHT22 converte as medições de temperatura e umidade em sinais digitais que podem ser facilmente lidos por microcontroladores, permitindo uma integração simples com sistemas eletrônicos. É conhecido por sua faixa ampla de medição e precisão superior em comparação com sensores similares.</p>
      
      <img src={resistores} alt="Resistor" />
      <h2>Resistor</h2>
      <p>Um resistor é um componente eletrônico passivo fundamental em circuitos elétricos, cuja principal função é limitar ou regular o fluxo de corrente elétrica. Ele faz isso oferecendo uma resistência ao movimento dos elétrons, dissipando energia na forma de calor. Resistores são usados em quase todos os tipos de dispositivos eletrônicos, desempenhando papéis cruciais em controlar tensões, proteger componentes e ajustar níveis de sinal.</p>
      
      <img src={fios} alt="Jumpers e Fios" />
      <h2>Jumpers e Fios</h2>
      <p>Os jumpers são fios condutores com conectores em ambas as extremidades. Eles desempenham um papel fundamental na montagem de circuitos eletrônicos e sistemas temporários. Aqui estão os principais pontos:</p>
      

    </Allcons>
    
    <Final>

    </Final>

    </Intero>
  )
}
</div>
  )
}
