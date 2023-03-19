import React, { useEffect, useState } from 'react';
import LeftSide from '../LeftSides/LeftSide';
import RightSide from '../RightSides/RightSide';

const Messenger = () => {
    const [user, setUser] = useState('');
    const [chatFriend, setChatFriend] = useState('');
    const [message, setMessage] = useState('');

    const inputHandle = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = e => {
        e.preventDefault();
        console.log(message)
    }

    useEffect(() => {
        fetch('https://real-chat-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                // console.log(data)
            });
    }, []);

    useEffect(() => {
        if (user && user.length > 0) {
            setChatFriend(user[0])
        }
    }, [user])

    return (
        <div className='flex overflow-hidden'>
            <div className='w-56'>
                <LeftSide key={user.id} user={user} setChatFriend={setChatFriend}></LeftSide>
            </div>
            <div className='w-full'>
                <RightSide
                    chatFriend={chatFriend}
                    message={message}
                    inputHandle={inputHandle}
                    sendMessage={sendMessage}
                ></RightSide>
            </div>
        </div>
    );
};

export default Messenger;