import React from "react";
import './Header.scss'

function Header() {




    return (

        <header className="header">
            <div className="header__wrapper">
                <div className="header__container _container">
                    <div className="header__body">
                        <div className="header__main">
                            <a href="" className="header__logo">Funiro.</a>
                            <div className="header-menu menu">
                                <nav className="menu__body">
                                    <ul className="menu__list">
                                        <li className="menu__item"><a className="menu__list-link" href="">Product</a>
                                            <button type="button" className="menu__arrow _icon-arrow-down"></button>
                                            <ul className="menu__sub-list">
                                                <li className="menu__sub-item"><a href="" className="menu__sub-link">Product 1</a></li>
                                                <li className="menu__sub-item"><a href="" className="menu__sub-link">Product 2</a></li>
                                                <li className="menu__sub-item"><a href="" className="menu__sub-link">Product 3</a></li>
                                                <li className="menu__sub-item"><a href="" className="menu__sub-link">Product 4</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu__item"><a className="menu__list-link" href="">Rooms</a>
                                            <button type="button" className="menu__arrow _icon-arrow-down"></button>
                                            <ul className="menu__sub-list">
                                                <li className="menu__sub-item"><a href="" className="menu__sub-link">Room 1</a></li>
                                                <li className="menu__sub-item"><a href="" className="menu__sub-link">Room 2</a></li>
                                                <li className="menu__sub-item"><a href="" className="menu__sub-link">Room 3</a></li>
                                                <li className="menu__sub-item"><a href="" className="menu__sub-link">Room 4</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu__item"><a className="menu__list-link" href="">Insoiratuibns</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header__search">
                            <div className="search-form">
                                <button className="search-form__icon _icon-search"></button>
                                <form action="#" className="search-form__item">
                                    <button className="search-form__btn _icon-search" ></button>
                                    <input autocomplete="off" type="text" name="form[]" className="search-form__input" placeholder="search fomr minimalist chair"></input>

                                </form>
                            </div>
                        </div>
                        <div className="header__actions actions-header">
                            <a href="" className="action-header__item action-header__item_favorites _icon-fovorites"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 2.5H2.65424C3.13263 2.5 3.37183 2.5 3.56628 2.58674C3.73771 2.66321 3.88415 2.78638 3.98886 2.94217C4.10763 3.11888 4.14862 3.35454 4.23058 3.82585L4.6087 6M4.6087 6L5.49173 11.0774C5.67091 12.1077 5.7605 12.6228 6.02583 12.9939C6.25945 13.3207 6.58606 13.5695 6.96311 13.708C7.39133 13.8654 7.91176 13.815 8.95264 13.7143L18.614 12.7793C19.6298 12.681 20.1378 12.6318 20.5221 12.4033C20.8653 12.1993 21.1395 11.8972 21.3095 11.536C21.5 11.1314 21.5 10.6211 21.5 9.6005V9.6005C21.5 8.51582 21.5 7.97348 21.2922 7.55394C21.1068 7.17971 20.809 6.8729 20.4404 6.67654C20.0272 6.4564 19.4851 6.44036 18.4009 6.40826L4.6087 6Z" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                <circle cx="8.5" cy="19" r="2" stroke="#262F56" stroke-width="1.8" />
                                <circle cx="18" cy="19" r="2" stroke="#262F56" stroke-width="1.8" />
                            </svg>
                            </a>

                            <a href="" className="action-header__item action-header__item_user _big">
                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9996 19.0542C-8 8.00003 5.99999 -3.99997 11.9996 3.58809C18 -3.99997 32 8.00003 11.9996 19.0542Z" stroke="#262F56" stroke-width="1.8" />
                                </svg>
                            </a>
                            <a href="#" className="_icon-card"></a>

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
