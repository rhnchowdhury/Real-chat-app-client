import React from 'react';
import img1 from '../../../assets/banner.jpg';

const InfoSec = () => {
    return (
        <section>
            <div>
                <div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                </div>
                <p className='text-red'>Raihan</p>
            </div>
        </section>
    );
};

export default InfoSec;