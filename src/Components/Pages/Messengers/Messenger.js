import React, { useEffect, useState } from 'react';
import LeftSide from '../LeftSides/LeftSide';
import RightSide from '../RightSides/RightSide';

const Messenger = () => {
    const [user, setUser] = useState('');
    const [chatFriend, setChatFriend] = useState('');
    // console.log(chatFriend);

    useEffect(() => {
        fetch('https://real-chat-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                // console.log(data)
            });
    }, [])
    return (
        <div className='flex overflow-hidden'>
            <div className='w-56'>
                <LeftSide key={user.id} user={user} setChatFriend={setChatFriend}></LeftSide>
            </div>
            <div className='w-full'>
                <RightSide chatFriend={chatFriend}></RightSide>
            </div>
        </div>
    );
};

export default Messenger;