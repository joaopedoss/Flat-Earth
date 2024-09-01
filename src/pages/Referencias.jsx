import { Allcons, NovoBotaodois, MobileMenu, Efinal, Amem, NovoBotaoTres, Cabeca, Intero, Final, BotaoUm, Indra, Ashura, ImgHeaderUm, Pretumm, Icone, Impofort, BotaoDois } from "./Referencias.styles.js";
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
      <a href="https://www.researchgate.net/publication/336533688_A_FORMACAO_INICIAL_E_CONTINUADA_DE_PROFESSORES_DE_CIENCIAS_NATURAIS_E_A_EXTENSAO_UNIVERSITARIA_DA_FACULDADE_UnB_DE_PLANALTINA">Atividade do PIBID</a>
      <p>O trabalho discute a importância da formação inicial e continuada de professores de Ciências Naturais através de projetos de extensão universitária. Foi relatada a experiência de licenciandos do curso de Ciências Naturais, participantes de um projeto de extensão da UnB de Planaltina, que realizaram experimentos em aulas de Ciências de uma escola pública. A metodologia colaborativa utilizada permitiu a aproximação entre a teoria e a prática docente, beneficiando tanto os licenciandos quanto a professora da escola. O projeto de extensão foi importante para tornar as aulas mais interessantes e melhorar a aprendizagem dos conteúdos de ciências. O estudo reforça a necessidade de uma formação interdisciplinar e reflexiva, integrando ensino, pesquisa e extensão, para o desenvolvimento profissional dos futuros professores.</p>
      <a href="https://www.researc-hgate.net/prof-ile/Maria-Ribeiro-Ferreira/publication/350383387-Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema/links/605cb25392-851cd8ce691f51/Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema.pdf">Terrário como instrumento didático-pedagógico</a>
      <p>Os instrumentos didáticos pedagógico são de extrema importância para o processo de ensino-aprendizagem, nesse aspecto, uma ferramenta didática que pode ser um potencial para tornar as aulas diferenciadas é o terrário, que é um modelo simples de um ecossistema natural que exibe componentes abióticos e bióticos e contribui para deixar o ensino mais dinâmico, criativo, possibilitando aos discentes, através de observações e análises, construírem seu conhecimento. Portanto, a presente pesquisa teve como objetivo verificar a importância do uso de terrários como metodologia alternativa no processo de ensino-aprendizagem com discentes dos anos finais do ensino fundamental. As atividades foram realizadas na escola Unidade Integrada Municipal Professor Arlindo Fernandes de Oliveira, no município de Caxias-MA, onde o público das atividades foram 30 alunos do 9º ano do Ensino Fundamental. A pesquisa foi realizada entre os meses de fevereiro a abril de 2017, onde foram utilizados quatro encontros, cada com 100 minutos de atividades. Os questionários foram analisados através de estatística descritiva com apresentação dos resultados por frequência relativa em gráfico de setores. No decorrer da exposição sobre ecossistemas, 90% dos alunos disseram não conhecer um terrário, em seguida e sobre a importância da conservação dos ecossistemas 80% disseram ser muito importante e todos os participantes consideram o terrário como um bom instrumento metodológico. Assim, conclui-se, que o uso do terrário é uma boa ferramenta para o ensino-aprendizagem de temas ligados ao ecossistema e a construção desse instrumento motivou os participantes o que facilitou a interação entre eles e os mediadores da atividade.</p>
      <a href="https://repositorio-aberto.up.pt/bitstream/10216/44939/2/Clia%20Angelina%20da%20Mota%20TavaresTESE.pdf">Centro de hospedagem de animais exóticos de estimação</a>
      <p>A indústria relacionada com os animais de estimação tem evidenciado potencial económico já percebido por várias empresas, que adaptaram os seus produtos e/ou serviços para atingir este mercado. Com efeito, muitos donos de animais de estimação consideram o seu animal um membro da família. Assim, proporcionam-lhe todo o conforto ao alcance das suas capacidades financeiras, desde os gastos em cuidados básicos e acessórios, a cuidados de saúde e bens exclusivos. O projecto CHAE tem como objectivo ser um centro de excelência, garantindo serviços de hospedagem e cuidados básicos a animais exóticos de estimação e prestando formação especializada sobre os cuidados necessários e ecologia desses mesmo animais. Efectivamente é com os animais exóticos de estimação, que se encontra um nicho de mercado ainda com potencial de exploração de negócios.</p>
      <a href="https://repositorio-aberto.up.pt/handle/10216/148298#:~:text=Format-,596448.pdf,-150.42%20kB">Políticas de inovação, gestão da água e sistemas agroalimentares</a>
      <p>O terrário automático é ideal para criadores de animais exóticos, entusiastas de jardinagem, e instituições educacionais que desejam oferecer um ambiente controlado para o estudo de ecossistemas fechados. Em projetos de educação, ele pode servir como uma ferramenta prática para ensinar conceitos de biologia, ecologia e tecnologia. No entanto, é importante considerar a complexidade do projeto e a necessidade de manutenção ocasional dos sistemas automáticos. A instalação e a programação adequadas são cruciais para garantir que o sistema funcione corretamente e que os seres vivos no terrário prosperem.</p>

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
      <a href="https://www.researchgate.net/publication/336533688_A_FORMACAO_INICIAL_E_CONTINUADA_DE_PROFESSORES_DE_CIENCIAS_NATURAIS_E_A_EXTENSAO_UNIVERSITARIA_DA_FACULDADE_UnB_DE_PLANALTINA">Atividade do PIBID</a>
      <p>O trabalho discute a importância da formação inicial e continuada de professores de Ciências Naturais através de projetos de extensão universitária. Foi relatada a experiência de licenciandos do curso de Ciências Naturais, participantes de um projeto de extensão da UnB de Planaltina, que realizaram experimentos em aulas de Ciências de uma escola pública. A metodologia colaborativa utilizada permitiu a aproximação entre a teoria e a prática docente, beneficiando tanto os licenciandos quanto a professora da escola. O projeto de extensão foi importante para tornar as aulas mais interessantes e melhorar a aprendizagem dos conteúdos de ciências. O estudo reforça a necessidade de uma formação interdisciplinar e reflexiva, integrando ensino, pesquisa e extensão, para o desenvolvimento profissional dos futuros professores.</p>
      <a href="https://www.researc-hgate.net/prof-ile/Maria-Ribeiro-Ferreira/publication/350383387-Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema/links/605cb25392-851cd8ce691f51/Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema.pdf">Terrário didático</a>
      <p>Os instrumentos didáticos pedagógico são de extrema importância para o processo de ensino-aprendizagem, nesse aspecto, uma ferramenta didática que pode ser um potencial para tornar as aulas diferenciadas é o terrário, que é um modelo simples de um ecossistema natural que exibe componentes abióticos e bióticos e contribui para deixar o ensino mais dinâmico, criativo, possibilitando aos discentes, através de observações e análises, construírem seu conhecimento. Portanto, a presente pesquisa teve como objetivo verificar a importância do uso de terrários como metodologia alternativa no processo de ensino-aprendizagem com discentes dos anos finais do ensino fundamental. As atividades foram realizadas na escola Unidade Integrada Municipal Professor Arlindo Fernandes de Oliveira, no município de Caxias-MA, onde o público das atividades foram 30 alunos do 9º ano do Ensino Fundamental. A pesquisa foi realizada entre os meses de fevereiro a abril de 2017, onde foram utilizados quatro encontros, cada com 100 minutos de atividades. Os questionários foram analisados através de estatística descritiva com apresentação dos resultados por frequência relativa em gráfico de setores. No decorrer da exposição sobre ecossistemas, 90% dos alunos disseram não conhecer um terrário, em seguida e sobre a importância da conservação dos ecossistemas 80% disseram ser muito importante e todos os participantes consideram o terrário como um bom instrumento metodológico. Assim, conclui-se, que o uso do terrário é uma boa ferramenta para o ensino-aprendizagem de temas ligados ao ecossistema e a construção desse instrumento motivou os participantes o que facilitou a interação entre eles e os mediadores da atividade.</p>
      <a href="https://repositorio-aberto.up.pt/bitstream/10216/44939/2/Clia%20Angelina%20da%20Mota%20TavaresTESE.pdf">Animais exóticos</a>
      <p>A indústria relacionada com os animais de estimação tem evidenciado potencial económico já percebido por várias empresas, que adaptaram os seus produtos e/ou serviços para atingir este mercado. Com efeito, muitos donos de animais de estimação consideram o seu animal um membro da família. Assim, proporcionam-lhe todo o conforto ao alcance das suas capacidades financeiras, desde os gastos em cuidados básicos e acessórios, a cuidados de saúde e bens exclusivos. O projecto CHAE tem como objectivo ser um centro de excelência, garantindo serviços de hospedagem e cuidados básicos a animais exóticos de estimação e prestando formação especializada sobre os cuidados necessários e ecologia desses mesmo animais. Efectivamente é com os animais exóticos de estimação, que se encontra um nicho de mercado ainda com potencial de exploração de negócios.</p>
      <a href="https://repositorio-aberto.up.pt/handle/10216/148298#:~:text=Format-,596448.pdf,-150.42%20kB">Políticas de inovação</a>
      <p>O trabalho discute a importância da formação inicial e continuada de professores de Ciências Naturais através de projetos de extensão universitária. Foi relatada a experiência de licenciandos do curso de Ciências Naturais, participantes de um projeto de extensão da UnB de Planaltina, que realizaram experimentos em aulas de Ciências de uma escola pública. A metodologia colaborativa utilizada permitiu a aproximação entre a teoria e a prática docente, beneficiando tanto os licenciandos quanto a professora da escola. O projeto de extensão foi importante para tornar as aulas mais interessantes e melhorar a aprendizagem dos conteúdos de ciências. O estudo reforça a necessidade de uma formação interdisciplinar e reflexiva, integrando ensino, pesquisa e extensão, para o desenvolvimento profissional dos futuros professores.</p>
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
