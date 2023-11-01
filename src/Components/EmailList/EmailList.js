import React from 'react'
import './EmailList.css'
import EmailListSetting from './EmailListSetting'
import EmailType from './EmailType'
import EmailBody from './EmailBody'


function EmailList() {
  return (
    <div className='emailList'>
        <EmailListSetting/>
        <EmailType/>
        <EmailBody name='SwapnaSarit' subject='this is subject' message="this is message" />
    </div>
  )
}

export default EmailList