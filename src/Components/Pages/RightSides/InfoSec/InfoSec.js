import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import img1 from '../../../assets/msc.jpg';
import './InfoSec.css';

const InfoSec = () => {
    return (
        <section className='mx-2'>
            <input type="checkbox" id='gallery' />
            <div className=' '>
                <div className="avatar card-actions justify-center">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                </div>
                <p className='text-center' style={{ color: 'rgb(27,238,27)' }}>Active</p>
                <h6 className='text-center'>Rhihan</h6>
            </div>
            <div className='space-y-3'>
                <div className='flex justify-between'>
                    <h6>Customize Chat</h6>
                    <MdKeyboardArrowDown></MdKeyboardArrowDown>
                </div>
                <div className='flex justify-between'>
                    <h6>Privacy & Support</h6>
                    <MdKeyboardArrowDown></MdKeyboardArrowDown>
                </div>
                <div className='flex justify-between'>
                    <h6>Shared Media</h6>
                    <label htmlFor="gallery" className='cursor-pointer'><MdKeyboardArrowDown></MdKeyboardArrowDown></label>
                </div>
            </div>
            <div className='gallery space-y-3 hidden'>
                <img src={img1} alt='' className='h-20' />
                <img src={img1} alt='' className='h-20' />
                <img src={img1} alt='' className='h-20' />
                <img src={img1} alt='' className='h-20' />
                <img src={img1} alt='' className='h-20' />
            </div>
        </section>
    );
};

export default InfoSec;