import React from 'react';
import Courese from '../Coureses/Courese';
import Header from '../Header/Header';
import HomeAbout from '../HomeAbout/HomeAbout';

const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <HomeAbout/>
            <Courese/>
        </div>
    );
};

export default Home;