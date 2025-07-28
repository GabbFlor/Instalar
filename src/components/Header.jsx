import Logo from '../assets/logo.webp'
import { Link } from 'react-router-dom';
import Header_style from '../styles/Header_style';

const Header = () => {
    return (
        <header>
            <Header_style />

            <Link to={`/`} className='logo-link'><img src={Logo} alt="Logo"/></Link>

            <nav>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/sobre-nos`}>Sobre</Link></li>
                    <li><Link to={`/servicos`}>Serviços</Link></li>
                    <li><Link to={`/contato`}>Contato</Link></li>
                </ul>
            </nav>

            <button type='button'>FALE CONOSCO</button>
        </header>
    )
}

export default Header;