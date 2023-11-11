import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../Store/MailSlice';

import { Link } from 'react-router-dom'


function Sidebar() {

    const dispatch = useDispatch();
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon />} className='compose__btn' onClick={() => dispatch(openSendMessage())}>
                <h3>Compose</h3>
            </Button>
            <br />
            <SidebarOption Icon={InboxIcon} title="Inbox" number={1} />
            <Link to="/sent">
                <SidebarOption Icon={SendIcon} title="Sent" number={1} />
            </Link>
        </div>
    );
}

export default Sidebar;
