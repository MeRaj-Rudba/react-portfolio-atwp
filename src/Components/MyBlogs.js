import React from 'react';
import img from '../img/portfolio-09.jpg'

const MyBlogs = () => {

    return (

        <section class="about-me" id="blogs">
            <h2 class="section__title section__title--about">My Blogs</h2>
            <p class="section__subtitle section__subtitle--about"></p>

            <div class="about-me__body">
                <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="/blogs" class="btn">Read Blogs</a>
            </div>

            <img src={img} alt="" class="about-me__img" />
        </section>
    );
};

export default MyBlogs;