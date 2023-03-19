import React from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
import { BiCommentEdit } from "react-icons/bi";
import './MessageSend.css';

const MessageSend = () => {
    const emojis = [
        '😀', '😂', '😅', '😎', '😊', '😍', '😐', '😮', '🤨',
        '🙂', '🙄', '😛', '😜', '🤑', '😭', '😩', '😡', '😱', '🤧'
    ]
    return (
        <section>
            <div className='flex justify-evenly'>
                <div>
                    <input type="checkbox" id='emoji' />
                    <BsPlusCircle></BsPlusCircle>
                </div>
                <div>
                    <input type="file" id='pic' className='form-control hidden' />
                    <label htmlFor="pic" className='cursor-pointer'><TfiGallery></TfiGallery></label>
                </div>
                <div>
                    <BiCommentEdit></BiCommentEdit>
                </div>
                <div>
                    <AiOutlineGift></AiOutlineGift>
                </div>
                <div className='flex'>
                    <input type="text" placeholder='Aa' className='form-control rounded-lg border-2' />
                    <label htmlFor="emoji" className='cursor-pointer'>🙂</label>
                </div>
                <div>
                    ❤
                </div>
                <div className='emoji-sec'>
                    {
                        emojis.map(e => <span key={e.id}>{e}</span>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MessageSend;