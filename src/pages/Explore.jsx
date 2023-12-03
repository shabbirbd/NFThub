import React from 'react';
import ExploreBody from '../components/ExploreBody';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import RouteHead from '../components/RouteHead';

const Explore = () => {
    const routeData = {title: "Explore", route: "> explore "}

    return (
        <Layout>
            <RouteHead data={routeData}/>
            <ExploreBody/>
            <Newsletter/>
        </Layout>
    );
};

export default Explore;