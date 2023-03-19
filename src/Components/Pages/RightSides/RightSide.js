import React from 'react';
import InfoSec from './InfoSec/InfoSec';
import MessageSec from './MessageSec/MessageSec';
import './MessageSec/MessageSend.css';

const RightSide = ({ chatFriend, inputHandle, message, sendMessage }) => {
    // console.log(chatFriend)

    return (
        <div className='flex m-2'>
            <div className='w-full'>
                <MessageSec chatFriend={chatFriend}
                    message={message}
                    inputHandle={inputHandle}
                    sendMessage={sendMessage}
                ></MessageSec>
            </div>
            <div className='w-96 dot'>
                <InfoSec chatFriend={chatFriend}></InfoSec>
            </div>
        </div>
    );
};

export default RightSide;