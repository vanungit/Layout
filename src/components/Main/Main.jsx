import React from "react";
import './Main.scss'

function Main() {



    return (
        <>
            <section className="page__main-slider main-slider">
                <div className="main-slider__container _container">
                    <div className="main-slider__body">
                        <div className="main-slider__content content-main">
                            <h1 className="content-main__title">High-Quality
                                Furniture Just
                                For You</h1>
                            <div className="content-main__text">Our furniture is made from selected and best quality materials that are suitable for your dream home</div>
                            <a href="" className="content-main__button btn">Shop Now</a>
                        </div>
                        <div className="main-slider__slider slider-main">
                            <div className="slider-main__controls controls-slider-main">
                                <div className="control-slider-main__dotts">
                                    <span className="control-slider-main__dott control-slider-main__dott-active"></span>
                                    <span className="control-slider-main__dott"></span>
                                    <span className="control-slider-main__dott"></span>
                                    <span className="control-slider-main__dott"></span>

                                </div>
                                <div className="control-slider-main__arrows slider-arrows">
                                    <button type="button" className="slider-arrow slider-arrow_prev-btn _icon-arrow-down"><span className="slider-arrow_prev"></span></button>
                                    <button type="button" className="slider-arrow slider-arrow_next-btn _icon-arrow-down"><span className="slider-arrow_next"></span></button>

                                </div>
                            </div>
                            <div className="slider-main__body _swiper">
                                <div className="slider-main__slide">
                                    <div className="slider-main__image _ibg">
                                    </div>
                                    <a href="" className="slider-main__content">
                                        <div className="slider-main__title">Bohauss</div>
                                        <div className="slider-main__text">Luxury big sofa 2-seat</div>
                                        <div className="slider-main__prices ">
                                            <div className="slider-main__price ">Rp 17.000.000</div>
                                            <div className="slider-main__price-arrow _icon-arrow-down"></div></div>
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>


            </section>
        </>

    );
}

export default Main;
