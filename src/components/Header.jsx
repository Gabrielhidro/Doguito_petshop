import image from '../assets/img/doguito.svg'
import '../assets/css/componentes/cabecalho.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone">

                </span>
            </div>
            <div className="cabecalho-container">
                <a href="/" className="flex flex--centro">
                    <img src={image} alt="logo" className="cabecalho__logo" />
                    <h1 className="cabecalho__titulo">Petshop</h1>
                </a>
            </div>

            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><a href="#" className="menu-item menu-item--entrar">Entrar</a></li>
                    <li><a href="#" className="menu-item">Produtos</a></li>
                    <li><Link to="/" className="menu-item">Blog</Link></li>
                    <li><Link to="/sobre" className="menu-item">Sobre</Link></li>
                </ul>
            </nav>

            <div className="menu-cabecalho-background">

            </div>
        </header>
    )
}