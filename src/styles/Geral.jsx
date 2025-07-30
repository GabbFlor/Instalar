import { createGlobalStyle } from "styled-components";

const Geral = createGlobalStyle `
    :root {
        // Header
        --height-logo: 70px;
        --font-size-header-a: 1vw;

        // Footer
        --font-size-footer-h1: 2vw;
        --font-size-footer-p: 1.05vw;
        --font-size-footer-copyright: 0.8vw;
        --padding-lateral-footer: 25px;

        // páginas gerais
        --font-size-h1-banner: 2.25vw;
        --font-size-p-banner: 1.3vw;

        --font-size-h1: 2vw;
        --font-size-p: 1.05vw;

        --width-card: 12.5vw;
        --height-card: 18.5vw;

        --width-img: 20vw;
        --height-img: 20vw;

        --width-video: 20vw;

        --font-button: 1vw;
    }

    // fontes em responsividade:
    @media (min-width: 500px) and (max-width: 800px) {
        :root {
            // Header
            --height-logo: 70px;
            --font-size-header-a: 1.8vw;

            // Footer
            --font-size-footer-h1: 3vw;
            --font-size-footer-p: 1.55vw;
            --font-size-footer-copyright: 1.5vw;
            --padding-lateral-footer: 20px;

            // Páginas normais
            --font-size-h1-banner: 4.5vw;
            --font-size-p-banner: 2.6vw;

            --font-size-h1: 2.75vw;
            --font-size-p: 1.75vw;

            --width-card: 22vw;
            --height-card: 30.5vw;

            --width-img: 25.75vw;
            --height-img: 25.75vw;

            --width-video: 25.75vw;

            --font-button: 2vw;
        }
    }

    @media (max-width: 500px) {
        :root {
            // Header
            --height-logo: 40px;
            --font-size-header-a: 2.5vw;

            // Footer
            --font-size-footer-h1: 4vw;
            --font-size-footer-p: 2.5vw;
            --font-size-footer-copyright: 2.5vw;
            --padding-lateral-footer: 0px;

            // Paginas normais
            --font-size-h1-banner: 5.5vw;
            --font-size-p-banner: 3.25vw;

            --font-size-h1: 4vw;
            --font-size-p: 3vw;

            --width-card: 44vw;
            --height-card: 52.5vw;

            --width-img: 40vw;
            --height-img: 40vw;

            --width-video: 40vw;

            --font-button: 3vw;
        }
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    main {
        line-height: 1.6;
        font-family: "Manrope", sans-serif;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            color-scheme: light;
        }
    }

`

export default Geral;