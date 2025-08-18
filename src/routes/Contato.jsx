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

                    <a href="https://wa.me/5511966576315" target="blank_">ENVIE SUA MENSAGEM <BsWhatsapp /></a>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.587397893273!2d-46.53147948925289!3d-23.69070891626785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce421abc4811df%3A0x2554f6d1aeaf87ec!2sR.%20Carlos%20Gon%C3%A7alves%20-%20Jardim%20Moncoes%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009180-290!5e0!3m2!1spt-BR!2sbr!4v1755537160909!5m2!1spt-BR!2sbr"
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