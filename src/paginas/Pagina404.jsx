import image from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

export default function pagina404(){
    return (
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={image} alt="" />
            <p className="naoencontrado-texo">
                Ops, essa página não existe!
            </p>
        </main>
    )
}