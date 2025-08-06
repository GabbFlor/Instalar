import { createGlobalStyle } from "styled-components";

const Servicos_style = createGlobalStyle `
    main {
        background-color: var(--color-background);
        color: var(--color-font);
    }

    .servicos-1-section, 
    .servicos-2-section {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .servicos-1-section h1, 
    .servicos-2-section h1 {
        font-size: var(--font-size-h1);
        position: relative;
        padding-bottom: 15px;
        padding: 0 100px 15px 100px;
        text-align: center;
    }

    .servicos-1-section h1, 
    .servicos-2-section h1 {
        font-size: var(--font-size-h1);
        position: relative;
        padding-bottom: 15px;
        padding: 0 100px 15px 100px;
        text-align: center;
        width: 100%;
    }

    .servicos-1-section h1::after, 
    .servicos-2-section h1::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 25%;
        background-color: red;
        bottom: 0;
    }

    .servicos-1-section h1::after {
        left: 0;
    }

    .servicos-2-section h1::after {
        right: 0;
    }

    .servicos-1-section p,
    .servicos-2-section p {
        font-size: var(--font-size-p);
        width: 45vw;
        text-align: center;
    }

    .servicos-1-section div {
        display: inline-flex;
        margin-top: 50px;
        gap: 30px;
    }

    .servicos-1-section div img {
        width: 20vw;
        height: auto;
        object-fit: cover;
        border-radius: 15px;
    }

    @media (min-width: 500px) and (max-width: 800px) {
        .servicos-1-section div img {
            width: 25vw;
        }
    }

    @media (max-width: 499px) {
        .servicos-1-section h1::after, 
        .servicos-2-section h1::after {
            width: 35%;
        }

        .servicos-1-section p,
        .servicos-2-section p {
            width: 75vw;
        }

        .servicos-1-section h1, 
        .servicos-2-section h1 {
            margin-bottom: 25px;
        }

        .servicos-1-section div {
            gap: 20px;
            flex-direction: column;
            margin-top: 25px;
        }

        .servicos-1-section div img {
            width: 45vw;
            height: 65vw;
        }

        .servicos-2-section {
            padding-top: 0;
        }
    }
`

export default Servicos_style;