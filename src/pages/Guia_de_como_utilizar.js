import styled from "styled-components"

export const Allcons = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-items: center;
    padding-top: 3%;
    background-color: #192132;


    img {
        width: 53%;
        margin-bottom: 2rem;
        margin-top: 3rem;
    }
    p {
        @media (min-width: 1023px) {
            text-align: center;
            width: 60%;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 130%;
        }
        @media (max-width: 1023px) {
            text-align: center;
            width: 60%;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 100%;
        }
    }
    li {

        @media (min-width: 1023px) {
            margin-left: 30%;
            width: 60%;
            text-align: left;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 125%;
            margin-bottom: 0;
        }
        @media (max-width: 1023px) {
            margin-left: 25%;
            width: 60%;
            text-align: left;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 100%;
            margin-bottom: 0;
        }
    }
    h1 {
        @media (min-width: 1023px) {
            font-family: "Open Sans", sans-serif;
            font-size: 300%;
            font-weight: 700;
            color:#FFF;
            margin-block: 5%;
        }
        @media (max-width: 1023px) {
            font-family: "Open Sans", sans-serif;
            font-size: 250%;
            font-weight: 700;
            color:#FFF;
            margin-block: 5%;
        }
    }
`

export const Final = styled.div`
    height: 5rem;
    background-color:#42C30B;

`
export const Efinal = styled.div`
    background-color: #192132;
    height: 9rem;

`
export const Tudo = styled.div`
`

export const ImgHeaderUm = styled.div`
    background-color:#060F24;
`

export const Espaco = styled.div`
    margin-block: 1%;
    @media (min-width: 1023px) {
        margin-block: 1%;
        p {
            text-align: center;
            margin-left: 23%;
            text-align: left;
        }
    }
    @media (max-width: 1023px) {
        margin-block: 1%;
        p {
            text-align: center;
            margin-left: 17%;
            text-align: left;
        }
}
`
export const Espacodois = styled.div`
    margin-block: 1%;
    @media (min-width: 1023px) {
        margin-block: 1%;
        p {
            margin-left: 26%;
            text-align: left;
        }
    }
    @media (max-width: 1023px) {
        margin-block: 1%;
        p {
            margin-left: 17%;
            text-align: left;
        }
}
`







//cabecario

export const Amem = styled.button`
    a {
        text-decoration: none;
        color: #FFF;
    }
    background: none;
    border: none;
    color: #FFF;
    font-weight: 900;
    font-size: 1.7rem;
    gap: 30%;
    margin-right: 2rem;
    @media (min-width: 1300px) {
        background: none;
        border: none;
        color: #FFF;
        font-weight: 900;
        font-size: 2.3rem;
    }
`

export const NovoBotaoTres = styled.div`
    margin-left: auto;
    dislay: flex;
    text-alight: inline;
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