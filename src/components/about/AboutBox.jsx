import React from 'react';
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';
import { about } from '../../constants';

const icons = [RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine];

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            {about.stats.map(({ value, label }, i) => {
                const Icon = icons[i];
                return (
                    <div className="about__box" key={label}>
                        <Icon className="about__icon" aria-hidden="true" />
                        <div>
                            <h3 className="about__title">{value}</h3>
                            <span className="about__subtitle">{label}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AboutBox;
