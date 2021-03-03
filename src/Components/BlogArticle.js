import React from 'react';
import { useParams } from 'react-router-dom';
//import { useParams } from 'react-router-dom';

const BlogArticle = () => {
    let { id } = useParams();
    /*const [blog, setBlog] = useState([{
        blogID: '',
        title: '',
        img1: '',
        img2: '',
        date: '',
        details: '',
    }]); 
    
    */

    const blog = {
        blogID: 'b0001',
        title: 'Some Blog',
        img1: '',
        img2: '',
        date: '01-01-2021',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate excepturi culpa rerum iste ratione praesentium optio suscipit possimus earum asperiores omnis blanditiis eligendi magnam natus, ex mollitia labore laborum. Asperiores? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate excepturi culpa rerum iste ratione praesentium optio suscipit possimus earum asperiores omnis blanditiis eligendi magnam natus, ex mollitia labore laborum. Asperiores? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate excepturi culpa rerum iste ratione praesentium optio suscipit possimus earum asperiores omnis blanditiis eligendi magnam natus, ex mollitia labore laborum. Asperiores?',
    }







    /*useEffect(() => {
        fetch(`/blogs/allBlogs/${id}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setBlog(jsonRes));
    })
    */
    return (
        <div>
            <section class="intro">
                <h1 class="section__title section__title--intro">
                    <strong>{blog.title}</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">Blog ID: {id}</p>
                <img src={blog.img1} alt="" class="intro__img" />
            </section>

            <div class="portfolio-item-individual">
                <p><strong>Date: </strong> {blog.date}</p>

                <img src={blog.img2} alt="" />
                <p className="section_paragraph">{blog.details}</p>

            </div>
        </div>
    );
};

export default BlogArticle;