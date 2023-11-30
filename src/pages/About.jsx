import React from 'react';
import AboutHero from '../components/AboutHero';
import Layout from '../components/Layout';
import RouteHead from '../components/RouteHead';

const About = () => {
    const routeData = {title: "About Us", route: "> about"}

    return (
        <Layout >
            <RouteHead data={routeData}/>
            <AboutHero/>
        </Layout>
    );
};

export default About;