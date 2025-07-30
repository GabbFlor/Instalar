import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import Slide1_img from "../assets/Servicos/Slide1.webp";
import Slide2_img from "../assets/Servicos/Slide2.webp";
import Slide3_img from "../assets/Servicos/Slide3.webp";
import Slide4_img from "../assets/Servicos/Slide4.webp";
import Slide5_img from "../assets/Servicos/Slide5.webp";
import Slide6_img from "../assets/Servicos/Slide6.webp";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import Carrossel_style from "../styles/Carrossel_style";

function Carroussel() {
    const settings = {
        dots: true,
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <BsCaretRight />,
        prevArrow: <BsCaretLeft />,
        customPaging: i => (
            <div className="ponto-customizado"></div>
        )
    }

    return (
        <div className="carrossel-container">
            <Carrossel_style />

            <Slider {...settings}>
                <div>
                    <img src={Slide1_img} alt="Slide1-Instalar" />
                </div>

                <div>
                    <img src={Slide2_img} alt="Slide2-Instalar" />
                </div>

                <div>
                    <img src={Slide3_img} alt="Slide3-Instalar" />
                </div>

                <div>
                    <img src={Slide4_img} alt="Slide4-Instalar" />
                </div>

                <div>
                    <img src={Slide5_img} alt="Slide5-Instalar" />
                </div>

                <div>
                    <img src={Slide6_img} alt="Slide6-Instalar" />
                </div>
            </Slider>
        </div>
    )
}

export default Carroussel;