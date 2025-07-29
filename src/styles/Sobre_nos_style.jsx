import { createGlobalStyle } from "styled-components";

const Sobre_nos_style = createGlobalStyle `
    main {
        font-family: "Manrope", sans-serif;
    }

    .quem-somos-section,
    .valores-section,
    .proposito-section {
        padding: 50px 0;
    }

    .quem-somos-section h1,
    .valores-section h1,
    .proposito-section h1 {
        font-size: var(--font-size-h1);
        position: relative;
        padding-bottom: 15px;
        padding: 0 100px 15px 100px;
    }

    .quem-somos-section p,
    .valores-section li,
    .proposito-section p {
        font-size: var(--font-size-p);
        width: 45vw;
    }

    .quem-somos-section h1::after,
    .valores-section h1::after,
    .proposito-section h1::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 25%;
        background-color: red;
        bottom: 0;
        left: 0;
    }

    .quem-somos-section div,
    .valores-section div,
    .proposito-section div{
        display: inline-flex;
        padding: 30px 100px 0 100px;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .quem-somos-section div img {
        padding: 5px;
        width: 30vw;
        margin-top: -75px;
    }

    .valores-section img,
    .proposito-section img {
        width: 30vw;
        border-radius: 15px;
    }

    @media (min-width: 500px) and (max-width: 800px) {
        .quem-somos-section h1,
        .valores-section h1,
        .proposito-section h1 {
            padding: 0 50px 15px 50px;
        }

        .quem-somos-section div,
        .valores-section div,
        .proposito-section div{
            padding: 30px 50px 0 50px;
        }

        .quem-somos-section div img {
            margin-top: 0px;
            width: 35vw;
        }
    }

    @media (max-width: 499px) {
        .quem-somos-section div,
        .valores-section div,
        .proposito-section div{
            display: flex;
            flex-direction: column;
            padding: 30px 25px 0 25px;
            align-items: center;
            justify-content: space-between;
            gap: 25px;
            width: 100%;
        }

        .quem-somos-section h1,
        .valores-section h1,
        .proposito-section h1 {
            padding: 0 25px 15px 25px;
            text-align: center;
        }

        .quem-somos-section div img {
            margin-top: 0px;
            width: 45vw;
        }

        .quem-somos-section h1::after,
        .valores-section h1::after,
        .proposito-section h1::after {
            width: 35%;
        }

        .valores-section img,
        .proposito-section img {
            width: 40vw;
            border-radius: 15px;
        }

        .quem-somos-section p,
        .valores-section li,
        .proposito-section p {
            text-align: justify;
            width: 55vw;
        }
    }
`

export default Sobre_nos_style;