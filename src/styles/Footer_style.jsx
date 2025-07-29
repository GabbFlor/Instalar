import { createGlobalStyle } from "styled-components";

const Footer_style = createGlobalStyle `
    footer {
        font-family: "Manrope", sans-serif;
        background-color: #1E1E1E;
        color: white;
        display: flex;
        flex-direction: column;
        padding: 25px var(--padding-lateral-footer) 25px var(--padding-lateral-footer);
        gap: 15px;
    }

    .escrita-cima {
        display: inline-flex;
        justify-content: space-between;
        padding: 0 50px 0 50px;
        align-items: center;
    }

    .escrita-cima h1 {
        color: #F83202;
        font-size: var(--font-size-footer-h1);
    }

    .escrita-cima p {
        font-size: var(--font-size-footer-p);
    }

    .redes {
        padding: 0 50px 0 50px;
        text-align: right;
        font-size: var(--font-size-footer-p);
    }

    .redes a {
        color: white;
        transition: color 0.25px2s ease;
    }

    .redes a:hover {
        color: #F83202;
    }

    .copyright {
        font-family: "Manrope", sans-serif;
        text-align: center;
        font-size: var(--font-size-footer-copyright);
    }

    @media (min-width: 500px) and (max-width:800px) {
    }

    @media (max-width: 500px) {
        .escrita-cima {
            padding: 0 25px 0 25px;
        }
    }
`

export default Footer_style;