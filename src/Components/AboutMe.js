import React from 'react';
import img from '../img/img5.jpg';

const AboutMe = () => {
    return (
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Designer & developer based out of Bangladesh</p>

            <div class="about-me__body">
                <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="https://drive.google.com/uc?id=1ArFwWHkQ0nvLEM3j6HCOH-J-1zqNb6Ex&export=download" class="btn" download="myResume">See Resume</a>
            </div>

            <img src={img} alt="" class="about-me__img" />
        </section>
    );
};

export default AboutMe;