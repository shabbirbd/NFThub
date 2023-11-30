import React from 'react';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import Process from '../components/Process';
import RouteHead from '../components/RouteHead';
import Wallets from '../components/Wallets';

const Wallet = () => {
    const routeData = {title: "Wallet Connect", route: "> wallet"}

    return (
        <Layout >
            <RouteHead data={routeData}/>
            <Wallets/>
            <Process/>
            <Newsletter/>
        </Layout>
    );
};

export default Wallet;