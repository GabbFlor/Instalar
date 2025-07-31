import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BannerImg from "../assets/Servicos/Banner.webp";
import Img1 from "../assets/Servicos/Img1.webp";
import Img2 from "../assets/Servicos/Img2.webp";
import Img3 from "../assets/Servicos/Img3.webp";
import Carroussel from "../components/Carroussel";
import Servicos_style from "../styles/Servicos_style";

const Servicos = () => {
    

    return (
        <div>
            <Servicos_style />

            <Header />

            <main>
                <Banner img={BannerImg}>
                    <h1>CASES & SERVIÇOS</h1>
                </Banner>

                <section className="servicos-1-section">
                    <h1>Elétrica Corporativa, Elétrica Comercial, Elétrica industrial</h1>

                    <p>
                        Instalações elétricas para escritórios e edifícios empresariais, 
                        com foco em segurança, desempenho e organização conforme as normas técnicas.

                        Soluções elétricas sob medida para comércios, lojas e estabelecimentos, 
                        com atenção às demandas específicas de funcionamento e consumo.

                        Projetos e instalações elétricas robustas e seguras para ambientes 
                        industriais, com foco em alta performance e confiabilidade.
                    </p>

                    <div>
                        <img src={Img1} alt="Img1-Instalar" />
                        <img src={Img2} alt="Img2-Instalar" />
                        <img src={Img3} alt="Img3-Instalar" />
                    </div>
                </section>

                <section className="servicos-2-section">
                    <h1>Infraestrutura, Demolição, Adequação, Mobilização de Mobiliários e Redes</h1>

                    <p>
                        Execução de infraestrutura elétrica, de dados e comunicação, 
                        com planejamento estratégico e organização para garantir 
                        eficiência e durabilidade.

                        Serviços de demolição técnica e controlada, com segurança, 
                        responsabilidade ambiental e preparo para reformas ou novas 
                        construções.

                        Reformulação e modernização de instalações elétricas e layouts, 
                        adequando ambientes às novas necessidades operacionais ou normativas.

                        Organização e remanejamento de móveis, pontos de energia e 
                        redes de dados com mínimo impacto nas operações.
                    </p>

                   <Carroussel />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Servicos;