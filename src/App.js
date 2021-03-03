import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Project from './Components/Project';
import BlogPage from './Components/BlogPage';
import BlogArticle from './Components/BlogArticle';
//import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <Router>
      <div className={`${toggle ? "nav-open" : ""}`}>
        <Header
          toggle={toggle}
          setToggle={setToggle}
        />
        <Switch>
          <Route path='/' exact component={Body} />
          <Route path='/project/:id' exact component={Project} />
          <Route path='/blog/:id' exact component={BlogArticle} />
          <Route path='/blogs' exact component={BlogPage} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
