import React from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
import { BiCommentEdit } from "react-icons/bi";

const MessageSend = () => {
    return (
        <section>
            <div>
                <div>
                    <BsPlusCircle></BsPlusCircle>
                </div>
                <div>
                    <input type="file" id='pic' className='form-control' />
                    <TfiGallery></TfiGallery>
                </div>
                <div>
                    <BiCommentEdit></BiCommentEdit>
                </div>
                <div>
                    <AiOutlineGift></AiOutlineGift>
                </div>
                <div>
                    <input type="text" placeholder='Aa' className='form-control border-2' />
                    <label htmlFor="emoji">🙂</label>
                </div>
                <div>
                    ❤
                </div>
            </div>
        </section>
    );
};

export default MessageSend;