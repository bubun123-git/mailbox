import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Welcome.css';
import EmailList from '../EmailList/EmailList';





const Welcome = () => {
    return (
        <div>
            <Header /><br />
            <div className='app__body'>
                <Sidebar />
                <EmailList/><br/>
            </div>
            
        </div>
    );
};

export default Welcome;
