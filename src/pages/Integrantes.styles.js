import styled from "styled-components"

export const Allcons = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-items: center;
    padding-top: 2rem;
 

    padding-bottom: 2rem;


    p {
        @media (min-width: 1023px) {
            margin-left: 8%;
        }
        
    }
    img {

        margin-bottom: 2rem;


        @media (min-width: 1023px) {
            margin-bottom: 2rem;
            max-width: 60%;
            min-width: 40%;
        }
        @media (max-width: 1023px) {
            margin-bottom: 2rem;
            max-width: 60%;
            min-width: 40%;
        }
    }


    h1 {
        font-family: "Urbanist", sans-serif;
        font-size: 300%;
        font-weight: 700;
        color:#FFF;
        margin-block: 5%;
    }
`

export const Final = styled.div`



`
export const Tudo = styled.div`
`

export const ImgHeaderUm = styled.div`
    background-color:#060F24;
`

export const Espaco = styled.div`
    
`





export const Pessoas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    gap: 2rem;

    img {
        max-width: 80%;
    }
`
export const Pessoa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    gap: 9rem;
    margin-left: 2rem;
    margin-right: 2rem;


`






export const Giovanny = styled.div`

`
export const Afre = styled.p`
        
        color: white;
        font-family: "Urbanist", sans-serif;
        font-weight: 700;
        text-align: center;

        @media (min-width: 1023px) {
            color: white;
            font-family: "Urbanist", sans-serif;
            font-weight: 800;
            font-size: 150%;
            
            margin-bottom: 1%;  

        }
        @media (max-width: 1023px) {

            color: #FFF;
            font-family: "Urbanist", sans-serif;
            font-weight: 700;
            font-size: 120%;
            align-items: center;
            justify-content: center;

            margin-bottom: 1%;  

        }
`
export const Sfre = styled.p`
        
        color: white;
        font-family: "Urbanist", sans-serif;
        font-weight: 400;
        text-align: center;

        @media (min-width: 1023px) {
            color: white;
            font-family: "Urbanist", sans-serif;
            font-weight: 500;
            font-size: 150%;
            
            margin-bottom: 1%;  

        }
        @media (max-width: 1023px) {
            color: white;
            font-family: "Urbanist", sans-serif;
            font-weight: 400;
            font-size: 120%;

            margin-bottom: 4%;  

        }
`

export const Joao = styled.div`
`
export const Santini = styled.div`

`
export const Nicolas = styled.div`

`
export const Texto = styled.div`
    
`




//cabecario

export const Link = styled.link`
`

export const Amem = styled.button`
    a {
        text-decoration: none;
        color: #FFF;
        font-weight: 700;
        font-family:"Urbanist", sans-serif; 
    }
    background: none;
    border: none;
    color: #FFF;

    font-size: 1.7rem;
    gap: 30%;
    margin-right: 2rem;
    @media (min-width: 1300px) {
        background: none;
        border: none;
        color: #FFF;
        font-size: 2.3rem;
    }
`

export const NovoBotaoTres = styled.div`
    margin-left: auto;
    width: auto;
`

export const NovoBotaodois = styled.div`
    text-align: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-items: center;
    display: flex;
    padding-block: 0.5%;


    img {
            text-decoration: none;
            width: 6%;
            margin-inline: 3%;
            background: none;
        img{
            width: 99.9%;
            height: 100%;
            padding: 0;
        }
    }
`

export const Cabeca = styled.header`
    background-color:#060F24;
`

export const Intero = styled.div`

`

export const MobileMenu = styled.div`
    position: relative;
    height: 5rem;
    overflow: ${props => props.abrir === true ? "visible" : "hidden"};

    div {
        display: flex;
        justify-content: space-between;
    }

    nav {
        width: 16rem;
        right: ${props => props.abrir === true ? "0" : "-16rem"};
        padding: 1rem;
        position: absolute;
        top: 0rem;
        background: #21262A;
        height: calc()(100vh - 5rem);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-weight: 900;
        font-size: 1.5rem;
        text-align: center;
        
    }

    li {
        text-decoration: none;
        list-style: none;
        
    }
    a{
        text-decoration: none;
        color: #FFF;

    }

    
    
`

export const Icone = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    margin-bottom: 1rem;

`

export const Indra = styled.div`
    position: absolute;
    width: 90%;
    height: 4px;
    background-color: #FFF;
    top: 50%;
    left: 0;
    transform-origin: center;
    transform: rotate(45deg);
`
export const Ashura = styled.div`
    position: absolute;
    width: 90%;
    height: 4px;
    background-color: #FFF;
    top: 50%;
    left: 0;
    transform-origin: center;
    transform: rotate(-45deg);
`



export const Pretumm = styled.div`
    width: 240px;
    height: 3px;
    background-color: #FFF;
`

export const Impofort = styled.div`

    @media (max-width: 700px) {
        position: absolute;
        top: 1rem;
        width: 100%;
}

`

export const BotaoUm = styled.button`
@media (min-width: 1023px) {
    text-decoration: none;
    border: #7ED957;
    width: 10%;
    margin-left: 6%;
    background: none;
    img{
        width: 99.9%;
        height: 100%;
        padding: 0;
    }
}
@media (max-width: 1023px) {
    text-decoration: none;
    border: #7ED957;
    width: 10%;
    margin-right: 2%;
    background: none;
    img{
        width: 99.9%;
        height: 100%;
        padding: 0;

    }
    button {
        background: none;
        border: none;
    }
}
`
export const BotaoDois = styled.div`
@media (min-width: 1023px) {
    width: 10%;
    margin-left: 70%;
    img{
        width: 99.9%;
        height: 100%;
        padding: 0;
    }
}
@media (max-width: 1023px) {
    width: 10%;
    margin-left: 3%;
    background: none;
    img{
        width: 99.9%;
        height: 80%;
        padding: 0;
    }
}
`