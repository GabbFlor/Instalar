import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../assets/logo.webp";
import Img1 from "../assets/Sobre_nos/img1.webp";
import Img2 from "../assets/Sobre_nos/img2.webp";
import BannerImage from "../assets/Sobre_nos/Banner.webp"

import Banner from "../components/Banner";
import Sobre_nos_style from "../styles/Sobre_nos_style";

const Sobre_nos = () => {
    return (
        <div>
            <Sobre_nos_style />

            <Header />

            <main>
                <Banner img={BannerImage}>
                    <h1>SOBRE NÓS</h1>
                </Banner>

                <section className="quem-somos-section">
                    <h1>QUEM SOMOS</h1>
                    
                    <div>
                        <p>
                            Somos uma empresa especializada em elétrica e infraestrutura, 
                            oferecendo soluções completas para ambientes corporativos, 
                            comerciais e industriais.
                            Nossa equipe qualificada garante serviços de alta qualidade, 
                            segurança e conformidade com as normas técnicas. Atuamos desde 
                            a instalação elétrica até a adequação de espaços e mobilização de 
                            mobiliários e redes, sempre focados em atender às necessidades dos 
                            nossos clientes com eficiência, profissionalismo e compromisso com a 
                            excelência.
                            Com experiência no mercado, prezamos pela segurança, inovação 
                            e entrega de resultados confiáveis, construindo relacionamentos sólidos e de 
                            confiança com nossos parceiros e clientes.
                        </p>

                        <img src={Logo} alt="Logo-Instalar" />
                    </div>
                </section>


                <section className="valores-section">
                    <h1>VALORES</h1>

                    <div>
                        <ul>
                            <li>Segurança: Prioridade máxima em todas as etapas dos serviços.</li>
                            <li>Qualidade: Entrega de alto padrão, com foco nos detalhes e no resultado final.</li>
                            <li>Eficiência: Soluções ágeis, organizadas e assertivas.</li>
                            <li>Comprometimento: Cumprimos prazos, normas e expectativas.</li>
                            <li>Transparência: Relacionamentos baseados na confiança e no respeito.</li>
                            <li>Inovação: Atualização constante para oferecer o que há de melhor no setor.</li>
                        </ul>

                        <img src={Img1} alt="Img1-Instalar" />
                    </div>
                </section>

                <section className="proposito-section">
                    <h1>PROPÓSITO E VISÃO</h1>

                    <div>
                        <p>
                            O propósito da empresa visa transformar espaços com 
                            soluções elétricas e de infraestrutura seguras, eficientes 
                            e personalizadas, contribuindo para o desenvolvimento 
                            sustentável de ambientes corporativos, comerciais e industriais. 
                                <br />
                            Já como visão buscamos ser referência nacional em serviços 
                            de elétrica e infraestrutura, reconhecida pela qualidade, 
                            inovação e compromisso com a excelência em cada projeto executado.
                        </p>


                        <img src={Img2} alt="Img2-Instalar" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Sobre_nos;