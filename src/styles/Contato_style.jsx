import { createGlobalStyle } from "styled-components"

const Contato_style = createGlobalStyle `
    main {
        background-color: #1E1E1EEB;
        color: white;
    }

    .section-banner {
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 3px solid #F80202;
    }

    .section-banner p {
        font-size: var(--font-size-p-banner);
        color: #F80202;
        font-weight: bold;
    }

    .section-banner h1 {
        font-size: var(--font-size-h1-banner);
    }

    .escrita-1, .escrita-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
        padding-bottom: 50px;
        gap: 25px;
    }


    .escrita-1 p, .escrita-2 p {
        width: 50vw;
        font-size: var(--font-size-p);
        text-align: center;
    }

    .escrita-1 button {
        font-size: var(--font-size-p);
        color: white;
        border: none;
        outline: none;
        background-color: #F80202;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    .escrita-1 button:hover {
        background-color: #b10000;
    }

    .escrita-1 button svg {
        margin-left: 5px;
    }

    .escrita-2 h1 {
        font-size: var(--font-size-h1);
    }

    .mapa {
        padding-top: 100px;
        width: 100% !important;
    }

    .mapa iframe {
        height: 600px;
        width: 100%;
    }

    @media (min-width: 500px) and (max-width: 800px) {
        .escrita-1 p, .escrita-2 p {
            width: 75vw;
        }

        .escrita-1, .escrita-2 {
            padding-top: 100px;
            padding-bottom: 0;
        }
    }

    @media (max-width: 499px) {
        .section-banner {
            height: 200px;
        }

        .escrita-1 p, .escrita-2 p {
            width: 75vw;
        }

        .escrita-1, .escrita-2 {
            padding-top: 85px;
            padding-bottom: 0;
        }

        .mapa iframe {
            height: 400px;
        }
    }
`

export default Contato_style;