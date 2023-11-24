import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import TopSellers from '../components/TopSellers';

const Home = () => {
    return (
        <Layout>
            <Hero/>
            <TopSellers/>
        </Layout>
    );
};

export default Home;