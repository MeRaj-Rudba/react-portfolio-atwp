import React from 'react';

const Footer = () => {
    return (
        <footer class="footer">

            <a href="mailto:mrudba@gmail.com" class="footer__link"><i class="far fa-paper-plane"></i> mrudba@gmail.com</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.facebook.com/m.rudba/">
                        <i class="fab fa-facebook"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.linkedin.com/in/mrudba/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.instagram.com/meraj_rudba/">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com/MeRaj-Rudba">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;