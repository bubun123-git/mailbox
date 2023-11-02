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

function Compose() {
    const dispatch= useDispatch();
    return (
        <div className='compose'>
            <div className='compose__header'>
                <div className='compose__header__left'>
                    <span></span>
                </div>
                <div className='compose__header__right'>
                    <RemoveIcon />
                    <HeightIcon />
                    <CloseIcon onClick={()=> dispatch(closeSendMessage())} />

                </div>
            </div>
            <div className='compose__body'>
                <div className='compose__bodyform'>
                    <input type="email" placeholder='Reciepient' />
                    <input type="text" placeholder='Subject' />
                    <textarea rows="20"> </textarea>
                </div>
            </div>
            <div className='compose__footer'>
                <div className='compose__footer__left'>
                    <button type="submit" >Send <ArrowDownwardIcon /></button>
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
        </div>
    )
}

export default Compose