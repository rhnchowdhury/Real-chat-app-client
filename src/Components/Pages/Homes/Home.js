import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <audio className='mt-20'>
                <source src="sample.mp3" type="audio/mpeg"></source>
            </audio>
        </div>
    );
};

export default Home;