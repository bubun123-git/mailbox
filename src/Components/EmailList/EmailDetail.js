import React from 'react';
import './EmailList.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, Avatar } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectedMail } from '../Store/MailSlice';

function EmailDetail() {
  const navigate = useNavigate();
  const mail = useSelector(selectedMail);

  const handleEmailClick = () => {
    navigate('/sent');
  };

  return (
    <div className='emaildetails'>
      <div className='emailList__setting'>
        <div className='emailList__settingsLeft'>
          <IconButton onClick={handleEmailClick}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className='emailList__settingsRight'>
          <p>
            1 - 50 of 100
          </p>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className='emaildetails_header'>
        <div className='emaildetails_headerLeft'>
          <h4>{mail?.subject}</h4>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
        </div>
        <div className='emaildetails_headerRight'>
          <IconButton>
            <LaunchIcon />
          </IconButton>
        </div>
      </div>

      <div className='emaildetails_middleheader'>
        <div className='emaildetails_middleheaderLeft'>
          <IconButton>
            <Avatar />
          </IconButton>
          <h4>{mail?.subject}</h4>
          <p>{mail?.name}</p>
        </div>
        <div className='emaildetails_middleheaderRight'>
          <p>{mail?.time}</p>
          <IconButton>
            <StarIcon />
          </IconButton>
          <IconButton>
            <ReplyIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='emaildetails__body'>
        <p>{mail?.message}</p>
      </div>
    </div>
  );
}

export default EmailDetail;
