import React from 'react'
import './EmailList.css'
import EmailListSetting from './EmailListSetting'
import EmailType from './EmailType'
import EmailBody from './EmailBody'
import { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../../Firebase'


function EmailList() {
  const [emails, setEmails] = useState([])

  useEffect(() => {

    db.collection('emails').onSnapshot((snapshot) => {
      setEmails(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })));
    });
  }, []);

  return (
    <div className='emailList'>
      <EmailListSetting />
      <EmailType />
      {emails.map(({ id, data }) => (
        <EmailBody
          key={id}
          id = {id}
          name={data.to}
          subject={data.subject}
          message={data.message} 
          time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
        />

      ))}

    </div>
  )
}

export default EmailList