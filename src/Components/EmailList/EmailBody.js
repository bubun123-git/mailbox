import React from 'react'
import './EmailList.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';


function EmailBody(props) {
    const { name, subject, message, time } = props;
  
    return (
      <div className='emailbody'>
        <div className='emailbody__left'>
          <CheckBoxOutlineBlankIcon />
          <StarBorderIcon />
          <LabelImportantIcon />
          <h4>{name}</h4>
        </div>
        <div className='emailbody__middle'>
          <div className='emailbody__middle__msg'>
            <p><b>{subject}<br/></b>{message}</p>
          </div>
        </div>
        <div className='emailbody__right'>
          <p>{time}</p>
        </div>
      </div>
    );
  }

export default EmailBody