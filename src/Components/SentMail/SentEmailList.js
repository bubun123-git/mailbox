// SentMail.js
import React from 'react';
import EmailList from '../EmailList/EmailList'
import '../SentMail/SentEmailList.css';

function SentMail() {
    return (
      <div>
        <h2>Sent Mail</h2>
        <EmailList />
      </div>
    );
  }

export default SentMail;
