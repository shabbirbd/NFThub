import React from 'react';
import AboutHero from '../components/AboutHero';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import OurTeam from '../components/OurTeam';
import RouteHead from '../components/RouteHead';
import Statictics from '../components/Statictics';

const About = () => {
    const routeData = {title: "About Us", route: "> about"}

    return (
        <Layout >
            <RouteHead data={routeData}/>
            <AboutHero/>
            <Statictics/>
            <OurTeam/>
            <Newsletter/>
        </Layout>
    );
};

export default About;