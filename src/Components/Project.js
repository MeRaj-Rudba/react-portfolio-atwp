import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Project = () => {
    let { id } = useParams();
    const [project, setProject] = useState([{
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