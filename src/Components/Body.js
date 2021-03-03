import React from 'react';
import AboutMe from './AboutMe';
import Introduction from './Introduction';
import MyBlogs from './MyBlogs';
import MyWorks from './MyWorks';
import Services from './Services';

const Body = () => {
    return (
        <>
            <Introduction/>
            <Services/>
            <AboutMe/>
            <MyWorks/>
            <MyBlogs/>

        </>
    );
};

export default Body;