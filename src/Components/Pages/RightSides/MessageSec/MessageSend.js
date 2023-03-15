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
            <div className='flex space-x-2'>
                <div>
                    <input type="checkbox" id='emoji' />
                    <BsPlusCircle></BsPlusCircle>
                </div>
                <div>
                    <input type="file" id='pic' className='form-control hidden' />
                    <label htmlFor="pic" className='relative' style={{ hover: "add" }}><TfiGallery></TfiGallery></label>
                </div>
                <div>
                    <BiCommentEdit></BiCommentEdit>
                </div>
                <div>
                    <AiOutlineGift></AiOutlineGift>
                </div>
                <div className='flex'>
                    <input type="text" placeholder='Aa' className='form-control rounded-lg border-2' />
                    <label htmlFor="emoji">🙂</label>
                </div>
                <div>
                    ❤
                </div>
                <div className='emoji-sec'>
                    {
                        emojis.map(e => <span>{e}</span>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MessageSend;