import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdVideocam } from "react-icons/md";
import { BsFillDashCircleFill } from "react-icons/bs";
import img1 from '../../../assets/msc.jpg'
import MessageSend from './MessageSend';
import '../MessageSec/MessageSend.css'

const MessageSec = () => {
    return (
        <section className='m-3'>
            <input type="checkbox" id='dot' />
            <div className='flex justify-between'>
                <div className='flex space-x-4'>
                    <div className="avatar online">
                        <div className="w-8 rounded-full">
                            <img src={img1} alt='' />
                        </div>
                    </div>
                    <p className='text-red'>Raihan</p>
                </div>
                <div className='flex space-x-3'>
                    <span className=''><FaPhoneAlt></FaPhoneAlt></span>
                    <MdVideocam></MdVideocam>
                    <label htmlFor="dot" className='cursor-pointer'><BsFillDashCircleFill></BsFillDashCircleFill></label>
                </div>
            </div>
            <div>
                <p className='text-end'>How are you?</p>
                <div className="avatar space-x-4">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                    <p className='text-red'>I'm fine</p>
                </div>
            </div>
            <div>
                <p className='text-end'>How are you?</p>
                <div className="avatar space-x-4">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                    <p className='text-red'>I'm fine</p>
                </div>
            </div>
            <div>
                <p className='text-end'>How are you?</p>
                <div className="avatar space-x-4">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                    <p className='text-red'>I'm fine</p>
                </div>
            </div>
            <MessageSend></MessageSend>
        </section>
    );
};

export default MessageSec;