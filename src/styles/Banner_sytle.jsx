import { createGlobalStyle } from "styled-components";

const Banner_style = createGlobalStyle `
        .banner-section {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            height: 500px;
    
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: white;
            gap: 25px;
            font-family: "Manrope", sans-serif;
        }
    
        .banner-section::before {
            content: "";
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
            height: 500px;
        }
    
        .banner-section > * {
            position: relative;
            z-index: 2;
        }
    
        .banner-section h1 {
            font-size: var(--font-size-h1-banner);
            font-weight: bolder;
            text-align: center;
        }
    
        .banner-section p {
            font-size: var(--font-size-p-banner);
            text-align: center;
        }
    
        .banner-section a {
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
    
        .banner-section a:hover {
            background-color: #b10000;
        }

        @media (max-width: 499px) {
            .banner-section {
                height: 200px;
            }

            .banner-section::before {
                height: 200px;
            }
        }
    `

export default Banner_style;