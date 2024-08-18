import { Allcons, NovoBotaodois, Efinal, Amem, Botaooumm, Botaoodoiss, Cabeca, Intero, Final, ImgHeaderUm, BotaoUm, BotaoDois } from "./Referencias.styles.js";
import React, { useState, useEffect } from 'react';

import imgdois from '../assets/pagdois.png'
import menu from '../assets/menu.svg'
import fola from '../assets/fola.png'
import MyMenu from '../assets/Mymenu.png'

export function Referencias() {
  
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
      
      <img src={imgdois} alt="" />
      <h1>Referências</h1>
      <p>https://www.researchgate.-net/pro-file/Andre-Silva-Sene/publication/288323462-O-DESENVOLVIMENTO-DO-PROJETO_TERRARIO-NA-FORMACAO-INICIAL-DE-PROFESSORES-DECIENCIAS-e-BIOLOGIA-CONSIDERACOES-SOBRE-A-ATIVIDADE-DO-PIBID/link-s/5c9b6ee3a6fdccd4603e2-0c7/O-DESENVOLVIMENTO-DO-PROJETO-TERRARIO-NA-FORMACAO-INICIAL-DE-PROFESSORES-DE-CIENCIAS-e-BIOLOGIA-CONSIDERACOES-SOBRE-A-ATIVIDADE-DO-PIBID.pdf</p>
      <p>https://www.researc-hgate.net/prof-ile/Maria-Ribeiro-Ferreira/publication/350383387-Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema/links/605cb25392-851cd8ce691f51/Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema.pdf</p>
      <p>https://repositorio-aberto.up.pt/bitstream/10216/76-761/2/32860.pdf</p>
      <p>https://revistapos.cruzeirodosul.e-du.br/rencima/article/view/2949</p>
      <p>https://sites.unipampa.edu.br/pi-bid2014/files/2013/10/cn-pb-ixenpec-texto.pdf</p>
      <p>https://journals.biologists.com/je-b/a-rticle/209/18/3558/16105/Effe-ctive-elastic-modulus-of-isolated-gecko-setal</p>
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
      
      <img src={imgdois} alt="" />
      <h1>Referências</h1>
      <p>https://www.researchgate.-net/pro-file/Andre-Silva-Sene/publication/288323462-O-DESENVOLVIMENTO-DO-PROJETO_TERRARIO-NA-FORMACAO-INICIAL-DE-PROFESSORES-DECIENCIAS-e-BIOLOGIA-CONSIDERACOES-SOBRE-A-ATIVIDADE-DO-PIBID/link-s/5c9b6ee3a6fdccd4603e2-0c7/O-DESENVOLVIMENTO-DO-PROJETO-TERRARIO-NA-FORMACAO-INICIAL-DE-PROFESSORES-DE-CIENCIAS-e-BIOLOGIA-CONSIDERACOES-SOBRE-A-ATIVIDADE-DO-PIBID.pdf</p>
      <p>https://www.researc-hgate.net/prof-ile/Maria-Ribeiro-Ferreira/publication/350383387-Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema/links/605cb25392-851cd8ce691f51/Terrario-como-instrumento-didatico-pedagogico-para-o-ensino-sobre-ecossistema.pdf</p>
      <p>https://repositorio-aberto.up.pt/bitstream/10216/76-761/2/32860.pdf</p>
      <p>https://revistapos.cruzeirodosul.e-du.br/rencima/article/view/2949</p>
      <p>https://sites.unipampa.edu.br/pi-bid2014/files/2013/10/cn-pb-ixenpec-texto.pdf</p>
      <p>https://journals.biologists.com/je-b/a-rticle/209/18/3558/16105/Effe-ctive-elastic-modulus-of-isolated-gecko-setal</p>
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
