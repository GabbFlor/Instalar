import { createGlobalStyle } from "styled-components";

const Carrossel_style = createGlobalStyle `
    .carrossel-container {
        width: 90%;
        margin: 40px auto;
        padding: 0 20px;
    }

    .carrossel-container .slick-slide {
        text-align: center;
    }

    .carrossel-container .slick-slide img {
        width: 25vw;
        height: 35vw;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 8px;
    }

    .custom-dots {
        bottom: -40px;
    }

    .custom-dots .ponto-customizado {
        width: 10px;
        height: 10px;
        background-color: #ccc;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }

    .custom-dots li.slick-active .ponto-customizado {
        background-color: rgb(255, 123, 0);
    }

    .slick-arrow {
        color: black;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex !important;
        justify-content: center;
        align-items: center;
        z-index: 10;
        transition: color 0.3s ease;
    }

    .slick-arrow:hover {
        color: rgb(255, 123, 0);
    }

    .slick-prev::before,
    .slick-next::before {
        display: none;
    }

    .slick-prev {
        margin-left: -50px;
    }

    .slick-next {
        margin-right: -50px;
    }
`

export default Carrossel_style;