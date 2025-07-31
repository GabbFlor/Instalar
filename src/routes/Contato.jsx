import Footer from "../components/Footer";
import Header from "../components/Header";
import { BsWhatsapp } from "react-icons/bs";
import Contato_style from "../styles/Contato_style";

const Contato = () => {
    return (
        <div>
            <Contato_style />

            <Header />

            <main>
                <section className="section-banner">
                    <p>CONTATO</p>
                    <h1>CONVERSE COM A NOSSA EQUIPE</h1>
                </section>

                <section className="escrita-1">
                    <p>
                        Tem dúvidas ou precisa de um orçamento? Mande uma mensagem 
                        no nosso WhatsApp e fale diretamente com nossa equipe. Estamos 
                        prontos para responder com agilidade e oferecer soluções elétricas 
                        seguras, eficientes e personalizadas para residências, condomínios, 
                        prédios e empresas. Atendimento rápido, direto e sem complicação!
                    </p>

                    <button>ENVIE SUA MENSAGEM <BsWhatsapp /></button>
                </section>

                <section className="escrita-2">
                    <h1>COMO NOS LOCALIZAR?</h1>

                    <p>
                        Confira abaixo nossa localização no mapa. Se tiver dúvidas sobre como 
                        nos encontrar, é só nos chamar pelo WhatsApp — nossa equipe está pronta 
                        para te orientar!
                    </p>
                </section>

                <section className="mapa">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308.952987280417!2d-46.52700255!3d-23.6589121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce69d536766bcf%3A0xb70f2179599dfda9!2sCentro%2C%20Santo%20Andr%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1753993663506!5m2!1spt-BR!2sbr" 
                        style={{border: 0}}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"/>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Contato;