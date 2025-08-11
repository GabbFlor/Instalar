import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import Footer_style from "../styles/Footer_style";

const Footer = () => {
    return (
        <>
            <footer>
                <Footer_style />

                <div className="escrita-cima">
                    <h1>
                        Cada fio conta, <br />
                        Cada detalhe, <br />
                        Importa.
                    </h1>

                    <p>
                        Rua Carlos Gonçalves 492 <br />
                        Bairro jardim monções <br />
                        Santo André -SP<br />
                        CEP: 09180-290 <br />
                        +55 (11) 99999-9999
                    </p>
                </div>

                <div className="redes">
                    <p>NOSSAS REDES SOCIAIS: <a href="#" target="blank_"><BsWhatsapp /></a> <a href="https://www.instagram.com/instalar.oficial/" target="blank_"><BsInstagram /></a></p>
                </div>
            </footer>
            <div className="copyright">
                <p>&copy; Copyright 2025 - Instalar    |    CNPJ - 31.243.754/0001-04</p>
            </div>
        </>
    )
}

export default Footer;