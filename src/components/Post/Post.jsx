import React from "react";
import './Post.scss'

function Post() {

    return (
        <>
            <section className="page__post post">
                <div className="post__container _container">
                    <div className="post__content">
                        <div className="post__items">
                            <div className="post__item item-post">
                                <div className="item-post__subtitle">Recent posts</div>
                                <div className="item-post__body">
                                    <div className="item-post__title">Making a design system from scratch</div>
                                    <div className="item-post__date post-date">
                                        <div className="post-date__one">12 Feb 2020</div>
                                        <div className="post-date__separator"></div>
                                        <div className="post-date__tu">12 Feb 2020</div>
                                    </div>
                                    <div className="item-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                </div>
                            </div>
                            <div className="post__item item-post">
                                <div className="item-post__subtitle">Recent posts</div>
                                <div className="item-post__body">
                                    <div className="item-post__title">Making a design system from scratch</div>
                                    <div className="item-post__date post-date">
                                        <div className="post-date__one">12 Feb 2020</div>
                                        <div className="post-date__separator"></div>
                                        <div className="post-date__tu">12 Feb 2020</div>
                                    </div>
                                    <div className="item-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}

export default Post;
