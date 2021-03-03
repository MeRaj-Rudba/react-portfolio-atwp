import React from 'react';
import { useParams } from 'react-router-dom';


const Project = () => {
    let { id } = useParams();
    const project = {
        projectID: 'p0002',
        title: 'Project2',
        img1: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
        img2: 'https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
        date: '02-01-2019',
        client: 'Some Company',
        technology: 'Mongo, Express, ReactJs, NodeJs',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
    }

    /**
     * const [project, setProject] = useState([{
        projectID: '',
        title: '',
        img1: '',
        img2: '',
        date: '',
        client: '',
        technology: '',
        details: '',
    }]);
    useEffect(() => {
        fetch(`/projects/allProjects/${id}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setProject(jsonRes));
    })
     */

    return (
        <div>
            <section class="intro">
                <h1 class="section__title section__title--intro">
                    <strong>{project.title}</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">Project Id: {id}</p>
                <img src={project.img1} alt="" class="intro__img" />
            </section>

            <div class="portfolio-item-individual">
                <p><strong>Date: </strong> {project.date}</p>
                <p><strong>Technology: </strong>{project.technology}</p>
                <p><strong>Client: </strong> {project.client}</p>
                <img src={project.img2} alt="" />
                <p className="section_paragraph">{project.details}</p>

            </div>
        </div>
    );
};

export default Project;