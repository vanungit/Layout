import React from "react";
import './Footer.scss'

function Footer() {


    return (
        <>
            <footer className="page__footer footer">
                <div className="footer__container _container">
                    <div className="footer__content">
                        <div className="footer__social social">
                            <div className="social__item _icon-fb"></div>
                            <div className="social__item _icon-group"></div>
                            <div className="social__item _icon-insta"></div>
                            <div className="social__item _icon-lk"></div>
                        </div>
                        <div className="footer__copy">Copyright ©2020 All rights reserved </div>
                    </div>

                </div>

            </footer>
        </>

    );
}

export default Footer;
