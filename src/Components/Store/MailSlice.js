
import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sendMessageIsOpen: false,
        selectedMessage: null,
        emails: []
    },

    reducers: {
        openSendMessage: (state) => {
            state.sendMessageIsOpen = true
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpen = false
        },
        openMessage: (state, action) => {
            state.selectedMessage = action.payload
        },

        deleteEmailAction: (state, action) => {
            const id = action.payload;
            state.emails = state.emails.filter(email => email.id !== id);
          },
          
    },
})

export const { openSendMessage, closeSendMessage, openMessage, deleteEmailAction } = mailSlice.actions
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen
export const selectedMail = (state) => state.mail.selectedMessage
export default mailSlice.reducer
