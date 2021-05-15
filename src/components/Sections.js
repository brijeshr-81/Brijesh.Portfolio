import React from 'react'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import './Sections.css'

function Sections() {
    return (
        <div id="content">
            <main className="sections">
            <section className="intro">
                <div className="fadeup d1">
                    <h1> Hi, My name is </h1>
                </div>
                <div className="fadeup d2">
                    <h2 className="big_name">Brijesh R</h2>
                </div>

                <div className="fadeup d3">
                    <h3 className="big_name">I build things for the web</h3>
                </div>

                <div className="fadeup d4">
                    <p className="">I'm a Bengaluru, India-based software engineer who specializes in building Websites. Currently, I'm an engineer at Advanced. focused on building accessible, health products.</p>
                </div>

                <div className="fadeup d3">
                    <a href="mailto:brijeshr18@outlook.com" class="email-link">Get In Touch</a>
                </div>
            </section>
                <About className="about_section"/>
                <Experience className="exp_section"/>
                <Projects className="projects_section"/>
                <Contact className="contact_section"/>
            </main>
        </div>
    )
}

export default Sections
