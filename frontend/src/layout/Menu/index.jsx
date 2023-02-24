import { Link } from "react-router-dom";
import "./style.css";

export const Menu = () => {
    return (
        <nav className="c-menu">
            <ul className="c-menu__list">
                <li className="c-menu__item">
                    <Link className="c-menu__link" to="/">
                        Home
                    </Link>
                </li>
                <li className="c-menu__item">
                    <Link className="c-menu__link" to="/user">
                        User
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
