import React from 'react';
import Nav from './Nav';
import myLogo from "../img/my-logo.png";

const Header = (props) => {
    const { toggle, setToggle } = props;
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <header>
            <a href="/#home" class="logo">
                <img src={myLogo} alt="" />
            </a >
            <button onClick={handleToggle} class="nav-toggle" aria-label="toggle navigation">
                <span class="hamburger"></span>
            </button>
            <Nav
                toggle={toggle}
                setToggle={setToggle}
                handleToggle={handleToggle}
            />
        </header>
    );
};

export default Header;