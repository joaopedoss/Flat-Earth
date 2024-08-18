import styled from "styled-components"

export const Allcons = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-items: center;
    padding-top: 2rem;
    background-color: #101728;

    padding-bottom: 2rem;
    img {

        margin-bottom: 2rem;


        @media (min-width: 1023px) {
            margin-bottom: 2rem;
            max-width: 40%;
        }
    }
    p {
        @media (min-width: 1023px) {
            text-align: center;
            width: 60%;
            color: #00FF66;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 105%;
    }
        @media (max-width: 1023px) {
            text-align: center;
            width: 60%;
            color: #00FF66;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 100%;
    }
    }
    li {
        @media (min-width: 1023px) {
            margin-left: 20%;
            width: 60%;
            text-align: left;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 105%;
            margin-bottom: 4%;
    }
        @media (max-width: 1023px) {
            margin-left: 20%;
            width: 60%;
            text-align: left;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 100%;
            margin-bottom: 4%;
    }
    }
    h1 {
        font-family: "Open Sans", sans-serif;
        font-size: 300%;
        font-weight: 700;
        color:#00FF66;
        margin-block: 5%;
    }
`
export const Intero = styled.div`

`
export const Final = styled.div`

    height: 5rem;
    background-color:#42C30B;

`
export const Tudo = styled.div`
`

export const ImgHeaderUm = styled.div`
    background-color:#7ED957;
`

export const Espaco = styled.div`
    p {
        text-align: center;
        margin-left: 17%;
        text-align: left;
    }


`
export const Espacodois = styled.div`
    margin-block: 5%;
    p {
        margin-left: 17%;
        text-align: left;
    }
`
export const Cabeca = styled.div`
    background-color:#060F24;
`
export const NovoBotaodois = styled.div`
    text-align: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-items: center;
    display: flex;
    gap: 33%;
    padding-block: 0.5%;


    img {
            text-decoration: none;
            width: 6%;
            margin-left: 1%;
            background: none;
        img{
            width: 99.9%;
            height: 100%;
            padding: 0;
        }
    }

`
export const Amem = styled.button`
    background: none;
    border: none;
    color: #FFF;
    font-weight: 900;
    font-size: 2.3rem;
    @media (min-width: 1300px) {
        background: none;
        border: none;
        color: #FFF;
        font-weight: 900;
        font-size: 2.3rem;
    }
`

export const Pessoas = styled.div`
    display: flex;
    margin-bottom: 2%;
    @media (min-width: 1023px) {

        p {
            text-align: center;
            margin-left: 0%;
            text-align: justify;
        }
        li {
            text-align: center;
            margin-left: 0%;
            text-align: justify;
            margin-left: 3%;
        }
        img {
            margin-inline: 7%;
            width: 100%;
            
        }
            }
`
export const Giovanny = styled.div`
    margin-inline: 7%;
    width: 100%;
`

export const Joao = styled.div`
    margin-inline: 8%;
    width: 100%;
`
export const Santini = styled.div`
    margin-inline: 8%;
    margin-right: 9%.5;
    width: 100%;
`
export const Nicolas = styled.div`
    width: 90%;
    margin-inline: 8%;
`