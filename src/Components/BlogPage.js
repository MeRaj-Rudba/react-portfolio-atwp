import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([{
        blogID: '',
        title: '',
        img1: '',
        img2: '',
        date: '',
        client: '',
        technology: '',
        details: '',
    }])
    useEffect(() => {
        fetch("/blogs/allBlogs")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setBlogs(jsonRes));
        
    })
    
    return (
        <section class="my-blog" >
            <h2 class="section__title section__title--work">My Blogs</h2>
            <p class="section__subtitle section__subtitle--work">My thoughts</p>

            <div class="my_blog_page">
                {

                    blogs.map(blog => <Blogs
                        img={blog.img1}
                        title={blog.title}
                        id={blog.blogID}
                        date={blog.date}
                    />)
                }


            </div>
        </section>
    );
};

export default BlogPage;