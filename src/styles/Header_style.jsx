import { createGlobalStyle } from "styled-components"

const Header_style = createGlobalStyle `
    :root {
        --height-logo: 70px;
        --font-size-header-a: 1vw;
    }

    header {
        display: inline-flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        height: 70px;
        font-family: "Inter", sans-serif;
        background-color: white;
    }

    .logo-link img {
        height: var(--height-logo);
    }

    header nav ul {
        list-style: none;
        display: inline-flex;
    }

    header nav ul li a {
        text-decoration: none;
        color: black;
        padding: 5px 15px 5px 15px;
        border-radius: 10px;
        transition: background-color 0.2s ease;
        font-size: var(--font-size-header-a);
    }

    header nav ul li a:hover {
        background-color: #7777775e;
    }

    header button {
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
        font-size: var(--font-size-header-a);
    }

    header button:hover {
        background-color: #b10000;
    }

    @media (min-width: 500px) and (max-width: 800px) {
        :root {
            --height-logo: 70px !important;
            --font-size-header-a: 1.8vw !important;
        }

        header nav ul li a {
            padding: 5px 12.5px 5px 12.5px;
        }
    }

    @media (max-width: 500px) {
        :root {
            --height-logo: 40px;
            --font-size-header-a: 2.5vw;
        }

        header nav ul li a {
            padding: 5px 5px 5px 5px;
        }
    }
`

export default Header_style;