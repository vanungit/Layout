import React from "react";
import './Header.scss'

function Header() {




    return (

        <header className="header">
            <div className="header__wrapper">
                <div className="header__container _container">
                    <div className="header__body">
                        <div className="header__main">
                            <div className="header-menu menu">
                                <nav className="menu__body">
                                    <ul className="menu__list">
                                        <li className="menu__item"><a className="menu__list-link" href="">Works</a>

                                        </li>
                                        <li className="menu__item"><a className="menu__list-link" href="">Blog</a>

                                        </li>
                                        <li className="menu__item"><a className="menu__list-link" href="">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* burger */}
                        <button type="button" className="menu-icon icon-menu icon-menu-button ">
                            <span className="icon-menu icon-menu-button"></span><span className="icon-menu icon-menu-button"></span><span className="icon-menu icon-menu-button"></span>
                        </button>
                        {/* burger */}
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
