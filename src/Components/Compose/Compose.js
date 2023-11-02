import React from 'react'
import './Compose.css'
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../Store/MailSlice';
import { useState } from 'react';
import { db } from '../../Firebase';
import firebase from 'firebase/compat/app';


 



function Compose() {
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState(""); 
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const formSubmit = (event) => {
        event.preventDefault();
        if (to.trim() === "") { 
            return alert("Please Enter Recipient's Email Address"); 
        }
        if (subject.trim() === "") {
            return alert("Please Enter Subject");
        }
        if (message.trim() === "") {
            return alert("Please Enter Message");
        }

        db.collection('emails').add({
            to,
            subject,
            message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert("Email sent successfully");
    };

    return (
        <div className='compose'>
            <div className='compose__header'>
                <div className='compose__header__left'>
                    <span></span>
                </div>
                <div className='compose__header__right'>
                    <RemoveIcon />
                    <HeightIcon />
                    <CloseIcon onClick={() => dispatch(closeSendMessage())} />
                </div>
            </div>
            <form onSubmit={formSubmit}>
                <div className='compose__body'>
                    <div className='compose__bodyform'>
                        <input type="email" placeholder='Recipient' value={to} onChange={(e) => setTo(e.target.value)} />
                        <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea rows="20" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>
                <div className='compose__footer'>
                    <div className='compose__footer__left'>
                        <button type="submit">Send <ArrowDownwardIcon /></button>
                    </div>
                    <div className='compose__footer__right'>
                        <FormatColorTextIcon />
                        <AttachFileIcon />
                        <LinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <PhotoIcon />
                        <PhonelinkLockIcon />
                        <CreateIcon />
                        <MoreVertIcon />
                        <DeleteIcon />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Compose;