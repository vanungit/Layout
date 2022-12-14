import React from "react";
import "./App.scss"
import "./iconFonts.scss"
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';




function App() {

    window.onload = function () {

        document.addEventListener("click", documentActions)
        function documentActions(e) {
            const targetElement = e.target


            //burger
            if (targetElement.classList.contains("icon-menu-button")) {
                document.querySelector(".icon-menu").classList.toggle("_active")
                document.querySelector(".menu__body").classList.toggle("_active")
            }
            //

            //Header itersaption
            const headerElement = document.querySelector(".header")

            const callback = function (entries, observer) {
                if (entries[0].isIntersecting) {
                    headerElement.classList.remove("_scroll")
                } else {
                    headerElement.classList.add("_scroll")
                }
            }
            const headerObserver = new IntersectionObserver(callback)
            headerObserver.observe(headerElement)

            //

        }
    }



    return (
        <>
            <Header />
            <Main />

        </>
    );
}

export default App;
