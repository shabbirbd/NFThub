import React from 'react';
import ContactHero from '../components/ContactHero';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import RouteHead from '../components/RouteHead';
import SendMessage from '../components/SendMessage';

const Contact = () => {
    const routeData = {title: "Contuct Us", route: "> contact"}

    return (
        <Layout >
            <RouteHead data={routeData}/>
            <ContactHero/>
            <SendMessage/>
            <Newsletter/>
        </Layout>
    );
};

export default Contact;