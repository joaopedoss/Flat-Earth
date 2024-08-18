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
export const Intero = styled.div`

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
export const BotaoUm = styled.button`
@media (min-width: 767px) {
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
@media (max-width: 767px) {
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
`
export const BotaoDois = styled.button`
@media (min-width: 767px) {
    text-decoration: none;
    border: #7ED957;
    width: 10%;
    margin-left: 70%;
    background: none;
    img{
        width: 99.9%;
        height: 100%;
        padding: 0;
    }
}
@media (max-width: 767px) {
    text-decoration: none;
    border: #7ED957;
    width: 10%;
    margin-left: 70%;
    background: none;
    img{
        width: 99.9%;
        height: 100%;
        padding: 0;
    }
}
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

export const Botaooumm = styled.button`
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 100%;
    border-radius: 25px;
    color: #42C30B;
    background-color: white;
    padding: 4%;
    padding-inline: 10%;
    border: none;
    cursor: pointer;
    font-weight: 900;
    justify-content: right;
    margin-left: 8%;
`
export const Botaoodoiss = styled.button`
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 100%;
    border-radius: 25px;
    color: #42C30B;
    background-color: black;
    padding: 4%;
    padding-inline: 10%;
    margin-left: 0.3%;
    border: none;
    cursor: pointer;
    font-weight: 900;
    justify-content: right;
`
