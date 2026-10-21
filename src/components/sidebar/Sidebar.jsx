import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import LightLogo from "../../assets/light-logo.svg";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiChat3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";

const links = [
    { href: "#home", label: "Accueil", Icon: RiHome2Line },
    { href: "#about", label: "À propos", Icon: RiUser3Line },
    { href: "#services", label: "Ce que je fais", Icon: RiFileList3Line },
    { href: "#portfolio", label: "Projets", Icon: RiStackLine },
    { href: "#resume", label: "Parcours", Icon: RiBriefcase2Line },
    { href: "#contact", label: "Contact", Icon: RiChat3Line },
];

const Sidebar = ({ theme, switchTheme }) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo" aria-label="Accueil">
                    <img src={theme === 'light' ? LightLogo : Logo} alt="Logo Ben Birama Bop" width="48" height="48" />
                </a>

                <nav className="nav" aria-label="Navigation principale">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {links.map(({ href, label, Icon }) => (
                                <li className="nav__item" key={href}>
                                    <a href={href} className="nav__link" aria-label={label} title={label}
                                        onClick={() => showMenu(false)}>
                                        <Icon aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button
                        onClick={switchTheme}
                        className="nav__link footer__button"
                        aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
                    >
                        {theme === 'light' ? <RiMoonLine aria-hidden="true" /> : <RiSunLine aria-hidden="true" />}
                    </button>
                </div>
            </aside>

            <button
                type="button"
                className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'}
                onClick={() => showMenu(!toggle)}
                aria-label="Ouvrir ou fermer le menu"
                aria-expanded={toggle}
            >
                <RiMenu2Line aria-hidden="true" />
            </button>
        </>
    );
};

export default Sidebar;
