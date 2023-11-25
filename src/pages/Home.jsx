import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Process from '../components/Process';
import TopSellers from '../components/TopSellers';

const Home = () => {
    return (
        <Layout>
            <Hero/>
            <TopSellers/>
            <Process/>
        </Layout>
    );
};

export default Home;