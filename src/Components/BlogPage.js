import React from 'react';
import Blogs from './Blogs';

const BlogPage = () => {
    const blogs = [
        {
            blogID: 'b0001',
            title: 'Blog1',
            img1: 'https://images.unsplash.com/photo-1550408483-bafa35b0a433?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            img2: 'https://images.unsplash.com/photo-1532943126512-e2bcf68a488c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            date: '01-01-2021',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
        {
            blogID: 'b0002',
            title: 'Blog2',
            img1: 'https://images.unsplash.com/photo-1614200028498-e61b0119b996?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            img2: 'https://images.unsplash.com/photo-1614200028271-f14639cf0980?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            date: '01-01-2021',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
        {
            blogID: 'b0003',
            title: 'Blog3',
            img1: 'https://images.unsplash.com/photo-1537346439163-eafb59bdc400?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            img2: 'https://images.unsplash.com/photo-1536008758366-72fbc5b16911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            date: '01-01-2021',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
        {
            blogID: 'b0004',
            title: 'Blog4',
            img1: 'https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            img2: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            date: '01-01-2021',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
        {
            blogID: 'b0005',
            title: 'Blog5',
            img1: 'https://images.unsplash.com/photo-1614208533153-cbbe779f6f97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            img2: 'https://images.unsplash.com/photo-1585146435208-5618ac74712f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            date: '01-01-2021',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
    ]





    /**
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
  
    * useEffect(() => {
       fetch("/blogs/allBlogs")
           .then(res => {
               if (res.ok) {
                   return res.json();
               }
           }).then(jsonRes => setBlogs(jsonRes));
       
   }) 
   */

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