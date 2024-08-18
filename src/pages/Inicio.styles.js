import styled from "styled-components"

export const Allcons = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-items: center;
    padding-top: 2rem;
    background-color: #192132;

    padding-bottom: 2rem;
    img {
        width: 53%;
        margin-bottom: 2rem;
        margin-top: 3rem;
    }
    p {
        margin-left: 20%;
        width: 60%;
        color: white;
        font-family: "Palanquin Dark", sans-serif;
        font-weight: 400;
        font-size: 100%;
        

        @media (min-width: 1023px) {
            margin-left: 20%;
            width: 60%;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 100%;
            text-align: justify;
            margin-bottom: 4%;  

        }
        @media (max-width: 1023px) {
            margin-left: 20%;
            width: 60%;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 100%;

            margin-bottom: 4%;  

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