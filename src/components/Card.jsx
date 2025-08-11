import Home_style from "../styles/Home_style";

const Card = ({img, conteudo, invertido}) => {
    return (
        <div 
            className="card"
            style={{ flexDirection: (invertido == true ? `row-reverse` : `row`) }}
        >
            <Home_style />

            <img src={img} alt="img-card-instalar" />
            <div>
                <h2>{conteudo}</h2>
            </div>
        </div>
    )
}

export default Card;