import React from 'react';
import logo from '../images/logo.svg'

function Header() {
    return (
        <section className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a href="/" className="header-logo">
                        <img className="header-logo__image" src={logo} alt="logo"/>
                    </a>

                    <div className="header-nav">
                        <a href="#" className="header-nav__link">Home</a>
                        <a href="#" className="header-nav__link">What is BitFreezeer</a>
                        <a href="#" className="header-nav__link">Our Values</a>
                        <a href="#" className="header-nav__link header-nav__link_active">Features</a>
                        <a href="#" className="header-nav__link">Get Started</a>
                        <a href="#" className="header-nav__link">Price Plans</a>
                        <a href="#" className="header-nav__link">Web App</a>
                        <a href="#" className="header-nav__link">Testimonials</a>
                        <a href="#" className="header-nav__link">FAQ</a>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Header;
