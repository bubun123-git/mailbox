import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Welcome = () => {
    return (
        <div className='mailbox'>
            <Header/><br/>
            <Sidebar/>
        </div>
    );
};

export default Welcome;
