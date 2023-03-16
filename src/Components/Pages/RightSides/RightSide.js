import React from 'react';
import InfoSec from './InfoSec/InfoSec';
import MessageSec from './MessageSec/MessageSec';
import './MessageSec/MessageSend.css';

const RightSide = () => {
    return (
        <div className='flex m-2'>
            <div className='w-full'>
                <MessageSec></MessageSec>
            </div>
            <div className='w-96 dot'>
                <InfoSec></InfoSec>
            </div>
        </div>
    );
};

export default RightSide;