import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/CV_Ben_Birama_Bop.pdf';
import AboutBox from './AboutBox';
import { about } from '../../constants';

const About = () => {
    const [intro, work, techIntro] = about.paragraphs;

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">À propos</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            {intro}<br /><br />
                            {work}<br /><br />
                            {techIntro}
                        </p>
                        <ul className="about__list">
                            {about.tech.map((t) => <li key={t}>{t}</li>)}
                        </ul>
                        <a className="btn" href={Resume} target="_blank" rel="noreferrer" download="CV_Ben_Birama_Bop.pdf">
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;
