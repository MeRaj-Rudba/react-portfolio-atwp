import React, { useEffect, useState } from 'react';

import Work from './Work';

const MyWorks = () => {
    const projects = [
        {
            projectID: 'p0001',
            title: 'Project1',
            img1: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            img2: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            date: '02-01-2019',
            client: 'Some Company',
            technology: 'Mongo, Express, ReactJs, NodeJs',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
        {
            projectID: 'p0002',
            title: 'Project2',
            img1: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            img2: 'https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            date: '02-01-2019',
            client: 'Some Company',
            technology: 'Mongo, Express, ReactJs, NodeJs',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
        {
            projectID: 'p0003',
            title: 'Project3',
            img1: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            img2: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            date: '02-01-2019',
            client: 'Some Company',
            technology: 'Mongo, Express, ReactJs, NodeJs',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
        {
            projectID: 'p0004',
            title: 'Project4',
            img1: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            img2: 'https://images.unsplash.com/photo-1484415063229-3d6335668531?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            date: '02-01-2019',
            client: 'Some Company',
            technology: 'Mongo, Express, ReactJs, NodeJs',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
        {
            projectID: 'p0005',
            title: 'Project5',
            img1: 'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            img2: 'https://images.unsplash.com/photo-1519119012096-c145def61801?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
            date: '02-01-2019',
            client: 'Some Company',
            technology: 'Mongo, Express, ReactJs, NodeJs',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
        },
    ]
    /**
     * const [projects, setProjects] = useState([{
        projectID: '',
        title: '',
        img1: '',
        img2: '',
        date: '',
        client: '',
        technology: '',
        details: '',
    }])
    useEffect(() => {
        fetch("/projects/allProjects")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setProjects(jsonRes));
    })

     * 
     * 
     */
    return (
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div class="portfolio">
                {
                    projects.map(project => <Work
                        img={project.img1}
                        id={project.projectID}
                    />)
                }


            </div>
        </section>
    );
};

export default MyWorks;