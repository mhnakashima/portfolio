import './styles.scss';
import { AvatarComponent } from "../../components/avatar"

export const MenuContainer = ({ config }) => {

    return (
        <div className="menu tc">
            <AvatarComponent></AvatarComponent>
            <div className="info mt2">
                <h3 className="f6 ttu">mhnakashima@gmail.com</h3>
                <span className="f7 ttu">Front-End Engineer</span>
            </div>
            <nav className="mt3 menu--social">
                <ul>
                    <li><a className="f7" target="_blank" href="http://www.linkedin.com.br/mhnakashima">linkedin</a></li>
                    <li><a className="f7" target="_blank" href="http://www.github.com/mhnakashima">github</a></li>
                    <li><a className="f7" target="_blank" href="http://www.instagram.com/mhnakashima">instagram</a></li>
                </ul>
            </nav>
            <nav className="menu--main">
                <ul>
                    <li><a href="#sobre">Sobre/</a></li>
                    <li><a href="#experiencias">Experiências/</a></li>
                    <li><a href="#formacao">Formação/</a></li>
                    <li><a href="#cursos">Cursos/</a></li>
                </ul>
            </nav>
        </div>
    )
}