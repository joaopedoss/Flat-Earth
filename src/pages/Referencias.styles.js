import styled from "styled-components"

export const Allcons = styled.div`

    padding-top: 2rem;
    background-color: #192132;

    padding-bottom: 2rem;

    a{
        @media (min-width: 1023px) {
            margin-left: 20%;
            text-decoration: underline;
            color: blue;
            font-weight: 700;
            font-size: 1.5rem;
            text-align: justify;
        }
        @media (max-width: 1023px) {
            margin-left: 20%;
            text-decoration: underline;
            color: blue;
            font-weight: 700;
            font-size: 1.3rem;
            text-align: justify;
            width: 20%;
        }



        
    }
    img {
        width: 53%;
        margin-bottom: 2rem;
        margin-top: 3rem;
        margin-left: 24%;
    }
    p {

        @media (min-width: 1023px) {
            margin-block: 2rem;
            margin-left: 20%;
            width: 60%;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 100%;
            text-align: justify;
        }
        @media (max-width: 1023px) {
            margin-block: 2rem;
            margin-left: 20%;
            width: 60%;
            color: white;
            font-family: "Palanquin Dark", sans-serif;
            font-weight: 400;
            font-size: 100%;
            text-align: justify;
            font-size: 0.9rem;
        }
    }
    h1 {
        @media (min-width: 1023px) {
            font-family: "Open Sans", sans-serif;
            font-size: 300%;
            font-weight: 700;
            color:#FFF;
            margin-block: 5%;
            align-items: center;
            text-align: center;
            justify-content: center;
            justify-items: center;

        }
        @media (max-width: 1023px) {
            font-family: "Open Sans", sans-serif;
            font-size: 250%;
            font-weight: 700;
            color:#FFF;
            margin-block: 5%;
            align-items: center;
            text-align: center;
            justify-content: center;
            justify-items: center;
        }
}
`

export const Final = styled.div`

    height: 5rem;
    background-color:#42C30B;

`
export const Tudo = styled.div`
`

/*export const BotaoUm = styled.button`
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
`*/
export const BotaoDois = styled.div`
@media (min-width: 767px) {
    width: 10%;
    margin-left: 70%;
    img{
        width: 99.9%;
        height: 100%;
        padding: 0;
    }
}
@media (max-width: 767px) {
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






export const Efinal = styled.div`
    background-color: #192132;
    height: 5rem;

`


//cabecario

export const Link = styled.link`
`

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



export const ImgHeaderUm = styled.div`
    background-color:#060F24;
`

/*kids*/

export const MobileMenu = styled.div`
    position: relative;
    height: 5rem;
    background: aqua;

    div {
        display: flex;
        justify-content: space-between;
    }

    nav {
        width: 16rem;
        padding: 1rem;
        position: absolute;
        top: 5rem;
        background: pink;
        height: calc()(100vh - 5rem);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    
`