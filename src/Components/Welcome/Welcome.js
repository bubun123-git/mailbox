import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';





const Welcome = () => {
    return (
        <div className='mailbox'>
            <Header/><br/>
            <div className='app__body'>
            <Sidebar/>
            </div>
        </div>
    );
};

export default Welcome;
