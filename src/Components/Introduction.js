import React from 'react';
import img1 from '../img/img1.JPG'

const Introduction = () => {
    


    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>MeRaj Rudba</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src={img1} alt="Me smiling" className="intro__img" />
        </section>
    );
};

export default Introduction;