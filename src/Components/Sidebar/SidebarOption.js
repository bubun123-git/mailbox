import React from 'react';
import './SidebarOption.css';
function SidebarOption({ Icon, title, number }) {
    return (
        <div className='sidebarOptions'>
            <Icon />
            <h2>{title}</h2>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption;
