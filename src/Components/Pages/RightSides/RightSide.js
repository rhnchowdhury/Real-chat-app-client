import React from 'react';
import InfoSec from './InfoSec/InfoSec';
import MessageSec from './MessageSec/MessageSec';

const RightSide = () => {
    return (
        <div className='flex'>
            <div className='w-full'>
                <MessageSec></MessageSec>
            </div>
            <div className='w-56'>
                <InfoSec></InfoSec>
            </div>
        </div>
    );
};

export default RightSide;