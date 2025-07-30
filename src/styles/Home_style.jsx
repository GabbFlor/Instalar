import { createGlobalStyle } from "styled-components";

const Home_style = createGlobalStyle `
    main {
        background-color: white;
    }

    .banner-section button, .galeria-servicos-section a, .cases-section a {
        width: fit-content;
        height: fit-content;
        padding: 7px 15px 5px 15px;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: #F80202;
        color: white;
        transition: background-color 0.2s ease;
        font-size: var(--font-button);
        text-decoration: none;
    }

    .banner-section button:hover, .galeria-servicos-section a:hover {
        background-color: #b10000;
    }

    .sobre-nos-section h1, .oferecimento-section h1, .galeria-servicos-section h1 {
        font-size: var(--font-size-h1);
    }

    .sobre-nos-section p, .oferecimento-section p {
        font-size: var(--font-size-p);
        width: 75%;
    }

    .sobre-nos-section {
        padding: 50px;
        text-align: center;
        flex-direction: column;
        display: flex;
        gap: 25px;
        align-items: center;
    }

    .oferecimento-section {
        padding: 50px 0 50px 0;
        text-align: center;
        flex-direction: column;
        display: flex;
        gap: 25px;
        align-items: center;
    }

    .oferecimento-section h1, .galeria-servicos-section h1 {
        width: 100%;
        padding-bottom: 15px;
        position: relative;
        display: inline-block;
    }

    .oferecimento-section h1::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 25%;
        height: 3px;
        background-color: red;
    }

    .galeria-servicos-section h1::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 25%;
        height: 3px;
        background-color: red;
    }

    .cases-section::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 25%;
        height: 3px;
        background-color: red;
    }

    .grid-oferecimento {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 25px;
        justify-content: center;
    }

    .card {
        background-color: #D7D7D738;
        border: 3px solid rgba(0, 0, 0, 0.123);
        font-size: var(--font-size-p);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: var(--width-card);
        height: var(--height-card);
        border-radius: 10px;
        gap: 10px;
    }

    .card h2 {
        color: #F80202;
    }

    .galeria-servicos-section {
        padding: 50px 0 50px 0;
        text-align: center;
        flex-direction: column;
        display: flex;
        gap: 25px;
        align-items: center;
    }

    .grid-servicos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
        justify-content: center;
    }

    .grid-servicos img, .grid-servicos div {
        width: var(--width-img);
        height: var(--height-img);
        border-radius: 20px;
    }

    .cases-section {
        display: inline-flex;
        padding: 50px;
        position: relative;
        justify-content: center;
        width: 100%;
    }

    .cases-section video {
        width: var(--width-video);
        border-radius: 15px;
    }

    .cases-section div {
        width: 30vw;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .cases-section div h1 {
        font-size: var(--font-size-h1);
        text-align: center;
    }

    .cases-section .destaque {
        color: #F80202;
    }

    .cases-section p {
        font-size: var(--font-size-p);
        font-weight: bolder;
        text-align: center;
    }

    @media (min-width: 500px) and (max-width: 800px) {
        .grid-oferecimento {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 499px) {
        .grid-oferecimento {
            grid-template-columns: repeat(1, 1fr);
        }

        .sobre-nos-section {
            padding: 50px 0px;
        }

        .oferecimento-section {
            padding: 0 0 50px 0;
        }

        .galeria-servicos-section {
            padding: 0 0 50px 0;
        }

        .grid-servicos {
            grid-gap: 5px;
        }

        .cases-section {
            padding: 25px 0 50px 0;
        }

        .cases-section video {
            width: var(--width-video);
            border-radius: 15px;
        }

        .cases-section div {
            width: 50vw;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }

        .grid-servicos {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 15px;
        }
    }
`

export default Home_style;