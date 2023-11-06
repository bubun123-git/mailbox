import React from 'react';
import './EmailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMessage } from '../Store/MailSlice';

function EmailBody({ name, subject, message, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setMail = () => {
    dispatch(openMessage({ name, subject, message, time }));
    navigate('/mailid');
  };

  return (
    <div className='emailbody' onClick={setMail}>
      <div className='emailbody__left'>
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelImportantIcon />
        <h4>{name}</h4>
      </div>
      <div className='emailbody__middle'>
        <div className='emailbody__middle__msg'>
          <p>
            <b>{subject}<br /></b>
            {message}
          </p>
        </div>
      </div>
      <div className='emailbody__right'>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default EmailBody;
