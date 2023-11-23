import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout page={'/'}>
            <Hero/>
        </Layout>
    );
};

export default Home;