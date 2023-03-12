import React from 'react';
import Hero from '../Hero';
import SideBar from '../SideBar/SideBar';

const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className='w-56'>
                <SideBar></SideBar>
            </div>
            <div className='w-full'>
                <Hero></Hero>
            </div>
        </div>
    );
};

export default Home;