import { createGlobalStyle } from "styled-components";

const Home_style = createGlobalStyle `
    main {
        background-color: var(--color-background);
        color: var(--color-font)
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
        display:  flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }

    .card {
        display: inline-flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;
    }

    .card img {
        height: 11.5vw;
        width: 30vw;
        object-fit: cover;
        border-radius: 15px;
    }

    .card div {
        background-color: #D7D7D738;
        width: 30vw;
        height: 11.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        transition: background 0.3s ease;
    }

    .card div:hover {
        background-color: #ffffff4f;
    }

    .card div h2 {
        font-size: var(--font-size-h2-card);
        position: relative;
    }

    .card div h2::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: red;
        z-index: 2;
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
        object-fit: cover;
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
        .card img {
            height: 15vw;
            width: 40vw;
        }

        .card div {
            width: 40vw;
            height: 15vw;
        }
    }

    @media (max-width: 499px) {
        .card img {
            height: 20vw;
            width: 40vw;
        }

        .card div {
            width: 40vw;
            height: 20vw;
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