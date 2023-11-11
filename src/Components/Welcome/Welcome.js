import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Welcome.css';
import EmailList from '../EmailList/EmailList';
import Compose from '../Compose/Compose';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../Store/MailSlice';
import EmailDetail from '../EmailList/EmailDetail'
import { Route, Routes } from "react-router-dom";


const Welcome = () => {
    const isMessageisOpen = useSelector(selectSendMessageIsOpen);


    return (
        <div>
            <Header /><br />
            <div className='app__body'>
                <Sidebar />
                <Routes>
                    
                    <Route path="/mailid" element={<EmailDetail />} />
                   
                </Routes>
            </div>
            {isMessageisOpen && <Compose />}
        </div>
    );
};

export default Welcome;