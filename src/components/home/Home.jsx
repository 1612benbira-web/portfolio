import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import { profile } from '../../constants';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" width="120" height="120" />
                <h1 className="home__name">{profile.name}</h1>
                <span className="home__education">{profile.role}</span>
                <p className="home__tagline">{profile.tagline}</p>

                <HeaderSocials />

                <a href="#portfolio" className="btn">Voir mes projets</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    );
};

export default Home;
