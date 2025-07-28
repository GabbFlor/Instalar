import Home_style from "../styles/Home_style";

const Card = ({titulo, conteudo}) => {
    return (
        <div className="card">
            <Home_style />

            <h2>{titulo}</h2>
            <p>{conteudo}</p>
        </div>
    )
}

export default Card;