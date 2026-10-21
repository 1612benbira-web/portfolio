import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { RiMailLine } from 'react-icons/ri';
import { profile } from '../../constants';

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href={profile.github} className="home__social-link" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} className="home__social-link" aria-label="Envoyer un e-mail">
                <RiMailLine aria-hidden="true" />
            </a>
        </div>
    );
};

export default HeaderSocials;
