import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';
import { services } from '../../constants';

const images = [Image1, Image2, Image3];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Ce que je fais</h2>

            <div className="services__container grid">
                {services.map(({ id, title, description }, i) => (
                    <div className="services__card" key={id}>
                        <img src={images[i]} alt="" className="services__img" width="80" height="80" />
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
