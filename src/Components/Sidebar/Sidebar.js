import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon />} className='compose__btn'>Compose</Button>
        </div>
    )
}

export default Sidebar