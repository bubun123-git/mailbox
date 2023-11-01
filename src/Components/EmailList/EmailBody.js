import React from 'react'
import './EmailList.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';


function EmailBody() {
    return (
        <div className='emailbody'>
            <div className='emailbody__left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelImportantIcon />
            </div>
            <div className='emailbody__middle'>
                <div className='emailbody__middle__msg'>
                <p><b>Subject</b>This is a message</p>
                </div>
            </div>
            <div className='emailbody__right'>

            </div>
        </div>
    )
}

export default EmailBody