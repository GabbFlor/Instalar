import Header from "../components/Header";
import Card from "../components/Card";
import Img1 from "../assets/Home/grid1.webp";
import Img2 from "../assets/Home/grid2.webp";
import Img3 from "../assets/Home/grid3.webp";
import Img4 from "../assets/Home/grid4.webp";
import Img5 from "../assets/Home/grid5.webp";
import Img6 from "../assets/Home/grid6.webp";
import Video from "../assets/Home/video.mp4";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Home_style from "../styles/Home_style";

const Home = () => {
    return (
        <div className="div-home">
            <Home_style />

            <Header />

            <main>
                <section className="banner-section">
                    <div>
                        <h1>SOLUÇÕES EM OBRAS</h1>
                        <p>Soluções elétricas e infraestrutura com segurança e qualidade</p>
                    </div>

                    <button>SAIBA MAIS</button>
                </section>

                <section className="sobre-nos-section">
                    <h1>SOBRE NÓS</h1>

                    <p>
                        Somos uma empresa especializada em elétrica e infraestrutura, 
                        oferecendo soluções completas para ambientes corporativos, 
                        comerciais e industriais.
                        Nossa equipe qualificada garante serviços de alta qualidade, 
                        segurança e conformidade com as normas técnicas. Atuamos desde a 
                        instalação elétrica até a adequação de espaços e mobilização de 
                        mobiliários e redes, sempre focados em atender às necessidades dos 
                        nossos clientes com eficiência, profissionalismo e compromisso com a excelência.
                        Com experiência no mercado, prezamos pela segurança, inovação e 
                        entrega de resultados confiáveis, construindo relacionamentos sólidos 
                        e de confiança com nossos parceiros e clientes.
                    </p>
                </section>

                <section className="oferecimento-section">
                    <h1>O QUE OFERECEMOS</h1>

                    <p>
                        Elétrica corporativa, elétrica comercial, infraestrutura, 
                        demolição, adequação, mobilização de mobiliarios e redes, elétricas industriais.
                    </p>

                    <div className="grid-oferecimento">
                        <Card 
                            titulo={"Elétrica corporativa"} 
                            conteudo={"Instalações para comércios e escritórios, com foco em estabilidade, segurança e personalização."} 
                        />
                        <Card 
                            titulo={"Elétrica comercial"} 
                            conteudo={"Instalações para comércios e escritórios, com foco em estabilidade, segurança e personalização."} 
                        />
                        <Card 
                            titulo={"Infraestrutura"} 
                            conteudo={"Instalações para comércios e escritórios, com foco em estabilidade, segurança e personalização."} 
                        />
                        <Card 
                            titulo={"Demolição"} 
                            conteudo={"Instalações para comércios e escritórios, com foco em estabilidade, segurança e personalização."} 
                        />

                        {/*  */}

                        <Card 
                            titulo={"Adequação"} 
                            conteudo={"Instalações para comércios e escritórios, com foco em estabilidade, segurança e personalização."} 
                        />
                        <Card 
                            titulo={"Mobilização de mobiliarios"} 
                            conteudo={"Instalações para comércios e escritórios, com foco em estabilidade, segurança e personalização."} 
                        />
                        <Card 
                            titulo={"Redes elétricas"} 
                            conteudo={"Instalações para comércios e escritórios, com foco em estabilidade, segurança e personalização."} 
                        />
                        <Card 
                            titulo={"Redes industriais"} 
                            conteudo={"Instalações para comércios e escritórios, com foco em estabilidade, segurança e personalização."} 
                        />
                    </div>
                </section>

                <section className="galeria-servicos-section">
                    <h1>GALERIA DE SERVIÇOS</h1>

                    <div className="grid-servicos">
                        <div><img src={Img1} alt="img1" /></div>
                        <div><img src={Img2} alt="img2" /></div>
                        <div><img src={Img3} alt="img3" /></div>
                        <div><img src={Img4} alt="img4" /></div>
                        <div><img src={Img5} alt="img5" /></div>
                        <div><img src={Img6} alt="img6" /></div>
                    </div>

                    <Link to={`/servicos`}>SAIBA MAIS</Link>
                </section>

                <section className="cases-section">
                    <video src={Video} loop muted playsInline controls />

                    <div>
                        <h1>CASES</h1>

                        <h1 className="destaque">Adequação elétrica em escritório corporativo</h1>

                        <p>Instalação e adequação elétrica completa em um escritório de 1.200m², reorganizando cabeamento e mobiliários com máxima eficiência e segurança.</p>

                        <Link to={`/servicos`}>QUERO CONHECER</Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
        
    )
} 

export default Home;