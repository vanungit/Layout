import React from "react";
import './Works.scss'

function Works() {

    return (
        <>
            <section className="page__work work">
                <div className="work__container _container">
                    <div className="work__content">
                        <div className="work__title">Featured works</div>
                        <div className="work__items">

                            <div className="work__item item-work">
                                <div className="item-work__img"></div>
                                <div className="item-work__body">
                                    <div className="item-work__title">Designing Dashboards</div>
                                    <div className="item-work__info">
                                        <div className="item-work__info-year">2020</div>
                                        <div className="item-work__info-type">Dashboard</div>
                                    </div>
                                    <div className="item-work__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                </div>
                            </div>


                            <div className="work__item item-work">
                                <div className="item-work__img"></div>
                                <div className="item-work__body">
                                    <div className="item-work__title">Designing Dashboards</div>
                                    <div className="item-work__info">
                                        <div className="item-work__info-year">2020</div>
                                        <div className="item-work__info-type">Dashboard</div>
                                    </div>
                                    <div className="item-work__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>

    );
}

export default Works;
