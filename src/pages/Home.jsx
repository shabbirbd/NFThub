import React from 'react';
import Auction from '../components/Auction';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import NftSlider from '../components/NftSlider';
import Process from '../components/Process';
import QNA from '../components/QNA';
import TopSellers from '../components/TopSellers';

const Home = () => {
    return (
        <Layout container>
            <Hero/>
            <TopSellers/>
            <NftSlider/>
            <Process/>
            <Featured/>
            <Auction/>
            <QNA/>
        </Layout>
    );
};

export default Home;