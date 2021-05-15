import React from 'react';
import './Navbar.css';

function NavBar() {
    return (
        <header className="navbar_header">
            <nav className="navbar_nav">
                <div className="navbar_logo">
                    <img id="logo" src="https://img.icons8.com/ios-filled/50/4a90e2/circled-b.png" height="50" width="50" alt="brijesh logo"/>
                </div>
                <div className="navbar_links">
                    <ol className="ordered_list">
                        <li><a href="/about">About</a></li>
                        <li><a href="/experience">Experience</a></li>
                        <li><a href="/about">Projects</a></li>
                        <li><a href="/about">Contact</a></li>
                    </ol>
                    <div className="resume">
                        <a className="Resume_Button" targer="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
                <div className="navbar_menu">
                    <a className="Menu_Button" targer="_blank" rel="noopener noreferrer">Menu</a>
                </div>
                <aside aria-hidden="true" tabIndex="-1" className="menu_tab">
                    <nav>
                        <ol>
                            <li><a href="/about">About</a></li>
                            <li><a href="/experience">Experience</a></li>
                            <li><a href="/about">Projects</a></li>
                            <li><a href="/about">Contact</a></li>
                        </ol>
                        <div className="resume">
                            <a className="Resume_Button" targer="_blank" rel="noopener noreferrer">Resume</a>
                        </div>
                    </nav>
                </aside>
            </nav>
        </header>
    )
}

export default NavBar
