import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdVideocam } from "react-icons/md";
import { BsFillDashCircleFill } from "react-icons/bs";
import img1 from '../../../assets/msc.jpg'

const MessageSec = () => {
    return (
        <section>
            <div className='flex justify-between'>
                <div className="avatar space-x-4">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                    <p className='text-red'>Raihan</p>
                </div>
                <div className='flex space-x-3'>
                    <FaPhoneAlt></FaPhoneAlt>
                    <MdVideocam></MdVideocam>
                    <BsFillDashCircleFill></BsFillDashCircleFill>
                </div>
            </div>
        </section>
    );
};

export default MessageSec;