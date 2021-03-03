import React from 'react';

const Nav = (props) => {
    const {  handleToggle } = props;
    return (
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a onClick={handleToggle} href="/#home" class="nav__link">Home</a></li>
                <li class="nav__item"><a onClick={handleToggle} href="/#services" class="nav__link">My Services</a></li>
                <li class="nav__item"><a onClick={handleToggle} href="/#about" class="nav__link">About me</a></li>
                <li class="nav__item"><a onClick={handleToggle} href="/#work" class="nav__link">My Work</a></li>
                <li class="nav__item"><a onClick={handleToggle} href="/#blogs" class="nav__link">Blog</a></li>
            </ul>
        </nav>
    );
};

export default Nav;