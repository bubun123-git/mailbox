import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Welcome.css';
import EmailList from '../EmailList/EmailList';
import Compose from '../Compose/Compose';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../Store/MailSlice';



const Welcome = () => {
    const isMessageisOpen = useSelector(selectSendMessageIsOpen);


    return (
        <div>
            <Header /><br />
            <div className='app__body'>
                <Sidebar />
                <EmailList /><br />
            </div>

            {isMessageisOpen && <Compose />}

        </div>
    );
};

export default Welcome;
