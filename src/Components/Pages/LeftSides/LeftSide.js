import React from 'react';
import { RxDotsHorizontal } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import img1 from '../../../Components/assets/msc-2.jpg';
import img2 from '../../../Components/assets/msc.jpg';

const LeftSide = ({ user, setChatFriend }) => {

    return (
        <section className='m-2'>
            <div className='flex justify-between'>
                <div className="avatar space-x-4">
                    <div className="w-8 rounded-full">
                        <img src={img1} alt='' />
                    </div>
                    <p className='text-red'>Raihan</p>
                </div>
                <div className='flex justify-between'>
                    <span><RxDotsHorizontal></RxDotsHorizontal></span>
                    <FaEdit></FaEdit>
                </div>
            </div>
            <div className='flex rounded-full p-1 border-2 my-4'>
                <button><BiSearch></BiSearch></button>
                <input type="text" placeholder='Search' className='ml-2 form-control border-none rounded-none' />
            </div>
            <div className='space-x-2'>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img2} alt='' />
                    </div>
                </div>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img2} alt='' />
                    </div>
                </div>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img2} alt='' />
                    </div>
                </div>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img2} alt='' />
                    </div>
                </div>
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src={img2} alt='' />
                    </div>
                </div>
            </div>
            <div className='grid gap-3'>
                {user && user.length > 0 ?
                    user.map(us => <div key={us._id} className="avatar space-x-4 hover:bg-slate-500">
                        <div className="w-8 rounded-full">
                            <img src={img2} alt='' />
                        </div>
                        {/* <p >{us.name}</p>
                    </div>) : 'no friend active' */}
                        <p onClick={() => setChatFriend(us)}>{us.name}</p>
                    </div>) : 'no friend active'
                }
            </div>
        </section>
    );
};

export default LeftSide;