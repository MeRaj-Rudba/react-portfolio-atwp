import React, { useEffect, useState } from 'react';

import Work from './Work';

const MyWorks = () => {
    const [projects, setProjects] = useState([{
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