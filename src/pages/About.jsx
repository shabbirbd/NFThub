import React from 'react';
import Layout from '../components/Layout';
import RouteHead from '../components/RouteHead';

const About = () => {
    const routeData = {title: "About Us", route: "> about"}

    return (
        <Layout >
            <RouteHead data={routeData}/>
            
        </Layout>
    );
};

export default About;