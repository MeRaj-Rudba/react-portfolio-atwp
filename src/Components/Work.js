import React from 'react';

const Work = (props) => {
    const { img, id } = props;
    const link = `project/${id}`;
    return (
        <a href={link} class="portfolio__item">
            <img src={img} alt="" class="portfolio__img" />
        </a>
    );
};

export default Work;