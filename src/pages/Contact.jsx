import React from 'react';
import ContactHero from '../components/ContactHero';
import Layout from '../components/Layout';
import RouteHead from '../components/RouteHead';

const Contact = () => {
    const routeData = {title: "Contuct Us", route: "> contact"}

    return (
        <Layout >
            <RouteHead data={routeData}/>
            <ContactHero/>
        </Layout>
    );
};

export default Contact;