import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import NftSlider from '../components/NftSlider';
import Process from '../components/Process';
import TopSellers from '../components/TopSellers';

const Home = () => {
    return (
        <Layout>
            <Hero/>
            <TopSellers/>
            <Process/>
            <NftSlider/>
        </Layout>
    );
};

export default Home;