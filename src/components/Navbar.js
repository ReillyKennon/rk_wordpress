import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="blue">
                    <div className="nav-wrapper">
                        <a className="brand-logo center">RK React Boilerplate</a>
                        <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars">Menu</i></a>
                        <ul className="right hide-on-small-only">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                        <ul className="side-nav" id="main-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;