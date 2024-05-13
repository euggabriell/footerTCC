import { Link } from 'react-router-dom'
import './footer.css'


function Footer(){
    return(
        <footer className="baixo">
            <img className='logoTcc' src={require('./LogoTcc.jpg')} width={140}/>
            <nav className="menu-baixo">
            <ul className="menu-nav">
                <li className="item1">
                    <Link className="item1-link" to="/quemsomos"><h4>Fale conosco</h4></Link>
                </li>
                <li className="item1">
                    <Link className="item1-link" to="/contato"><h4>Cadastro</h4></Link>
                </li>
                <li className="item1">
                    <Link className="item1-link" to="/guia"><h4>Guia</h4></Link>
                </li>
                <li className="item1">
                    <Link className="item1-link" to="/chat"><h4>Chat</h4></Link>
                </li>
                <li className="item1">
                    <Link className="item1-link" to="/conteouca"><h4>Conte e ouça</h4></Link>
                </li>
            </ul>
        </nav>

        </footer>
    )
}

export default Footer;