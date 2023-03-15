import React from 'react';
import LeftSide from '../LeftSides/LeftSide';
import RightSide from '../RightSides/RightSide';

const Messenger = () => {
    return (
        <div className='flex overflow-hidden'>
            <div className='w-56'>
                <LeftSide></LeftSide>
            </div>
            <div className='w-full'>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default Messenger;