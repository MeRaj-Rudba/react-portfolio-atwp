import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Project from '../Components/Project';
import BlogArticle from './BlogArticle';
import BlogPage from './BlogPage';
import Body from './Body';
const Home = () => {
    return (
        <div>
            <Router>

                <Switch>
                    <Switch>
                        <Route path='/' exact component={Body} />
                        <Route path='/project/:id' exact component={Project} />
                        <Route path='/blog/:id' exact component={BlogArticle} />
                        <Route path='/blogs' exact component={BlogPage} />

                    </Switch>
                </Switch>

            </Router>


        </div>
    );
};

export default Home;