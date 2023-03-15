import React from 'react';
import { RxDotsHorizontal } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import img1 from '../../../Components/assets/msc-2.jpg';

const LeftSide = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                        <p className='text-red'>Raihan</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <span><RxDotsHorizontal></RxDotsHorizontal></span>
                    <FaEdit></FaEdit>
                </div>
            </div>
            <div className='flex rounded-full p-1 border-2'>
                <button><BiSearch></BiSearch></button>
                <input type="text" placeholder='Search' className='ml-2 form-control border-none rounded-none' />
            </div>
            <div className='space-x-2'>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                </div>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                </div>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                </div>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                </div>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;