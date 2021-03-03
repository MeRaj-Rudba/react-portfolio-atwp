import React from 'react';

const Blogs = (props) => {
    const { img, id, title, date } = props;
    const link = `blog/${id}`;
    return (

        <div className="blog-post">
            <a href={link} className="blog-post_img">
                <img src={img} alt="" />
            </a>
            <div className="blog-post_info">
                <p className="blog-post_date"><strong>Date:</strong> {date}</p>
                <h1 className="blog-post_title">{title}</h1>
                <a href={link} className="blog-post_cta">Read Article</a>
            </div>
        </div>

    );
};

export default Blogs;