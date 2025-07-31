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
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex !important;
        justify-content: center;
        align-items: center;
        z-index: 10;
        transition: color 0.3s ease;
    }

    .slick-prev::before,
    .slick-next::before {
        display: none !important;
    }

    .slick-arrow svg {
        color: black;
        font-size: 3vw;
        transition: color 0.3s ease;
    }

    .slick-arrow svg:hover {
        color: rgb(255, 123, 0);
    }

    .slick-prev {
        margin-left: -2vw;
    }

    .slick-next {
        margin-right: -2vw;
    }

    @media (min-width: 500px) and (max-width: 800px) {
        .carrossel-container .slick-slide img {
            width: 35vw;
            height: 50vw;
            object-fit: cover;
            margin: 0 auto;
            border-radius: 8px;
        }

        .custom-dots .ponto-customizado {
            width: 8px;
            height: 8px;
        }

        .slick-arrow svg {
            font-size: 4.5vw;
        }
    }

    @media (max-width: 500px) {
        .carrossel-container .slick-slide img {
            width: 45vw;
            height: 75vw;
            object-fit: cover;
            margin: 0 auto;
            border-radius: 8px;
        }

        .custom-dots .ponto-customizado {
            width: 6.5px;
            height: 6.5px;
        }

        .slick-arrow svg {
            font-size: 6vw;
        }
    }
`

export default Carrossel_style;