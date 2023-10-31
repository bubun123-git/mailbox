import React from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import './Header.css';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <ReorderIcon /><br />
                    <EmailIcon />
                </IconButton>
            </div>

            <div className="header__middle">
                <div className="search_mail">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input type="text" placeholder="Search Mail" />
                    <IconButton>
                        <ExpandCircleDownIcon />
                    </IconButton>
                </div>
            </div>

            <div className="header__right">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
            </div>

        </div>
    )
}


export default Header